'use client';

import { useState } from 'react';
import type { Group, Preset } from '@/lib/types';
import { PaletteStrip } from './PaletteStrip';
import { VerificationBadge } from './VerificationBadge';

const SAMPLE_LOCATIONS = [
  'Lisbon, Alfama district',
  'Mount Fuji, north slope',
  'New Orleans, Marigny',
  'Atacama Desert, Chile',
  'Reykjavík harbour',
  'Old Delhi, Chandni Chowk',
];

export function PickerSim({
  groups,
}: {
  groups: { group: Group; presets: Preset[] }[];
}) {
  const [selected, setSelected] = useState<Preset | null>(
    groups[0]?.presets[0] ?? null,
  );
  const [location, setLocation] = useState(SAMPLE_LOCATIONS[0]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(260px, 360px) 1fr',
        gap: 'var(--sp-6)',
        alignItems: 'start',
      }}
      className="picker-sim"
    >
      <div
        style={{
          border: '1px solid var(--rule)',
          borderRadius: 'var(--r-lg)',
          padding: 'var(--sp-4)',
          background: 'var(--paper)',
          position: 'sticky',
          top: 80,
        }}
      >
        <div className="label" style={{ marginBottom: 'var(--sp-3)' }}>
          style preset
        </div>
        {groups.map(({ group, presets }) => (
          <details
            key={group.id}
            open={presets.some((p) => p.id === selected?.id)}
            style={{
              borderTop: '1px solid var(--rule)',
              padding: 'var(--sp-3) 0',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'var(--fs-lg)',
              }}
            >
              <span>{group.label}</span>
              <span
                className="mono"
                style={{
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--ink-faint)',
                }}
              >
                {presets.length}
              </span>
            </summary>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 'var(--sp-2) 0 0',
              }}
            >
              {presets.map((p) => {
                const active = p.id === selected?.id;
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => setSelected(p)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: active ? 'var(--paper-2)' : 'transparent',
                        border: '1px solid transparent',
                        borderColor: active ? 'var(--ink)' : 'transparent',
                        padding: '8px 10px',
                        marginBottom: 4,
                        borderRadius: 'var(--r-sm)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      }}
                    >
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          fontSize: 'var(--fs-xs)',
                          color: 'var(--ink-faint)',
                        }}
                      >
                        {p.tagline}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>

      <div>
        {selected ? (
          <div
            style={{
              border: '1px solid var(--rule)',
              borderRadius: 'var(--r-lg)',
              padding: 'var(--sp-5)',
              background: 'var(--paper)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 'var(--sp-3)',
                flexWrap: 'wrap',
                marginBottom: 'var(--sp-3)',
              }}
            >
              <div>
                <div className="label">selected preset</div>
                <h2 style={{ marginTop: 4 }}>{selected.name}</h2>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--ink-soft)',
                    marginTop: 4,
                  }}
                >
                  {selected.tagline}
                </p>
              </div>
              <VerificationBadge status={selected.verification} />
            </div>

            <div style={{ marginTop: 'var(--sp-4)' }}>
              <PaletteStrip colors={selected.palette} size="md" />
            </div>

            <div style={{ marginTop: 'var(--sp-5)' }}>
              <label
                className="label"
                htmlFor="loc"
                style={{ display: 'block', marginBottom: 6 }}
              >
                location input · simulated paint-flow selection
              </label>
              <select
                id="loc"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--paper)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-sm)',
                }}
              >
                {SAMPLE_LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: 'var(--sp-5)' }}>
              <div className="label" style={{ marginBottom: 6 }}>
                resolved prompt · what gets sent to the model
              </div>
              <pre
                style={{
                  background: 'var(--code-bg)',
                  borderRadius: 'var(--r-md)',
                  padding: 'var(--sp-4)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                {selected.prompt.replace('{location}', location)}
              </pre>
            </div>

            <div style={{ marginTop: 'var(--sp-5)' }}>
              <div className="label" style={{ marginBottom: 6 }}>
                negative prompt · pass to model if supported
              </div>
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-sm)',
                  color: 'var(--ink-soft)',
                }}
              >
                {selected.negativeHints.join(', ')}
              </code>
            </div>
          </div>
        ) : (
          <p>Pick a preset on the left.</p>
        )}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .picker-sim {
            grid-template-columns: 1fr !important;
          }
          .picker-sim > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
