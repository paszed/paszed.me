import type { ReactNode } from "react";

import {
  Heading,
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
    <section>
      <Stack gap="lg">
        <Heading
          as="h2"
          className="text-2xl sm:text-3xl"
        >
          {title}
        </Heading>

        {children}
      </Stack>
    </section>
  );
}
