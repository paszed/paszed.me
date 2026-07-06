import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
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
          "transition-all duration-200",
          "hover:border-border",
          "hover:-translate-y-0.5",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
