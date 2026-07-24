import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({
  value,
  className,
  ...props
}: ProgressProps) {
  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      <div
        className="h-full bg-accent transition-all"
        style={{
          width: `${Math.min(
            Math.max(value, 0),
            100,
          )}%`,
        }}
      />
    </div>
  );
}
