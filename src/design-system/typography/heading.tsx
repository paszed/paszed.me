import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: ReactNode;
}

const styles: Record<HeadingLevel, string> = {
  h1: "font-serif text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl",
  h2: "font-serif text-4xl font-semibold leading-tight tracking-[-0.02em] text-fg sm:text-5xl",
  h3: "font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-fg",
};

export function Heading({
  as: Component = "h2",
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        styles[Component],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
