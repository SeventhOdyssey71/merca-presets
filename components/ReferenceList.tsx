export function ReferenceList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: 18,
        fontSize: 'var(--fs-sm)',
        color: 'var(--ink-soft)',
        lineHeight: 1.7,
      }}
    >
      {items.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  );
}
