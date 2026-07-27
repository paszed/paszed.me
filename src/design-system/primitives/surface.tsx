import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "accent";
  interactive?: boolean;
}

const variants = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent/5",
};

export function Surface({
  className,
  variant = "default",
  interactive = false,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-xl transition-colors duration-200",
        variants[variant],
        interactive &&
          "cursor-pointer border border-border hover:border-accent/60",
        className,
      )}
      {...props}
    />
  );
}
