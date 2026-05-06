#!/usr/bin/env node
/**
 * Generates strategic sample images for every preset across a curated set
 * of archetype × zoom combinations, via the Pollinations public Flux
 * endpoint. Saves to public/samples/<id>/<archetype>-<zoom>.jpg.
 *
 * These are PREVIEWS, not merca.earth production-model outputs — the
 * detail page surfaces this disclaimer.
 *
 * Strategy: 3 strategic cells per preset (urban-city, mountain-country,
 * desert-city) instead of the full 18 — the demo grid shows real images
 * across every preset rather than full grids on a few presets and empty
 * grids on others. Pollinations rate-limits hard from a single IP so the
 * pacing has to be conservative.
 *
 * Resumable: skips files that already exist and are non-empty.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const data = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'spec/presets.json'), 'utf8'),
);

const STRATEGIC_CELLS = [
  { archetype: 'urban', zoom: 'city', location: 'downtown Tokyo at street level' },
  { archetype: 'mountain', zoom: 'country', location: 'the Alps mountain range' },
  { archetype: 'desert', zoom: 'city', location: 'Marrakech medina at the edge of the Sahara' },
  { archetype: 'ocean', zoom: 'country', location: 'the open Pacific Ocean' },
  { archetype: 'polar', zoom: 'block', location: 'a small arctic research outpost on snow' },
];

const WIDTH = 384;
const HEIGHT = 384;
const BASE_DELAY_MS = 7000;
const TIMEOUT_MS = 120000;
const SEED = 42;
const MODEL = 'flux';

function buildJobs() {
  // Order: cell-major rather than preset-major. Walks every preset for the
  // first cell before moving to the second. Result: after one full pass
  // (~10 successful gens) every preset has at least one sample, instead of
  // a few presets being full and the rest being empty.
  const jobs = [];
  for (const preset of data.presets) {
    const dir = path.join(ROOT, 'public', 'samples', preset.id);
    fs.mkdirSync(dir, { recursive: true });
  }
  for (const cell of STRATEGIC_CELLS) {
    for (const preset of data.presets) {
      const out = path.join(ROOT, 'public', 'samples', preset.id, `${cell.archetype}-${cell.zoom}.jpg`);
      if (fs.existsSync(out) && fs.statSync(out).size > 1000) continue;
      const filled = preset.prompt.replace('{location}', cell.location);
      const params = new URLSearchParams({
        width: String(WIDTH),
        height: String(HEIGHT),
        nologo: 'true',
        model: MODEL,
        seed: String(SEED),
      });
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(filled)}?${params}`;
      jobs.push({ url, out, preset: preset.id, key: `${cell.archetype}-${cell.zoom}` });
    }
  }
  return jobs;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      signal: ctrl.signal,
      headers: {
        'User-Agent': 'merca-presets-sampler/1.1',
        Referer: 'https://merca.earth',
      },
    });
  } finally {
    clearTimeout(t);
  }
}

async function generate(job) {
  const backoffs = [0, 20000, 45000, 90000];
  for (let attempt = 0; attempt < backoffs.length; attempt++) {
    if (backoffs[attempt] > 0) {
      console.log(`   ... 429 backoff ${backoffs[attempt] / 1000}s`);
      await sleep(backoffs[attempt]);
    }
    try {
      const res = await fetchWithTimeout(job.url, TIMEOUT_MS);
      if (res.status === 429) {
        if (attempt === backoffs.length - 1) return { ok: false, error: 'HTTP 429 (gave up)' };
        continue;
      }
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1000) return { ok: false, error: `tiny response ${buf.length}b` };
      fs.writeFileSync(job.out, buf);
      return { ok: true, bytes: buf.length };
    } catch (e) {
      if (attempt === backoffs.length - 1) return { ok: false, error: e.message };
    }
  }
  return { ok: false, error: 'unreachable' };
}

const jobs = buildJobs();
console.log(`${jobs.length} jobs queued`);

let done = 0;
let ok = 0;
let fail = 0;
const startedAt = Date.now();

for (const j of jobs) {
  const t0 = Date.now();
  const result = await generate(j);
  done++;
  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(0);
  if (result.ok) {
    ok++;
    console.log(`[${elapsed}s] ✓ ${done}/${jobs.length}  ${j.preset}/${j.key}  ${result.bytes}b  ${Date.now() - t0}ms`);
  } else {
    fail++;
    console.log(`[${elapsed}s] ✗ ${done}/${jobs.length}  ${j.preset}/${j.key}  ${result.error}`);
  }
  if (done < jobs.length) await sleep(BASE_DELAY_MS);
}

const took = ((Date.now() - startedAt) / 1000).toFixed(1);
console.log(`\nDone in ${took}s · ok ${ok} · fail ${fail}`);
process.exit(fail > 0 ? 1 : 0);
