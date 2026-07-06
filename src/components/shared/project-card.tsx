import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Card } from "@/components/ui";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

const STATUS = {
  building: "Building",
  completed: "Completed",
  archived: "Archived",
} as const;

export function ProjectCard({
  slug,
  title,
  summary,
  technologies,
  status,
  year,
  featured,
  github,
  website,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block"
    >
      <Card
        variant="interactive"
        className="h-full"
      >
        <div className="flex h-full flex-col">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-success" />
              {STATUS[status]}
            </span>

            <span className="text-fg-muted">
              {year}
            </span>

            {featured && (
              <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-accent">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-fg-secondary">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-muted px-3 py-1 text-sm text-fg-secondary"
              >
                {technology}
              </span>
            ))}

            {technologies.length > 4 && (
              <span className="rounded-full bg-muted px-3 py-1 text-sm text-fg-muted">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-10">
            <div className="flex items-center gap-4">
              {github && (
                <SiGithub className="h-5 w-5 text-fg-muted transition-colors group-hover:text-accent" />
              )}

              {website && (
                <ExternalLink className="h-5 w-5 text-fg-muted transition-colors group-hover:text-accent" />
              )}
            </div>

            <span className="inline-flex items-center gap-2 font-medium text-accent transition-all group-hover:gap-3">
              Case Study

              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
