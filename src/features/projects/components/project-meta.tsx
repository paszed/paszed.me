import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

const STATUS = {
  building: {
    label: "🟢 Building",
  },
  completed: {
    label: "✅ Completed",
  },
  archived: {
    label: "📦 Archived",
  },
} as const;

export function ProjectMeta({
  project,
}: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <Badge>
        {STATUS[project.status].label}
      </Badge>

      <span className="text-neutral-500 dark:text-neutral-400">
        {project.year}
      </span>

      {project.featured && (
        <>
          <span className="text-neutral-300 dark:text-neutral-700">
            •
          </span>

          <span className="font-medium text-green-500">
            Featured Project
          </span>
        </>
      )}
    </div>
  );
}
