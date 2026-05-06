export function PaletteStrip({
  colors,
  size = 'md',
}: {
  colors: string[];
  size?: 'sm' | 'md' | 'lg';
}) {
  const h = size === 'sm' ? 22 : size === 'lg' ? 48 : 32;
  return (
    <div
      style={{
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
      }}
    >
      {colors.map((c) => (
        <div
          key={c}
          title={c}
          style={{
            height: h,
            flex: '1 1 32px',
            minWidth: 32,
            borderRadius: 'var(--r-sm)',
            background: c,
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        />
      ))}
    </div>
  );
}
