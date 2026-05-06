import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'merca.earth · style preset library',
  description:
    'Ten AI style presets for the merca.earth map-painting tool — each a recognizable lens on a place. Curated, tested, prompt-engineered.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Header />
          <main className="fade-in">{children}</main>
          <footer
            style={{
              marginTop: 'var(--sp-12)',
              paddingTop: 'var(--sp-5)',
              borderTop: '1px solid var(--rule)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--ink-faint)',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--sp-4)',
            }}
          >
            <span>
              Curation, art direction, and prompt engineering for{' '}
              <a
                href="https://merca.earth"
                target="_blank"
                rel="noreferrer"
              >
                merca.earth
              </a>
              .
            </span>
            <span className="mono">v0.1.0</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
