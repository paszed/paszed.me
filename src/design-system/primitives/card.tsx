import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant =
  | "default"
  | "interactive";

interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}

const variants: Record<CardVariant, string> = {
  default: "",
  interactive:
    "hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg",
};

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
          "border border-border-muted",
          "bg-card",
          "p-5 sm:p-6 lg:p-8",
          "transition-all duration-300",
        ],
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
