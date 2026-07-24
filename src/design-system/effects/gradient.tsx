import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type GradientVariant =
  | "accent"
  | "primary"
  | "subtle";

interface GradientProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: GradientVariant;
}

const variants = {
  accent:
    "bg-gradient-to-br from-accent/20 via-accent/5 to-transparent",

  primary:
    "bg-gradient-to-br from-primary/20 via-primary/5 to-transparent",

  subtle:
    "bg-gradient-to-br from-foreground/5 to-transparent",
};

export function Gradient({
  className,
  variant = "accent",
  ...props
}: GradientProps) {
  return (
    <div
      className={cn(
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
