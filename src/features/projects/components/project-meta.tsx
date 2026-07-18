import { Badge } from "@/components/ui/badge";

import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

const STATUS = {
  building: {
    label: "Building",
    dot: "bg-yellow-500",
  },
  completed: {
    label: "Completed",
    dot: "bg-green-500",
  },
  archived: {
    label: "Archived",
    dot: "bg-zinc-500",
  },
} as const;

export function ProjectMeta({
  project,
}: ProjectMetaProps) {
  const status = STATUS[project.status];

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
      <Badge>
        <span className={`size-2 rounded-full ${status.dot}`} />

        {status.label}
      </Badge>

      <span>Started {project.started}</span>
    </div>
  );
}
