import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type CodeProps = HTMLAttributes<HTMLElement>;

export function Code({
  className,
  ...props
}: CodeProps) {
  return (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
        className,
      )}
      {...props}
    />
  );
}
