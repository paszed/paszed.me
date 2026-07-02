import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
