import type { Verification } from '@/lib/types';

const META: Record<Verification, { label: string; tone: string; tooltip: string }> = {
  'curation-only': {
    label: 'curation only',
    tone: 'var(--warn)',
    tooltip:
      'References, palette, prompt, and group are locked. Prompt has not been run against the production model yet.',
  },
  'prompt-tested': {
    label: 'prompt tested',
    tone: 'var(--ink-soft)',
    tooltip:
      'Prompt has been run on at least one archetype/zoom and adjusted at least once. Not yet a full sweep.',
  },
  'fully-tested': {
    label: 'fully tested',
    tone: 'var(--live)',
    tooltip:
      'Eighteen-tile sweep complete (6 archetypes × 3 zooms). Prompt locked.',
  },
};

export function VerificationBadge({
  status,
  size = 'md',
}: {
  status: Verification;
  size?: 'sm' | 'md';
}) {
  const m = META[status];
  return (
    <span
      title={m.tooltip}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: size === 'sm' ? 'var(--fs-xs)' : 'var(--fs-sm)',
        fontFamily: 'var(--font-mono)',
        color: m.tone,
        padding: size === 'sm' ? '2px 8px' : '4px 10px',
        border: `1px solid ${m.tone}`,
        borderRadius: 999,
        whiteSpace: 'nowrap',
        textTransform: 'lowercase',
        letterSpacing: '0.02em',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: m.tone,
          display: 'inline-block',
        }}
      />
      {m.label}
    </span>
  );
}
