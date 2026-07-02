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

      <span className="text-fg-muted">
        {project.year}
      </span>

      {project.featured && (
        <>
          <span className="text-border">
            •
          </span>

          <span className="font-medium text-accent">
            Featured Project
          </span>
        </>
      )}
    </div>
  );
}
