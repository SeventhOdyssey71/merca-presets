import Link from 'next/link';
import { ALTERNATES, GROUPS, PRESETS, presetsInGroup } from '@/lib/presets';
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
          Ten AI style presets for the merca.earth map-painting tool. Each one
          is a lens — anchored to a real lineage of artists or movements,
          palette-locked, prompt-drafted, and ready for the model-iteration
          pass. Grouped by intent, not medium.
        </p>
        <div
          className="kv"
          style={{ marginTop: 'var(--sp-6)', maxWidth: 720 }}
        >
          <dt>presets</dt>
          <dd className="mono">
            {PRESETS.length}{' '}
            <span style={{ color: 'var(--ink-faint)' }}>
              + {ALTERNATES.length} alternates
            </span>
          </dd>
          <dt>groups</dt>
          <dd className="mono">{GROUPS.length}</dd>
          <dt>format</dt>
          <dd className="mono">JSON · TS · Markdown</dd>
          <dt>curation</dt>
          <dd className="mono" style={{ color: 'var(--live)' }}>
            v1.0 — locked
          </dd>
          <dt>prompts</dt>
          <dd className="mono" style={{ color: 'var(--warn)' }}>
            untested against production model —{' '}
            <Link href="/process" style={{ color: 'inherit' }}>
              see process
            </Link>
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

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <header style={{ marginBottom: 'var(--sp-5)' }}>
          <h2>
            <em>Alternates</em>
          </h2>
          <p style={{ marginTop: 6 }}>
            The bench — held in reserve in <code>lib/presets.ts</code>. Promote
            into the core 10 when an existing preset drops out, or surface for
            seasonal campaigns. Includes one <em>demoted</em> core preset
            (Memphis Postcard) — kept available rather than deleted, per the
            audit&apos;s &quot;demote, don&apos;t delete&quot; rule.
          </p>
        </header>
        <div className="grid-fit">
          {ALTERNATES.map((a) => (
            <div
              key={a.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp-3)',
                padding: 'var(--sp-5)',
                border: '1px dashed var(--rule)',
                borderRadius: 'var(--r-lg)',
                background: 'var(--paper)',
                height: '100%',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 'var(--sp-2)',
                    marginBottom: 4,
                  }}
                >
                  <h3 style={{ fontSize: 'var(--fs-xl)', margin: 0 }}>{a.name}</h3>
                  <span
                    style={{
                      fontSize: 'var(--fs-xs)',
                      fontFamily: 'var(--font-mono)',
                      color: a.demotedFrom ? 'var(--warn)' : 'var(--ink-faint)',
                      padding: '2px 8px',
                      border: '1px solid currentColor',
                      borderRadius: 999,
                      whiteSpace: 'nowrap',
                      textTransform: 'lowercase',
                    }}
                  >
                    {a.demotedFrom ? 'demoted' : 'queued'}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--ink-faint)',
                    fontSize: 'var(--fs-md)',
                  }}
                >
                  {a.tagline}
                </span>
              </div>
              <p style={{ fontSize: 'var(--fs-sm)' }}>{a.description}</p>
              <div
                style={{
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--ink-faint)',
                  fontFamily: 'var(--font-mono)',
                  marginTop: 'auto',
                }}
              >
                group · <strong style={{ color: 'var(--ink)' }}>{a.group}</strong>
              </div>
              {a.demotionReason && (
                <p
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--ink-faint)',
                    fontStyle: 'italic',
                    borderLeft: '2px solid var(--rule)',
                    paddingLeft: 'var(--sp-3)',
                    margin: 0,
                  }}
                >
                  Demoted: {a.demotionReason}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
