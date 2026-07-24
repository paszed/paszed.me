import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface ReadingProgressBarProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function ReadingProgressBar({
  value,
  className,
  ...props
}: ReadingProgressBarProps) {
  const normalizedValue = Math.min(
    100,
    Math.max(0, value),
  );

  return (
    <div
      className={cn(
        "h-1 w-full overflow-hidden bg-transparent",
        className,
      )}
      {...props}
    >
      <div
        className="h-full bg-accent transition-[width] duration-100"
        style={{
          width: `${normalizedValue}%`,
        }}
      />
    </div>
  );
}
