import type { ReactNode } from "react";

import { H2 } from "@/components/ui/heading";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <H2>{title}</H2>

        <div className="h-px bg-border" />
      </div>

      {children}
    </section>
  );
}
