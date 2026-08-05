import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: ReactNode;
}

const styles: Record<HeadingLevel, string> = {
  h1: [
    "font-serif",
    "text-4xl font-semibold",
    "leading-[1.05]",
    "tracking-[-0.04em]",
    "text-fg",
    "sm:text-6xl",
    "lg:text-7xl",
  ].join(" "),

  h2: [
    "font-serif",
    "text-4xl font-semibold",
    "leading-[1.1]",
    "tracking-[-0.03em]",
    "text-fg",
    "sm:text-5xl",
  ].join(" "),

  h3: [
    "font-serif",
    "text-3xl font-semibold",
    "leading-[1.15]",
    "tracking-[-0.025em]",
    "text-fg",
  ].join(" "),
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
        "font-serif",
        styles[Component],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
