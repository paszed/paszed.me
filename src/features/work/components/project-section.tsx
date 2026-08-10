import type { ReactNode } from "react";

import {
  Section,
  SectionHeader,
} from "@/design-system";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <Section>
      <SectionHeader title={title} />

      {children}
    </Section>
  );
}
