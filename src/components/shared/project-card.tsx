import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Card } from "@/components/ui/card";
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
      <Card className="h-full border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex h-full flex-col">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 font-medium text-green-600 dark:text-green-500">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {STATUS[status]}
            </span>

            <span className="text-neutral-400">{year}</span>

            {featured && (
              <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-green-600 dark:group-hover:text-green-500">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-400">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {technology}
              </span>
            ))}

            {technologies.length > 4 && (
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-10">
            <div className="flex items-center gap-4">
              {github && (
                <SiGithub className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-green-600 dark:text-neutral-400 dark:group-hover:text-green-500" />
              )}

              {website && (
                <ExternalLink className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-green-600 dark:text-neutral-400 dark:group-hover:text-green-500" />
              )}
            </div>

            <span className="inline-flex items-center gap-2 font-medium text-green-600 transition-all group-hover:gap-3 dark:text-green-500">
              Case Study
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
