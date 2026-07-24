interface CodeBlockProps {
  language?: string;
  code: string;
}

export function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-border bg-card">
      {language && (
        <figcaption className="border-b border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-fg-muted">
          {language}
        </figcaption>
      )}

      <pre className="overflow-x-auto p-5 text-sm leading-7">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
