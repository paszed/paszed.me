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
        "font-serif text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl",
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
        "font-serif text-4xl font-semibold leading-tight tracking-[-0.02em] text-fg sm:text-5xl",
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
        "font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-fg",
        className,
      )}
    >
      {children}
    </h3>
  );
}
