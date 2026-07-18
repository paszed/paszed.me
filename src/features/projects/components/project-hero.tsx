import type { Project } from "@/types/project";

import { Badge } from "@/components/ui/badge";
import { H1 } from "@/components/ui/heading";

import { ProjectMeta } from "./project-meta";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <header className="space-y-12">
      <ProjectMeta project={project} />

      <div className="space-y-6">
        <H1>{project.title}</H1>

        <p className="max-w-3xl text-xl leading-relaxed text-fg-secondary">
          {project.summary}
        </p>
      </div>

      {project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <Badge key={technology.name}>
              {technology.name}
            </Badge>
          ))}
        </div>
      )}

      <div className="h-px bg-border" />
    </header>
  );
}
