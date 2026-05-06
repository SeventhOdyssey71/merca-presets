import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GROUPS, PRESETS, presetById } from '@/lib/presets';
import { PaletteStrip } from '@/components/PaletteStrip';
import { PromptBlock } from '@/components/PromptBlock';
import { ReferenceList } from '@/components/ReferenceList';
import { SampleGrid } from '@/components/SampleGrid';
import { VerificationBadge } from '@/components/VerificationBadge';

export function generateStaticParams() {
  return PRESETS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = presetById(id);
  if (!p) return {};
  return {
    title: `${p.name} · merca.earth presets`,
    description: p.description,
  };
}

export default async function PresetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const preset = presetById(id);
  if (!preset) notFound();
  const group = GROUPS.find((g) => g.id === preset.group);

  return (
    <article style={{ maxWidth: 960 }}>
      <Link
        href="/"
        style={{
          fontSize: 'var(--fs-sm)',
          color: 'var(--ink-faint)',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: 'var(--sp-5)',
        }}
      >
        ← all presets
      </Link>

      <header style={{ marginBottom: 'var(--sp-8)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--sp-3)',
            flexWrap: 'wrap',
          }}
        >
          <span className="label">{group?.label}</span>
          <VerificationBadge status={preset.verification} />
        </div>
        <h1 style={{ marginTop: 8 }}>{preset.name}</h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'var(--fs-xl)',
            color: 'var(--ink-soft)',
            marginTop: 6,
          }}
        >
          {preset.tagline}
        </p>
      </header>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <p style={{ fontSize: 'var(--fs-lg)' }}>{preset.description}</p>
      </section>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">palette</span>
        <div style={{ marginTop: 8 }}>
          <PaletteStrip colors={preset.palette} size="lg" />
          <div
            style={{
              marginTop: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--ink-faint)',
              wordBreak: 'break-all',
            }}
          >
            {preset.palette.join(' · ')}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">references</span>
        <div style={{ marginTop: 8 }}>
          <ReferenceList items={preset.references} />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">prompt template</span>
        <div style={{ marginTop: 8 }}>
          <PromptBlock prompt={preset.prompt} />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <span className="label">negative hints</span>
        <p
          style={{
            marginTop: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--ink-soft)',
          }}
        >
          {preset.negativeHints.map((n, i) => (
            <span key={n}>
              {i > 0 && ' · '}
              {n}
            </span>
          ))}
        </p>
      </section>

      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <SampleGrid presetId={preset.id} />
      </section>

      <section>
        <dl className="kv">
          <dt>id</dt>
          <dd className="mono">{preset.id}</dd>
          <dt>group</dt>
          <dd className="mono">{preset.group}</dd>
          <dt>best zooms</dt>
          <dd className="mono">
            {preset.bestZoomLevels.join(' · ')}
            {preset.verification !== 'fully-tested' && (
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--warn)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                provisional
              </span>
            )}
          </dd>
          <dt>renders text</dt>
          <dd className="mono">{preset.expectsText ? 'yes' : 'no'}</dd>
        </dl>
      </section>
    </article>
  );
}
