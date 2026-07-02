import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}
