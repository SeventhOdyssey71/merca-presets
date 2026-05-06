import { GROUPS, PRESETS, presetsInGroup } from '@/lib/presets';
import { PresetCard } from '@/components/PresetCard';

export default function Home() {
  return (
    <>
      <section style={{ marginTop: 24, marginBottom: 'var(--sp-12)' }}>
        <h1 style={{ maxWidth: 880 }}>
          A preset library where every style is{' '}
          <em>recognizable on sight.</em>
        </h1>
        <p style={{ marginTop: 'var(--sp-5)', fontSize: 'var(--fs-lg)' }}>
          Ten AI style presets for the merca.earth map-painting tool. Each one is a lens —
          anchored to a real lineage of artists or movements, palette-locked, and tested
          across location archetypes and zoom levels. Grouped by intent, not medium.
        </p>
        <div
          className="kv"
          style={{ marginTop: 'var(--sp-6)', maxWidth: 720 }}
        >
          <dt>presets</dt>
          <dd className="mono">{PRESETS.length}</dd>
          <dt>groups</dt>
          <dd className="mono">{GROUPS.length}</dd>
          <dt>format</dt>
          <dd className="mono">JSON · TS · Markdown</dd>
          <dt>status</dt>
          <dd className="mono" style={{ color: 'var(--warn)' }}>
            v0.1 — pending model-side iteration
          </dd>
        </div>
      </section>

      {GROUPS.map((g) => {
        const items = presetsInGroup(g.id);
        return (
          <section key={g.id} style={{ marginBottom: 'var(--sp-10)' }}>
            <header style={{ marginBottom: 'var(--sp-5)' }}>
              <h2>
                <em>{g.label}</em>
              </h2>
              <p style={{ marginTop: 6 }}>{g.blurb}</p>
            </header>
            <div className="grid-fit">
              {items.map((p) => (
                <PresetCard key={p.id} preset={p} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
