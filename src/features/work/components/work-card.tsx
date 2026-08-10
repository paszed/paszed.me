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

interface ProjectCardProps extends Project {
  readLabel: string;
  headingLevel?: "h2" | "h3";
}

export function ProjectCard({
  readLabel,
  headingLevel = "h3",
  ...project
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block h-full"
    >
      <Card
        variant="interactive"
        className="
          flex
          h-full
          flex-col
          p-6
        "
      >
        <Stack
          gap="md"
          className="h-full"
        >
          <Stack gap="sm">
            <Heading as={headingLevel}>
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
            className="line-clamp-3 leading-relaxed"
          >
            {project.summary}
          </Text>

          {project.technologies.length > 0 && (
            <Cluster
              gap="sm"
              className="pt-2"
            >
              {project.technologies
                .slice(0, 4)
                .map((technology) => (
                  <Badge key={technology.name}>
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
              {readLabel}
            </Text>

            <ActionIcon name="open" />
          </Cluster>
        </Stack>
      </Card>
    </Link>
  );
}
