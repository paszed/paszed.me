import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

type StatusTone =
  | "info"
  | "warning"
  | "success"
  | "neutral";

interface StatusBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: StatusTone;
}

const dots: Record<StatusTone, string> = {
  info: "bg-info",
  warning: "bg-warning",
  success: "bg-success",
  neutral: "bg-fg-muted",
};

export function StatusBadge({
  children,
  className,
  tone = "neutral",
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-muted bg-card px-3 py-1 text-sm font-medium text-fg-secondary",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "size-2 rounded-full",
          dots[tone],
        )}
      />

      {children}
    </span>
  );
}
