import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const gaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

export function Grid({
  className,
  columns: cols = 1,
  gap = "md",
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columns[cols],
        gaps[gap],
        className,
      )}
      {...props}
    />
  );
}
