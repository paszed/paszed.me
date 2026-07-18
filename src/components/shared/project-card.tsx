import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

const STATUS = {
  building: {
    label: "Building",
    dot: "bg-blue-500",
  },
  completed: {
    label: "Completed",
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
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${statusConfig.dot}`}
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
            <span
              key={technology.name}
              className="rounded-full bg-muted px-3 py-1 text-sm text-fg-secondary"
            >
              {technology.name}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-10">
          <span className="inline-flex items-center gap-2 font-medium text-accent transition-all group-hover:gap-3">
            Case Study
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}
