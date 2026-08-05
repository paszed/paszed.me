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

export function ProjectCard(project: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full"
    >
      <Card
        variant="interactive"
        className="
          flex h-full flex-col
          p-6 sm:p-8
        "
      >
        <Stack
          gap="md"
          className="h-full"
        >
          <ProjectMeta project={project} />

          <Stack gap="sm">
            <Heading
              as="h3"
              className="
                transition-colors
                duration-200
                group-hover:text-accent
              "
            >
              {project.title}
            </Heading>

            <Text
              size="sm"
              muted
              className="leading-relaxed"
            >
              {project.tagline}
            </Text>
          </Stack>

          <Text
            muted
            className="
              line-clamp-3
              leading-relaxed
            "
          >
            {project.summary}
          </Text>

          {project.technologies.length > 0 && (
            <Cluster
              gap="sm"
              className="pt-2"
            >
              {project.technologies
                .slice(0, 3)
                .map((technology) => (
                  <Badge
                    key={technology.name}
                  >
                    {technology.name}
                  </Badge>
                ))}
            </Cluster>
          )}

          <Cluster
            gap="sm"
            className="
              mt-auto
              pt-6
              text-sm
              font-medium
              text-accent
            "
          >
            <Text as="span">
              View case study
            </Text>

            <ActionIcon name="open" />
          </Cluster>
        </Stack>
      </Card>
    </Link>
  );
}
