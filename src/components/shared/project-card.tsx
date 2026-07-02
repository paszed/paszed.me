import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

const STATUS = {
  building: "🟢 Building",
  completed: "✅ Completed",
  archived: "📦 Archived",
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
      <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-500/40 group-hover:shadow-xl">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Badge>{STATUS[status]}</Badge>

            <span className="text-neutral-500 dark:text-neutral-400">
              {year}
            </span>

            {featured && (
              <>
                <span className="text-neutral-300 dark:text-neutral-700">
                  •
                </span>

                <span className="font-medium text-green-500">
                  Featured
                </span>
              </>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-green-500">
              {title}
            </h3>

            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology}>
                {technology}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Engineering Case Study
            </span>

            <span className="text-sm font-medium text-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View Project →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
