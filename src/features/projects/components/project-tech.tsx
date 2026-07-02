import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectTechProps {
  project: Project;
}

export function ProjectTech({
  project,
}: ProjectTechProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </section>
  );
}
