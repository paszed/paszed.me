import Link from "next/link";

import {
  ActionIcon,
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "@/design-system";
import type { Project } from "@/types/project";

import { ProjectMeta } from "./project-meta";

type ProjectCardProps = Project;

export function ProjectCard(
  project: ProjectCardProps,
) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <Card
        variant="interactive"
        className="flex h-full flex-col"
      >
        <Stack
          gap="lg"
          className="h-full"
        >
          <ProjectMeta project={project} />

          <Heading
            as="h2"
            className="transition-colors group-hover:text-accent"
          >
            {project.title}
          </Heading>

          <Text
            size="lg"
            muted
            className="leading-relaxed"
          >
            {project.summary}
          </Text>

          <Cluster gap="sm">
            {project.technologies
              .slice(0, 4)
              .map((technology) => (
                <Badge
                  key={technology.name}
                >
                  {technology.name}
                </Badge>
              ))}
          </Cluster>

          <Cluster
            gap="sm"
            className="mt-auto font-medium text-accent transition-all group-hover:gap-3"
          >
            <Text as="span">
              Case Study
            </Text>

            <ActionIcon name="open" />
          </Cluster>
        </Stack>
      </Card>
    </Link>
  );
}
