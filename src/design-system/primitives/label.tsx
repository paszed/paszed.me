import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export function Label({
  children,
  className,
  ...props
}: LabelProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium uppercase tracking-[0.3em] text-fg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
