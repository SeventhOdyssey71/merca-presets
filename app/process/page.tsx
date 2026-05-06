export const metadata = {
  title: 'Process · merca.earth presets',
};

export default function ProcessPage() {
  return (
    <article style={{ maxWidth: 880 }}>
      <header style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">methodology · what was done, what wasn&apos;t</span>
        <h1 style={{ marginTop: 8 }}>
          Curation is locked. <em>Model iteration is the next half.</em>
        </h1>
        <p style={{ marginTop: 'var(--sp-5)', fontSize: 'var(--fs-lg)' }}>
          A deliberate page to set expectations. The brief asked for curation,
          art direction, *and* prompt iteration against the production model.
          The first two are done. The third needs the team and a few hours of
          access to the live generator. Here&apos;s the honest split.
        </p>
      </header>

      <Stage
        n="01"
        title="Reference + lineage research"
        status="done"
        body="For each preset: three deep references to real artists, eras, or works. The rule applied: a lineage like 'Saul Steinberg + George Grosz + Sempé' produces a stronger lens than 'pen-and-ink illustration'. Geographic spread was rebalanced — Memphis Postcard demoted, Shan Shui added, Mughal Miniature and Mexican Lotería queued in alternates."
      />

      <Stage
        n="02"
        title="Palette + composition lock"
        status="done"
        body="Each preset carries a 2–6 colour palette as hex values. Palettes are documented in two places: the type system (lib/presets.ts) and the swatch strip on every detail page. They're locked-in art-direction calls; the prompts try to enforce them via lineage references and explicit colour names."
      />

      <Stage
        n="03"
        title="Prompt v1.0 drafted"
        status="done"
        body="Each preset has a current prompt template with a {location} substitution token. The most load-bearing negatives are folded into the positive prompt as 'no X, no Y' so they survive on models without a separate negative-prompt input (FLUX, Imagen, most fine-tunes). The negativeHints array remains the canonical list — pass it to whatever negative-prompt hook the model exposes."
      />

      <Stage
        n="04"
        title="Picker information architecture"
        status="done"
        body="Four intent-based groups (Atmospheres / Compositions / Documents / Pop Surfaces) with stated ordering rules and edge-case handling. The /picker route renders a working preview using the actual integration shape — same data, same grouping, ready to drop into the live tool."
      />

      <Stage
        n="05"
        title="Audit framework for existing presets"
        status="done"
        body="Five-criterion rubric (point of view / distinctness / cross-archetype / cross-zoom / thumbnail legibility) with explicit keep / rework / drop thresholds. Three worked examples (Watercolor, Anime, Cyberpunk) show how the rubric applies. The framework is real; the specific judgments on the team's actual current preset list still need to happen — I haven't seen that list."
      />

      <Stage
        n="06"
        title="Prompt iteration against the production model"
        status="not-done"
        body="The single biggest piece of remaining work. The brief explicitly asks for 'iterate on the prompt against the actual model' — until that happens, every prompt in the deliverable is a v1.0 first draft, not a tested artefact. Recommended loop: pick three representative presets (one per group), run each at three locations × three zooms, score each output against the audit rubric, revise the prompt for anything that drops below 20/25, repeat. Lock to v1.1 once a preset passes the sweep."
        next="The team needs to wire the prompts into the merca.earth model harness and run a 9-tile sample sweep per preset (3 locations × 3 zooms). Drop outputs into public/samples/<id>/<archetype>-<zoom>.png — the SampleGrid component on every detail page auto-populates."
      />

      <Stage
        n="07"
        title="Cross-archetype testing"
        status="not-done"
        body="Each preset's detail page shows a 6 × 3 grid (six location archetypes — ocean, urban, mountain, suburban, desert, polar — × three zoom levels). All 18 cells are currently 'untested' for every preset. The grid auto-populates as the team produces outputs."
        next="Run the sweep. Score each tile against the rubric. Anything below 20/25 on cross-archetype or cross-zoom triggers a v1.1 prompt revision."
      />

      <Stage
        n="08"
        title="Audit pass on the team's existing in-product preset library"
        status="not-done"
        body="The brief asks for keep / rework / drop calls on the team's current presets. I never accessed that list — the audit page shows the framework and three generic worked examples, not real decisions on the live library."
        next="Share the current preset list (names, prompts, sample outputs if available). I'll run the rubric on each entry, produce keep / rework / drop recommendations, and slot in alternates from this library where dropping creates room."
      />

      <Stage
        n="09"
        title="bestZoomLevels claims verified"
        status="provisional"
        body="Each preset declares a `bestZoomLevels` array. Currently those are *expected* working zooms based on the lens (e.g. Concrete Brutal at country zoom would be too wide for the brutalist motif). They haven't been measured. Marked as 'provisional' on every detail page until the verification pipeline confirms or revises them."
        next="As the test sweep runs, update bestZoomLevels in lib/presets.ts to reflect what actually held. Once a preset reaches `verification: 'fully-tested'`, drop the 'provisional' badge."
      />

      <Stage
        n="10"
        title="Final keep / rework / drop on the new 10"
        status="not-done"
        body="Once the prompts have been iterated, some of the new 10 will turn out to be weaker than they look on paper. The alternates list (Mughal, Lotería, Manga Dust, Tropicália, demoted Memphis) is the bench. Promote from there as the audit clears slots."
      />
    </article>
  );
}

const STATUS_META = {
  done: { label: 'done', tone: 'var(--live)' },
  'not-done': { label: 'pending', tone: 'var(--warn)' },
  provisional: { label: 'provisional', tone: 'var(--ink-soft)' },
} as const;

function Stage({
  n,
  title,
  status,
  body,
  next,
}: {
  n: string;
  title: string;
  status: keyof typeof STATUS_META;
  body: string;
  next?: string;
}) {
  const m = STATUS_META[status];
  return (
    <section
      style={{
        borderTop: '1px solid var(--rule)',
        padding: 'var(--sp-5) 0',
        display: 'grid',
        gridTemplateColumns: '50px 1fr',
        gap: 'var(--sp-4)',
      }}
    >
      <div className="mono" style={{ color: 'var(--ink-faint)', fontSize: 'var(--fs-sm)' }}>
        {n}
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 'var(--sp-3)',
            flexWrap: 'wrap',
          }}
        >
          <h3 style={{ fontSize: 'var(--fs-xl)' }}>{title}</h3>
          <span
            className="mono"
            style={{
              fontSize: 'var(--fs-xs)',
              color: m.tone,
              padding: '2px 10px',
              border: `1px solid ${m.tone}`,
              borderRadius: 999,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {m.label}
          </span>
        </div>
        <p style={{ marginTop: 'var(--sp-3)' }}>{body}</p>
        {next && (
          <p
            style={{
              marginTop: 'var(--sp-3)',
              padding: 'var(--sp-3) var(--sp-4)',
              background: 'var(--paper-2)',
              borderLeft: '3px solid var(--warn)',
              borderRadius: 'var(--r-sm)',
              fontSize: 'var(--fs-sm)',
            }}
          >
            <strong style={{ color: 'var(--ink)' }}>What needs to happen: </strong>
            {next}
          </p>
        )}
      </div>
    </section>
  );
}
