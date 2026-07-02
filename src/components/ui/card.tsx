import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

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
        "rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
