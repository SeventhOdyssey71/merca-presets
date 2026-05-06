import Link from 'next/link';
import type { Preset } from '@/lib/types';
import { PaletteStrip } from './PaletteStrip';

export function PresetCard({ preset }: { preset: Preset }) {
  return (
    <Link
      href={`/presets/${preset.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-3)',
        padding: 'var(--sp-5)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r-lg)',
        background: 'var(--paper)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color var(--t-fast) var(--ease), transform var(--t-fast) var(--ease)',
        height: '100%',
      }}
      className="preset-card"
    >
      <div>
        <h3 style={{ fontSize: 'var(--fs-xl)', marginBottom: 4 }}>{preset.name}</h3>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--ink-faint)',
            fontSize: 'var(--fs-md)',
          }}
        >
          {preset.tagline}
        </span>
      </div>

      <p style={{ fontSize: 'var(--fs-sm)' }}>{preset.description}</p>

      <PaletteStrip colors={preset.palette} />

      <div
        style={{
          display: 'flex',
          gap: 'var(--sp-3)',
          fontSize: 'var(--fs-xs)',
          color: 'var(--ink-faint)',
          fontFamily: 'var(--font-mono)',
          flexWrap: 'wrap',
          marginTop: 'auto',
        }}
      >
        <span>
          best · <strong style={{ color: 'var(--ink)' }}>{preset.bestZoomLevels[0]}</strong>{' '}
          → {preset.bestZoomLevels[preset.bestZoomLevels.length - 1]}
        </span>
        {preset.expectsText && <span>renders text</span>}
      </div>
    </Link>
  );
}
