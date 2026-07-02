import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

const STATUS_LABELS: Record<Project["status"], string> = {
  building: "Building",
  completed: "Completed",
  archived: "Archived",
};

export function ProjectMeta({
  project,
}: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>{STATUS_LABELS[project.status]}</Badge>

      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        {project.year}
      </span>
    </div>
  );
}
