import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type TextSize = "xs" | "sm" | "base" | "lg" | "lead";

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  size?: TextSize;
  muted?: boolean;
}

const sizes: Record<TextSize, string> = {
  xs: "text-xs leading-5",
  sm: "text-sm leading-6",
  base: "text-base leading-8",
  lg: "text-lg leading-8",
  lead: "text-xl leading-9 lg:text-2xl lg:leading-10",
};

export function Text({
  as: Component = "p",
  children,
  className,
  size = "base",
  muted = false,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        "font-sans",
        sizes[size],
        muted ? "text-fg-secondary" : "text-fg",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
