import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
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
        [
          "inline-flex items-center",
          "rounded-md",
          "border border-border-muted",
          "bg-muted/40",
          "px-2.5 py-1",
          "font-sans text-xs font-medium",
          "text-fg-secondary",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
