import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-secondary px-3 py-1 text-sm font-medium text-muted-foreground transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
