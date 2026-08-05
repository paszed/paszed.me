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
  if (
    project.architecture.description.length === 0 &&
    !project.architecture.diagram
  ) {
    return null;
  }

  return (
    <ProjectSection title="Architecture">
      <Measure size="3xl">
        <Stack gap="xl">
          {project.architecture.description.map(
            (paragraph) => (
              <Text
                key={paragraph}
                size="lg"
                muted
                className="
                  leading-9
                  tracking-[-0.01em]
                "
              >
                {paragraph}
              </Text>
            ),
          )}

          {project.architecture.diagram && (
            <CodeBlock
              language="architecture"
              code={project.architecture.diagram}
              className="shadow-sm"
            />
          )}
        </Stack>
      </Measure>
    </ProjectSection>
  );
}
