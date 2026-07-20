import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "@/design-system";

import type { Project } from "@/types/project";

type ProjectCardProps = Project;

const STATUS = {
  research: {
    label: "Research",
    dot: "bg-sky-500",
  },
  building: {
    label: "Building",
    dot: "bg-yellow-500",
  },
  production: {
    label: "Production",
    dot: "bg-green-500",
  },
  archived: {
    label: "Archived",
    dot: "bg-zinc-500",
  },
} as const;

export function ProjectCard({
  slug,
  title,
  summary,
  technologies,
  status,
  started,
}: ProjectCardProps) {
  const statusConfig = STATUS[status];

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
            <span className="flex items-center gap-2 font-medium text-accent">
              <span
                aria-hidden
                className={`size-2 rounded-full ${statusConfig.dot}`}
              />

              {statusConfig.label}
            </span>

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

          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 font-medium text-accent transition-all group-hover:gap-3">
              Case Study

              <ArrowUpRight
                aria-hidden
                className="size-4"
              />
            </span>
          </div>
        </Stack>
      </Card>
    </Link>
  );
}
