import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface InlineProps
  extends HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between";
}

const gaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const aligns = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifies = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Inline({
  className,
  gap = "md",
  align = "center",
  justify = "start",
  ...props
}: InlineProps) {
  return (
    <div
      className={cn(
        "flex",
        gaps[gap],
        aligns[align],
        justifies[justify],
        className,
      )}
      {...props}
    />
  );
}
