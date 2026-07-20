import {
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
  return (
    <ProjectSection title="Overview">
      <Stack
        gap="lg"
        className="max-w-3xl"
      >
        {overview.map((paragraph) => (
          <Text
            key={paragraph}
            size="lg"
            muted
            className="leading-relaxed"
          >
            {paragraph}
          </Text>
        ))}
      </Stack>
    </ProjectSection>
  );
}
