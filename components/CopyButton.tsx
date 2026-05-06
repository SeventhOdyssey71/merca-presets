'use client';

import { useState } from 'react';

export function CopyButton({ text, label = 'copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1100);
    } catch {
      // clipboard may be unavailable in some contexts
    }
  };
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: 8,
        right: 8,
        fontSize: 'var(--fs-xs)',
        padding: '4px 10px',
        background: 'var(--paper)',
        color: 'var(--ink-soft)',
      }}
    >
      {copied ? 'copied' : label}
    </button>
  );
}
