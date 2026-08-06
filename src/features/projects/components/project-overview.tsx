import {
  Measure,
  Stack,
  Text,
} from "@/design-system";

import { ProjectSection } from "./project-section";

interface ProjectOverviewProps {
  overview: readonly string[];
}

export function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  if (overview.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="The Problem & Solution">
      <Measure size="3xl">
        <Stack gap="lg">
          {overview.map((paragraph) => (
            <Text
              key={paragraph}
              size="lg"
              muted
              className="leading-9 tracking-[-0.01em]"
            >
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Measure>
    </ProjectSection>
  );
}
