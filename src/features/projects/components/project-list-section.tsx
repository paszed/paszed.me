import type { ReactNode } from "react";

import {
  Measure,
  Stack,
  Text,
} from "@/design-system";

import { ProjectSection } from "./project-section";

interface ProjectListSectionProps {
  title: ReactNode;
  items: readonly string[];
}

export function ProjectListSection({
  title,
  items,
}: ProjectListSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={title}>
      <Measure size="3xl">
        <Stack gap="sm">
          {items.map((item) => (
            <Text
              key={item}
              muted
              className="flex items-start gap-4 leading-relaxed before:mt-2 before:size-2 before:shrink-0 before:rounded-full before:bg-success before:content-['']"
            >
              {item}
            </Text>
          ))}
        </Stack>
      </Measure>
    </ProjectSection>
  );
}
