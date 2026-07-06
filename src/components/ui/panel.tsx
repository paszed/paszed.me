import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Panel({
  children,
  className,
  ...props
}: PanelProps) {
  return (
    <section
      className={cn(
        [
          "rounded-xl",
          "border",
          "border-border-muted",
          "bg-card",
          "p-8",
          "transition-all",
          "duration-200",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
