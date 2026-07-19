import type { ReactNode } from "react";

import {
  Divider,
  H2,
} from "@/design-system";

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

        <Divider />
      </div>

      {children}
    </section>
  );
}
