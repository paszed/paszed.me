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
        [
          "my-8",
          "overflow-hidden",
          "rounded-2xl",
          "border border-border",
          "bg-card",
        ],
        className,
      )}
    >
      {language && (
        <figcaption
          className={cn(
            [
              "border-b border-border",
              "px-4 py-2",
              "font-mono text-xs",
              "uppercase tracking-[0.2em]",
              "text-fg-muted",
            ],
          )}
        >
          {language}
        </figcaption>
      )}

      <pre
        className={cn(
          [
            "overflow-x-auto",
            "p-5",
            "font-mono text-sm",
            "leading-7",
            "text-fg",
          ],
        )}
      >
        <code>{code}</code>
      </pre>
    </figure>
  );
}
