import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/design-system";
import type { Project } from "@/types/project";

import { Badge } from "@/design-system";

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
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-2 font-medium text-accent">
            <span
              aria-hidden
              className={`size-2 rounded-full ${statusConfig.dot}`}
            />

            {statusConfig.label}
          </span>

          <span className="text-fg-muted">
            {started}
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight transition-colors group-hover:text-accent">
          {title}
        </h2>

        <p className="mt-4 leading-8 text-fg-secondary">
          {summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((technology) => (

            <Badge key={technology.name}>
  {technology.name}
</Badge>
          ))}
        </div>

        <div className="mt-auto pt-10">
          <span className="inline-flex items-center gap-2 font-medium text-accent transition-all group-hover:gap-3">
            Case Study

            <ArrowUpRight
              aria-hidden
              className="size-4"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}
