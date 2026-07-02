import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ProseProps = HTMLAttributes<HTMLDivElement>;

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-300",
        "[&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-6",
        "[&_code]:rounded [&_code]:bg-neutral-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm dark:[&_code]:bg-neutral-900",
        "[&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight",
        "[&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight",
        "[&_li]:ml-6 [&_li]:list-disc",
        "[&_p]:leading-8",
        "[&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:p-4",
        "[&_strong]:font-semibold",
        "[&_ul]:space-y-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
