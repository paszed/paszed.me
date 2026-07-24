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
  sm: "space-y-4",
  md: "space-y-6",
  lg: "space-y-8",
  xl: "space-y-10",
  "2xl": "space-y-12",
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
      className={cn(gaps[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
