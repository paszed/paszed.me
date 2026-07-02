import { Badge } from "@/components/ui/badge";
import { H1 } from "@/components/ui/heading";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <header className="space-y-8">
      <div className="space-y-4">
        <H1>{project.title}</H1>

        <p className="max-w-3xl text-xl leading-8 text-neutral-600 dark:text-neutral-400">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </header>
  );
}
