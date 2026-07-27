import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type StackGap = "sm" | "md" | "lg" | "xl" | "2xl";

interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  gap?: StackGap;
}

const gaps: Record<StackGap, string> = {
  sm: "gap-4 space-y-4",
  md: "gap-6 space-y-6",
  lg: "gap-8 space-y-8",
  xl: "gap-10 space-y-10",
  "2xl": "gap-12 space-y-12",
};

export function Stack({
  as: Component = "div",
  children,
  className,
  gap = "lg",
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex flex-col",
        gaps[gap],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
