import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ProseProps = HTMLAttributes<HTMLDivElement>;

export function Prose({
  children,
  className,
  ...props
}: ProseProps) {
  return (
    <div
      className={cn(
        [
          // Base
          "max-w-none",
          "font-serif text-lg",
          "leading-9",
          "text-fg-secondary",

          // Responsive reading scale
          "sm:text-xl",
          "sm:leading-10",

          // Vertical rhythm
          "[&>*+*]:mt-8",

          // Paragraphs
          "[&_p]:leading-9",
          "[&_p]:sm:leading-10",

          // Headings
          "[&_h2]:mt-24",
          "[&_h2]:mb-6",
          "[&_h2]:font-serif",
          "[&_h2]:text-3xl",
          "[&_h2]:font-semibold",
          "[&_h2]:leading-tight",
          "[&_h2]:tracking-[-0.03em]",
          "[&_h2]:text-fg",

          "[&_h3]:mt-16",
          "[&_h3]:mb-4",
          "[&_h3]:font-serif",
          "[&_h3]:text-2xl",
          "[&_h3]:font-semibold",
          "[&_h3]:leading-tight",
          "[&_h3]:tracking-[-0.02em]",
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
          "[&_ul]:pl-7",

          "[&_ol]:list-decimal",
          "[&_ol]:space-y-3",
          "[&_ol]:pl-7",

          "[&_li]:leading-8",
          "[&_li]:marker:text-accent",

          // Quotes
          "[&_blockquote]:border-l-2",
          "[&_blockquote]:border-accent/40",
          "[&_blockquote]:pl-6",
          "[&_blockquote]:italic",
          "[&_blockquote]:text-fg",

          // Divider
          "[&_hr]:my-20",
          "[&_hr]:border-border",

          // Inline code
          "[&_code]:rounded-md",
          "[&_code]:bg-muted",
          "[&_code]:px-1.5",
          "[&_code]:py-1",
          "[&_code]:font-mono",
          "[&_code]:text-sm",
          "[&_code]:text-fg",

          // Code blocks
          "[&_pre]:my-10",
          "[&_pre]:overflow-x-auto",
          "[&_pre]:rounded-2xl",
          "[&_pre]:border",
          "[&_pre]:border-border",
          "[&_pre]:bg-card",
          "[&_pre]:p-6",
          "[&_pre]:text-sm",

          "[&_pre_code]:bg-transparent",
          "[&_pre_code]:p-0",

          // Tables
          "[&_table]:block",
          "[&_table]:overflow-x-auto",
          "[&_table]:w-full",
          "[&_table]:border-collapse",

          "[&_th]:border-b",
          "[&_th]:border-border",
          "[&_th]:px-4",
          "[&_th]:py-3",
          "[&_th]:text-left",
          "[&_th]:font-semibold",
          "[&_th]:text-fg",

          "[&_td]:border-b",
          "[&_td]:border-border-muted",
          "[&_td]:px-4",
          "[&_td]:py-3",

          // Images
          "[&_img]:rounded-2xl",
          "[&_img]:border",
          "[&_img]:border-border",

          // Strong
          "[&_strong]:font-semibold",
          "[&_strong]:text-fg",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
