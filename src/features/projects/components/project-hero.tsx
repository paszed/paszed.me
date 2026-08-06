import type { Project } from "@/types/project";

import {
  Badge,
  Cluster,
  Divider,
  Heading,
  Hero,
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
    <Hero>
      <ProjectMeta project={project} />

      <Stack gap="md">
        <Heading as="h1">
          {project.title}
        </Heading>

        <Text
          size="lead"
          muted
          className="max-w-3xl leading-relaxed"
        >
          {project.tagline}
        </Text>

        <Text
          muted
          className="max-w-3xl text-lg leading-relaxed"
        >
          {project.summary}
        </Text>
      </Stack>

      {project.technologies.length > 0 && (
        <Cluster gap="sm">
          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <Badge key={technology.name}>
                {technology.name}
              </Badge>
            ))}
        </Cluster>
      )}

      <Divider />
    </Hero>
  );
}
