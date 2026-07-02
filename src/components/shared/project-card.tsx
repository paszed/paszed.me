import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-500/40 group-hover:shadow-xl">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-green-500">
              {title}
            </h3>

            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>

          <div className="pt-2 text-sm font-medium text-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View project →
          </div>
        </div>
      </Card>
    </Link>
  );
}
