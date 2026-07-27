import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type InlineGap = "sm" | "md" | "lg";
type InlineAlign = "start" | "center" | "end";
type InlineJustify =
  | "start"
  | "center"
  | "end"
  | "between";

interface InlineProps
  extends HTMLAttributes<HTMLDivElement> {
  gap?: InlineGap;
  align?: InlineAlign;
  justify?: InlineJustify;
}

const gaps: Record<InlineGap, string> = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const aligns: Record<InlineAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifies: Record<InlineJustify, string> = {
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
