import Link from 'next/link';

export function Header() {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--rule)',
        padding: 'var(--sp-4) 0',
        marginBottom: 'var(--sp-8)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--sp-3)',
        position: 'sticky',
        top: 0,
        background: 'color-mix(in srgb, var(--paper) 92%, transparent)',
        backdropFilter: 'saturate(140%) blur(8px)',
        WebkitBackdropFilter: 'saturate(140%) blur(8px)',
        zIndex: 10,
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--fs-xl)',
            fontStyle: 'italic',
          }}
        >
          merca.earth
        </span>
        <span className="label">style preset library</span>
      </Link>
      <nav
        style={{
          display: 'flex',
          gap: 'var(--sp-1)',
          flexWrap: 'wrap',
        }}
      >
        <NavLink href="/">Presets</NavLink>
        <NavLink href="/grouping">Grouping</NavLink>
        <NavLink href="/audit">Audit</NavLink>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontSize: 'var(--fs-sm)',
        color: 'var(--ink-soft)',
        padding: '6px 10px',
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  );
}
