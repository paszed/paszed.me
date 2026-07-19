import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "accent";
}

const variants = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent/5",
};

export function Surface({
  className,
  variant = "default",
  ...props
}: SurfaceProps) {
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
