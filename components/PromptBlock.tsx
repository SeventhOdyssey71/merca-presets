import { CopyButton } from './CopyButton';

export function PromptBlock({ prompt }: { prompt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--code-bg)',
        borderRadius: 'var(--r-md)',
        padding: 'var(--sp-4)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        color: 'var(--ink)',
      }}
    >
      <CopyButton text={prompt} />
      {prompt}
    </div>
  );
}
