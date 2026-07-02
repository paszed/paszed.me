import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

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
        "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
