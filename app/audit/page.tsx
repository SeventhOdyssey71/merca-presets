export const metadata = {
  title: 'Audit · merca.earth presets',
};

const CRITERIA = [
  {
    name: 'Point of view',
    weight: 5,
    question:
      'Does the preset have a clear lineage — a real artist, era, or movement — or is it a generic medium label?',
  },
  {
    name: 'Distinctness',
    weight: 5,
    question:
      'Held next to the other presets, is the result obviously different or could it be confused with two of the others?',
  },
  {
    name: 'Cross-archetype consistency',
    weight: 5,
    question:
      'Does the look hold across ocean tile, urban, mountain, suburban, desert, polar — or does it only sing in one type of place?',
  },
  {
    name: 'Cross-zoom consistency',
    weight: 5,
    question:
      'At Block, City, Country zoom levels does the lens still read as the same lens?',
  },
  {
    name: 'Thumbnail legibility',
    weight: 5,
    question:
      'In the picker swatch — usually 80–120px square — can a user identify the style from across the room?',
  },
];

export default function AuditPage() {
  return (
    <article style={{ maxWidth: 880 }}>
      <header style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">audit framework</span>
        <h1 style={{ marginTop: 8 }}>
          Is this preset a <em>lens</em>, or just a filter?
        </h1>
        <p style={{ marginTop: 'var(--sp-5)', fontSize: 'var(--fs-lg)' }}>
          A 5-criterion rubric for grading the existing preset library. Each criterion
          scores 1–5; total out of 25. Sums map to keep / rework / drop decisions.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <h2>The five criteria</h2>
        <ol
          style={{
            marginTop: 'var(--sp-5)',
            paddingLeft: 0,
            listStyle: 'none',
          }}
        >
          {CRITERIA.map((c, i) => (
            <li
              key={c.name}
              style={{
                borderTop: i === 0 ? '1px solid var(--rule)' : 'none',
                borderBottom: '1px solid var(--rule)',
                padding: 'var(--sp-4) 0',
                display: 'grid',
                gridTemplateColumns: '40px 1fr 80px',
                gap: 'var(--sp-4)',
                alignItems: 'baseline',
              }}
            >
              <span
                className="mono"
                style={{ color: 'var(--ink-faint)', fontSize: 'var(--fs-sm)' }}
              >
                0{i + 1}
              </span>
              <div>
                <div style={{ fontWeight: 500, fontSize: 'var(--fs-md)' }}>{c.name}</div>
                <p style={{ marginTop: 4, fontSize: 'var(--fs-sm)' }}>{c.question}</p>
              </div>
              <span className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-faint)', textAlign: 'right' }}>
                /{c.weight}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <h2>Decision thresholds</h2>
        <dl className="kv" style={{ marginTop: 'var(--sp-5)' }}>
          <dt>20–25 · keep</dt>
          <dd>
            Preset works as-is. Maybe a tightening pass on negatives — no structural
            change.
          </dd>
          <dt>15–19 · rework</dt>
          <dd>
            Bones are good but at least one criterion is failing. Most often: the lineage
            is too vague (&quot;watercolor&quot; not &quot;Beatrix Potter mushroom plate&quot;), or the
            palette isn&apos;t locked. Ship a v0.2 prompt.
          </dd>
          <dt>≤ 14 · drop or replace</dt>
          <dd>
            Preset has no point of view, or it overlaps too closely with another preset
            that scores higher. Better to retire and use the slot for something with a
            real lens.
          </dd>
        </dl>
      </section>

      <section style={{ marginBottom: 'var(--sp-10)' }}>
        <h2>How a typical default scores</h2>
        <p style={{ marginTop: 'var(--sp-4)' }}>
          Worked examples for the kinds of presets every team starts with.
        </p>

        <ScoreCard
          name="Watercolor (generic)"
          rows={[
            ['Point of view', 1, "Medium label, no artist or era. Whose watercolor?"],
            ['Distinctness', 2, 'Reads close to half a dozen other watery styles.'],
            ['Cross-archetype', 3, 'Holds in nature; falls apart in dense urban.'],
            ['Cross-zoom', 3, 'Block reads fine; Country becomes mush.'],
            ['Thumbnail legibility', 2, 'Soft, low-contrast — invisible at 80px.'],
          ]}
          decision="rework"
          rec="Anchor to a tradition. Beatrix Potter mushroom plates, or 1920s travel-poster gouache. Lock palette to 4 colors."
        />

        <ScoreCard
          name="Anime (generic)"
          rows={[
            ['Point of view', 1, '“Anime” covers 60 years of styles — meaningless as a lens.'],
            ['Distinctness', 2, 'Reads as “AI anime” — instantly dated.'],
            ['Cross-archetype', 4, 'Surprisingly robust across location types.'],
            ['Cross-zoom', 3, 'OK at city; weird at country.'],
            ['Thumbnail legibility', 4, 'Saturated colors carry the swatch.'],
          ]}
          decision="rework"
          rec="Pick one director or era. Studio Ghibli at 6am (atmospheres), Otomo's Akira (urban), Satoshi Kon dream sequences (atmospheres). Specificity rescues this."
        />

        <ScoreCard
          name="Cyberpunk (generic)"
          rows={[
            ['Point of view', 2, 'Cliché. Neon + rain ≠ a lens.'],
            ['Distinctness', 1, 'Indistinguishable from every AI cyberpunk preset on the internet.'],
            ['Cross-archetype', 2, 'Forces every place into Tokyo at night.'],
            ['Cross-zoom', 3, 'Block fine; country impossible.'],
            ['Thumbnail legibility', 4, 'Neon thumbnails always read.'],
          ]}
          decision="drop"
          rec="No point in iterating. Replace with a specific cinematic atmosphere — Concrete Brutal hits the same brief without the cliché tax."
        />
      </section>

      <section>
        <h2>What replaces the dropped slots</h2>
        <p style={{ marginTop: 'var(--sp-4)' }}>
          Two alternates are queued in <code>lib/presets.ts</code> ready to promote when
          the audit clears slots: <em>Manga Dust</em> (modern seinen ink atmosphere) and{' '}
          <em>Tropicália</em> (mid-century Brazilian lithography).
        </p>
      </section>
    </article>
  );
}

function ScoreCard({
  name,
  rows,
  decision,
  rec,
}: {
  name: string;
  rows: [string, number, string][];
  decision: 'keep' | 'rework' | 'drop';
  rec: string;
}) {
  const total = rows.reduce((s, r) => s + r[1], 0);
  const tone =
    decision === 'keep' ? 'var(--live)' : decision === 'rework' ? 'var(--warn)' : 'var(--ink-soft)';

  return (
    <div
      style={{
        marginTop: 'var(--sp-5)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r-md)',
        padding: 'var(--sp-5)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: 'var(--sp-3)',
          marginBottom: 'var(--sp-3)',
        }}
      >
        <h3 style={{ fontSize: 'var(--fs-xl)' }}>{name}</h3>
        <span className="mono" style={{ fontSize: 'var(--fs-sm)' }}>
          {total}/25 ·{' '}
          <span style={{ color: tone, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {decision}
          </span>
        </span>
      </div>
      <table
        style={{
          width: '100%',
          fontSize: 'var(--fs-sm)',
          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} style={{ borderTop: '1px solid var(--rule)' }}>
              <td style={{ padding: '8px 0', color: 'var(--ink-soft)' }}>{r[0]}</td>
              <td className="mono" style={{ padding: '8px 0', textAlign: 'right', width: 50 }}>
                {r[1]}/5
              </td>
              <td style={{ padding: '8px 0 8px 16px', color: 'var(--ink-faint)', fontSize: 'var(--fs-xs)' }}>
                {r[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        style={{
          marginTop: 'var(--sp-3)',
          paddingTop: 'var(--sp-3)',
          borderTop: '1px solid var(--rule)',
          fontSize: 'var(--fs-sm)',
        }}
      >
        <strong style={{ color: 'var(--ink)' }}>Recommendation: </strong>
        {rec}
      </p>
    </div>
  );
}
