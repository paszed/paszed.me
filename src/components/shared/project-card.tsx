import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

const STATUS = {
  building: "● Building",
  completed: "● Completed",
  archived: "● Archived",
} as const;

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  status,
  year,
  featured,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block"
    >
      <Card className="h-full rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex h-full flex-col gap-8">
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium text-green-500">
              {STATUS[status]}
            </span>

            <span className="text-neutral-400">
              {year}
            </span>

            {featured && (
              <span className="text-green-500">
                Featured
              </span>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-green-500">
              {title}
            </h3>

            <p className="max-w-2xl leading-8 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            {technologies.map((technology, index) => (
              <span key={technology}>
                {technology}
                {index !== technologies.length - 1 && (
                  <span className="ml-4 text-neutral-300 dark:text-neutral-700">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-2">
            <span className="font-medium text-neutral-900 transition-colors group-hover:text-green-500 dark:text-neutral-100">
              Engineering Case Study →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
