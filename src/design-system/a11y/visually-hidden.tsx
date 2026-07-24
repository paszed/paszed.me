import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type VisuallyHiddenProps =
  HTMLAttributes<HTMLSpanElement>;

/**
 * Hides content visually while keeping it available to assistive technologies.
 *
 * Common use cases:
 *
 * - Icon-only buttons
 * - Additional context for screen readers
 * - Accessible labels
 */
export function VisuallyHidden({
  className,
  ...props
}: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0",
        "[clip:rect(0,0,0,0)]",
        "[-webkit-clip-path:inset(50%)]",
        "[clip-path:inset(50%)]",
        "[-webkit-user-select:none]",
        className,
      )}
      {...props}
    />
  );
}
