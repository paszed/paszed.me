import type { ReactNode } from "react";

import { H2 } from "@/components/ui/heading";

interface ProjectSectionProps {
  title: ReactNode;
  children: ReactNode;
}

export function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <H2>{title}</H2>

        <div className="h-px bg-border" />
      </div>

      {children}
    </section>
  );
}
