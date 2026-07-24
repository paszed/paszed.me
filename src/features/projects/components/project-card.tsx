import Link from "next/link";

import {
  ActionIcon,
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  StatusBadge,
  Text,
} from "@/design-system";
import type { Project } from "@/types/project";

import { PROJECT_STATUS } from "../lib";

type ProjectCardProps = Project;

export function ProjectCard({
  slug,
  title,
  summary,
  technologies,
  status,
  started,
}: ProjectCardProps) {
  const statusConfig = PROJECT_STATUS[status];

  return (
    <Link
      href={`/projects/${slug}`}
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
          <Cluster
            gap="sm"
            className="text-sm"
          >
            <StatusBadge tone={statusConfig.tone}>
              {statusConfig.label}
            </StatusBadge>

            <Text
              size="sm"
              muted
            >
              {started}
            </Text>
          </Cluster>

          <Heading
            as="h2"
            className="transition-colors group-hover:text-accent"
          >
            {title}
          </Heading>

          <Text
            size="lg"
            muted
            className="leading-relaxed"
          >
            {summary}
          </Text>

          <Cluster gap="sm">
            {technologies.slice(0, 4).map((technology) => (
              <Badge key={technology.name}>
                {technology.name}
              </Badge>
            ))}
          </Cluster>

          <Cluster
            gap="sm"
            className="mt-auto font-medium text-accent transition-all group-hover:gap-3"
          >
            <Text
              as="span"
              size="base"
            >
              Case Study
            </Text>

            <ActionIcon name="open" />
          </Cluster>
        </Stack>
      </Card>
    </Link>
  );
}
