import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "interactive";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        [
          "rounded-xl",
          "border",
          "border-border-muted",
          "bg-card",
          "p-8",
          "transition-all",
          "duration-300",
        ],
        variant === "interactive" && [
          "hover:-translate-y-1",
          "hover:border-accent/30",
          "hover:shadow-lg",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
