import type { ReactNode } from "react";

import {
  Divider,
  Heading,
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
        <Heading as="h2">{title}</Heading>

        <Divider />
      </div>

      {children}
    </section>
  );
}
