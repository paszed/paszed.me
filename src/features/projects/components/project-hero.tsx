import type { Project } from "@/types/project";

import {
  Badge,
  Cluster,
  Divider,
  Heading,
  Stack,
  Text,
} from "@/design-system";

import { ProjectMeta } from "./project-meta";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <header>
      <Stack gap="2xl">
        <ProjectMeta project={project} />

        <Stack gap="md">
          <Heading as="h1">{project.title}</Heading>

          <Text
            size="lg"
            muted
            className="max-w-3xl leading-relaxed"
          >
            {project.summary}
          </Text>
        </Stack>

        {project.technologies.length > 0 && (
          <Cluster gap="sm">
            {project.technologies.map((technology) => (
              <Badge key={technology.name}>
                {technology.name}
              </Badge>
            ))}
          </Cluster>
        )}

        <Divider />
      </Stack>
    </header>
  );
}
