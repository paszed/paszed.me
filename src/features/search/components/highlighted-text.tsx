import { cn } from "@/lib/utils";

import type { HighlightPart } from "../lib/highlight-match";

interface HighlightedTextProps {
  parts: readonly HighlightPart[];
}

export function HighlightedText({
  parts,
}: HighlightedTextProps) {
  return (
    <>
      {parts.map((part, index) => (
        <mark
          key={index}
          className={cn(
            "rounded",
            part.highlighted
              ? "bg-accent/15 text-accent"
              : "bg-transparent text-inherit",
          )}
        >
          {part.text}
        </mark>
      ))}
    </>
  );
}
