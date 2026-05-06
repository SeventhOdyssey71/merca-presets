import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

const ARCHETYPES = [
  { key: 'ocean', label: 'Ocean tile', note: 'Empty water — tests negative space + composition.' },
  { key: 'urban', label: 'Dense urban', note: 'Manhattan, Tokyo, Paris — tests detail discipline.' },
  { key: 'mountain', label: 'Mountain', note: 'Atmospheric depth + scale.' },
  { key: 'suburban', label: 'Suburban grid', note: 'Repetitive forms — tests composition rescue.' },
  { key: 'desert', label: 'Desert', note: 'Minimalism — palette must hold against beige.' },
  { key: 'polar', label: 'Polar', note: 'Near-monochrome — tests value handling.' },
];

const ZOOMS = ['block', 'city', 'country'] as const;

/**
 * Renders the 6 × 3 archetype × zoom test grid for a preset.
 * Reads `public/samples/<id>/<archetype>-<zoom>.{png,jpg,webp}` at build
 * time. Slots without a sample render an empty test-plan card. As the
 * merca.earth team produces tested outputs they drop them in the folder
 * and the grid auto-populates.
 */
export function SampleGrid({ presetId }: { presetId: string }) {
  const dir = path.join(process.cwd(), 'public', 'samples', presetId);
  const exts = ['png', 'jpg', 'jpeg', 'webp'];
  const exists: Record<string, string> = {};
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const m = f.match(/^([a-z]+)-([a-z]+)\.([a-z]+)$/i);
      if (!m) continue;
      const [, archetype, zoom, ext] = m;
      if (!exts.includes(ext.toLowerCase())) continue;
      exists[`${archetype}-${zoom}`] = `/samples/${presetId}/${f}`;
    }
  } catch {
    // No samples folder yet — every cell falls back to empty.
  }

  const filled = Object.keys(exists).length;
  const total = ARCHETYPES.length * ZOOMS.length;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 'var(--sp-3)',
          flexWrap: 'wrap',
          gap: 'var(--sp-2)',
        }}
      >
        <span className="label">test grid · 6 archetypes × 3 zooms</span>
        <span
          className="mono"
          style={{
            fontSize: 'var(--fs-xs)',
            color: filled === total ? 'var(--live)' : 'var(--ink-faint)',
          }}
        >
          {filled}/{total} samples
        </span>
      </div>
      {filled > 0 && (
        <p
          style={{
            margin: '0 0 var(--sp-3)',
            padding: 'var(--sp-3) var(--sp-4)',
            background: 'var(--paper-2)',
            borderLeft: '3px solid var(--warn)',
            borderRadius: 'var(--r-sm)',
            fontSize: 'var(--fs-xs)',
            color: 'var(--ink-soft)',
          }}
        >
          <strong style={{ color: 'var(--ink)' }}>Preview generations.</strong>{' '}
          These tiles are produced by a public Flux endpoint, not the
          merca.earth production model. They show the prompt produces coherent
          style direction; final tuning still needs the production model. See{' '}
          <a href="/process">/process</a> for the iteration loop.
        </p>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(120px, 180px) repeat(3, 1fr)',
          gap: 'var(--sp-2)',
          fontSize: 'var(--fs-xs)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <div />
        {ZOOMS.map((z) => (
          <div
            key={z}
            style={{
              textAlign: 'center',
              color: 'var(--ink-faint)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              padding: '4px 0',
            }}
          >
            {z}
          </div>
        ))}

        {ARCHETYPES.map((a) => (
          <Row key={a.key} archetype={a} samples={exists} />
        ))}
      </div>
    </div>
  );
}

function Row({
  archetype,
  samples,
}: {
  archetype: { key: string; label: string; note: string };
  samples: Record<string, string>;
}) {
  return (
    <>
      <div
        style={{
          padding: 'var(--sp-2) 0',
          borderTop: '1px solid var(--rule)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <div style={{ fontWeight: 500, fontSize: 'var(--fs-sm)' }}>{archetype.label}</div>
        <div
          style={{
            color: 'var(--ink-faint)',
            fontSize: 'var(--fs-xs)',
            marginTop: 2,
          }}
        >
          {archetype.note}
        </div>
      </div>
      {ZOOMS.map((z) => {
        const src = samples[`${archetype.key}-${z}`];
        return (
          <div
            key={z}
            style={{
              borderTop: '1px solid var(--rule)',
              padding: 'var(--sp-2) 0',
            }}
          >
            <div
              style={{
                aspectRatio: '1 / 1',
                background: src ? 'transparent' : 'var(--paper-2)',
                borderRadius: 'var(--r-sm)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-faint)',
                fontSize: 10,
              }}
            >
              {src ? (
                <Image
                  src={src}
                  alt={`${archetype.label} at ${z} zoom`}
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              ) : (
                <span>untested</span>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
