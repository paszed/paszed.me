import { cn } from "@/lib";

interface CodeBlockProps {
  language?: string;
  code: string;
  className?: string;
}

export function CodeBlock({
  language,
  code,
  className,
}: CodeBlockProps) {
  return (
    <figure
      className={cn(
        "my-8 overflow-hidden rounded-2xl border border-border bg-card",
        className,
      )}
    >
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
