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
        "space-y-6 text-base leading-8 text-fg-secondary",

        "[&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4",

        "[&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-6",

        "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm",

        "[&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg",

        "[&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-fg",

        "[&_li]:ml-6 [&_li]:list-disc",

        "[&_p]:leading-8",

        "[&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-card [&_pre]:p-4",

        "[&_strong]:font-semibold [&_strong]:text-fg",

        "[&_ul]:space-y-2",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
