import type { Project } from "@/types/project";

import {
  CodeBlock,
  Measure,
  Stack,
  Text,
} from "@/design-system";

import { ProjectSection } from "./project-section";

interface ProjectArchitectureProps {
  project: Project;
}

export function ProjectArchitecture({
  project,
}: ProjectArchitectureProps) {
  return (
    <ProjectSection title="Architecture">
      <Measure size="3xl">
        <Stack gap="lg">
          {project.architecture.description.map(
            (paragraph) => (
              <Text
                key={paragraph}
                size="lg"
                muted
                className="leading-relaxed"
              >
                {paragraph}
              </Text>
            ),
          )}

          {project.architecture.diagram && (
            <CodeBlock
              language="architecture"
              code={project.architecture.diagram}
            />
          )}
        </Stack>
      </Measure>
    </ProjectSection>
  );
}
