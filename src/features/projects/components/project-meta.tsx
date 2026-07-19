import { Badge } from "@/design-system";

import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

const STATUS = {
  research: {
    label: "Research",
    dot: "bg-sky-500",
  },
  building: {
    label: "Building",
    dot: "bg-yellow-500",
  },
  production: {
    label: "Production",
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
        <span
          aria-hidden
          className={`size-2 rounded-full ${status.dot}`}
        />

        {status.label}
      </Badge>

      <span>Started {project.started}</span>
    </div>
  );
}
