import { Badge } from "@/components/ui/badge";
import { H1 } from "@/components/ui/heading";
import { ProjectMeta } from "@/features/projects";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <header className="space-y-10">
      <ProjectMeta project={project} />

      <div className="space-y-5">
        <H1>{project.title}</H1>

        <p className="max-w-3xl text-xl leading-9 text-fg-secondary">
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

      <div className="h-px bg-border" />
    </header>
  );
}
