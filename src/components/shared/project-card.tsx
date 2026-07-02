import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = Project;

export function ProjectCard({
  slug,
  title,
  summary,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="leading-7 text-neutral-600 dark:text-neutral-400">
            {summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology}>
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
