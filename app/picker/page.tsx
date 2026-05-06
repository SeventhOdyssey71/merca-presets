import { GROUPS, presetsInGroup } from '@/lib/presets';
import { PickerSim } from '@/components/PickerSim';

export const metadata = {
  title: 'Picker · merca.earth presets',
};

export default function PickerPage() {
  const groups = GROUPS.map((g) => ({
    group: g,
    presets: presetsInGroup(g.id),
  }));

  return (
    <article style={{ maxWidth: 1040 }}>
      <header style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">in-product preview</span>
        <h1 style={{ marginTop: 8 }}>
          The picker, <em>simulated.</em>
        </h1>
        <p style={{ marginTop: 'var(--sp-5)', fontSize: 'var(--fs-lg)' }}>
          A working preview of the four-group picker as it would sit inside the
          merca.earth paint flow. Hover a group to expand it, click a preset to
          select it, and watch the prompt template render with a sample
          {' '}<code>{'{location}'}</code> substitution. This is the integration
          shape the team will receive — same data, same grouping, ready to drop
          into the live tool.
        </p>
      </header>

      <PickerSim groups={groups} />

      <section style={{ marginTop: 'var(--sp-10)' }}>
        <h2>Notes for the integrator</h2>
        <dl className="kv" style={{ marginTop: 'var(--sp-5)' }}>
          <dt>data source</dt>
          <dd>
            <code>GROUPS</code> and <code>PRESETS</code> from{' '}
            <code>lib/presets.ts</code>. Group items by <code>presetsInGroup(g.id)</code>.
          </dd>
          <dt>render order</dt>
          <dd>
            Sort groups by <code>pickerOrder</code> ascending. Within a group keep
            the array order from <code>presets.ts</code> — first item is the most
            legible, last is the most experimental.
          </dd>
          <dt>selection event</dt>
          <dd>
            Pass the chosen <code>preset.id</code> back to the paint flow. The flow
            looks up the preset and substitutes <code>{'{location}'}</code> in
            <code>preset.prompt</code> with the user&apos;s active selection.
          </dd>
          <dt>negative prompt handling</dt>
          <dd>
            The most load-bearing negatives are already inlined in each preset&apos;s
            positive prompt as &quot;no X, no Y&quot;. If the model exposes a
            separate negative-prompt input, also pass{' '}
            <code>preset.negativeHints.join(&apos;, &apos;)</code>. If it doesn&apos;t,
            the inline phrasing carries the load.
          </dd>
          <dt>verification badge</dt>
          <dd>
            Surface the <code>verification</code> badge in the picker (or hide it
            from end users — your call). Internally it&apos;s the truth signal for
            whether a preset has been tested against the model.
          </dd>
        </dl>
      </section>
    </article>
  );
}
