import type { ReactNode } from "react";

import {
  Divider,
  Heading,
  Section,
  Stack,
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
    <Section>
      <Stack gap="lg">
        <Stack gap="sm">
          <Heading as="h2">{title}</Heading>

          <Divider />
        </Stack>

        {children}
      </Stack>
    </Section>
  );
}
