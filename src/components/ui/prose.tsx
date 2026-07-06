import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ProseProps = HTMLAttributes<HTMLDivElement>;

export function Prose({
  className,
  children,
  ...props
}: ProseProps) {
  return (
    <div
      className={cn(
        // Base
        "font-serif text-lg leading-9 text-fg-secondary",

        // Rhythm
        "[&>*+*]:mt-8",

        // Paragraphs
        "[&_p]:leading-9",

        // Headings
        "[&_h2]:mt-20",
        "[&_h2]:font-serif",
        "[&_h2]:text-3xl",
        "[&_h2]:font-semibold",
        "[&_h2]:tracking-tight",
        "[&_h2]:text-fg",

        "[&_h3]:mt-14",
        "[&_h3]:font-serif",
        "[&_h3]:text-2xl",
        "[&_h3]:font-semibold",
        "[&_h3]:tracking-tight",
        "[&_h3]:text-fg",

        // Links
        "[&_a]:font-medium",
        "[&_a]:text-accent",
        "[&_a]:underline",
        "[&_a]:underline-offset-4",
        "[&_a:hover]:text-accent-hover",

        // Lists
        "[&_ul]:list-disc",
        "[&_ul]:space-y-3",
        "[&_ul]:pl-6",

        "[&_ol]:list-decimal",
        "[&_ol]:space-y-3",
        "[&_ol]:pl-6",

        "[&_li]:marker:text-accent",

        // Quotes
        "[&_blockquote]:border-l-2",
        "[&_blockquote]:border-border",
        "[&_blockquote]:pl-6",
        "[&_blockquote]:italic",
        "[&_blockquote]:text-fg",

        // Horizontal rules
        "[&_hr]:border-border",
        "[&_hr]:my-16",

        // Inline code
        "[&_code]:rounded-md",
        "[&_code]:bg-muted",
        "[&_code]:px-1.5",
        "[&_code]:py-1",
        "[&_code]:font-mono",
        "[&_code]:text-sm",

        // Code blocks
        "[&_pre]:overflow-x-auto",
        "[&_pre]:rounded-2xl",
        "[&_pre]:border",
        "[&_pre]:border-border",
        "[&_pre]:bg-card",
        "[&_pre]:p-6",

        "[&_pre_code]:bg-transparent",
        "[&_pre_code]:p-0",

        // Tables
        "[&_table]:w-full",
        "[&_table]:border-collapse",

        "[&_th]:border-b",
        "[&_th]:border-border",
        "[&_th]:py-3",
        "[&_th]:text-left",
        "[&_th]:font-semibold",
        "[&_th]:text-fg",

        "[&_td]:border-b",
        "[&_td]:border-border-muted",
        "[&_td]:py-3",

        // Images
        "[&_img]:rounded-2xl",
        "[&_img]:border",
        "[&_img]:border-border",

        // Strong
        "[&_strong]:font-semibold",
        "[&_strong]:text-fg",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
