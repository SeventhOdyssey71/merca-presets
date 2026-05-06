import { GROUPS, presetsInGroup } from '@/lib/presets';

export const metadata = {
  title: 'Grouping · merca.earth presets',
};

export default function GroupingPage() {
  return (
    <article style={{ maxWidth: 880 }}>
      <header style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">picker information architecture</span>
        <h1 style={{ marginTop: 8 }}>
          Grouping the picker by <em>intent</em>, not medium.
        </h1>
        <p style={{ marginTop: 'var(--sp-5)', fontSize: 'var(--fs-lg)' }}>
          The current picker is a flat list. That works when there are six presets. With
          twelve or more it becomes a wall — every preset costs the same to scan, so
          decision quality drops. The fix isn&apos;t alphabetical order; it&apos;s grouping
          around <em>why</em> the user is choosing.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <h2>
          The four <em>intents</em>
        </h2>
        <p style={{ marginTop: 'var(--sp-4)' }}>
          People come to the picker in one of four mental states. Each state corresponds to
          a different group, and each group surfaces presets that match that state best.
        </p>

        <div style={{ marginTop: 'var(--sp-6)' }}>
          {GROUPS.map((g) => {
            const items = presetsInGroup(g.id);
            return (
              <section
                key={g.id}
                style={{
                  borderTop: '1px solid var(--rule)',
                  padding: 'var(--sp-5) 0',
                }}
              >
                <header
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: 8,
                  }}
                >
                  <h3 style={{ fontSize: 'var(--fs-2xl)' }}>
                    <em>{g.label}</em>
                  </h3>
                  <span className="label">{items.length} presets</span>
                </header>
                <p style={{ marginTop: 'var(--sp-3)' }}>{g.blurb}</p>
                <ul
                  style={{
                    margin: 'var(--sp-3) 0 0',
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--sp-2)',
                  }}
                >
                  {items.map((p) => (
                    <li
                      key={p.id}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--fs-xs)',
                        padding: '4px 10px',
                        border: '1px solid var(--rule)',
                        borderRadius: 999,
                        color: 'var(--ink-soft)',
                      }}
                    >
                      {p.name}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <h2>Order rules</h2>
        <p style={{ marginTop: 'var(--sp-4)' }}>
          Two layers of ordering, each deliberate.
        </p>
        <ol style={{ marginTop: 'var(--sp-4)', paddingLeft: 20, fontSize: 'var(--fs-md)', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          <li>
            <strong style={{ color: 'var(--ink)' }}>Across groups</strong> — top to bottom by
            approachability. Atmospheres first because mood-led is the most common
            first-time intent. Pop Surfaces last because it rewards exploration.
          </li>
          <li style={{ marginTop: 'var(--sp-3)' }}>
            <strong style={{ color: 'var(--ink)' }}>Within each group</strong> — most legible
            preset first, most experimental last. The first preset in any group should
            never confuse a new user. The last preset can be weird; that&apos;s the point.
          </li>
        </ol>
      </section>

      <section>
        <h2>Edge cases</h2>
        <dl className="kv" style={{ marginTop: 'var(--sp-4)' }}>
          <dt>preset fits two intents</dt>
          <dd>
            Pick the dominant one. If a Memphis Postcard could be Compositions or Pop
            Surfaces, the deciding question is: <em>does the user pick this for the
            geometry or for the cheer?</em> Cheer wins → Pop Surfaces.
          </dd>
          <dt>seasonal / themed</dt>
          <dd>
            New year, holidays, regional events. Don&apos;t add a fifth permanent group —
            surface temporary picks above the four groups for the campaign window, then
            retire them.
          </dd>
          <dt>a preset isn&apos;t working</dt>
          <dd>
            Demote, don&apos;t delete. Move it to the bottom of its group and revisit on
            the next iteration. Deleting punishes users who built a habit; demotion lets
            them keep finding it while new users see better options first.
          </dd>
        </dl>
      </section>
    </article>
  );
}
