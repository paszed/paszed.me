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
          "rounded-lg",
          "border",
          "border-border",
          "bg-surface",
          "p-8",
          "transition-colors duration-200",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
