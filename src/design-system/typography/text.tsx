import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextSize = "xs" | "sm" | "base" | "lg" | "lead";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  size?: TextSize;
  muted?: boolean;
}

const sizes: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base leading-8",
  lg: "text-lg leading-8",
  lead: "text-xl leading-9 lg:text-2xl",
};

export function Text({
  children,
  className,
  size = "base",
  muted = false,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        sizes[size],
        muted ? "text-fg-secondary" : "text-fg",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
