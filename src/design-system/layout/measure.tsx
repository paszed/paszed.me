import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MeasureSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface MeasureProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: MeasureSize;
}

const sizes: Record<MeasureSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
};

export function Measure({
  children,
  className,
  size = "2xl",
  ...props
}: MeasureProps) {
  return (
    <div
      className={cn(sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
