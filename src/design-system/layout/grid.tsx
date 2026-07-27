import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type GridColumns = 1 | 2 | 3 | 4;
type GridGap = "sm" | "md" | "lg";

interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: GridGap;
}

const columns: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const gaps: Record<GridGap, string> = {
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
