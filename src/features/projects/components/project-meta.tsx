import {
  Cluster,
  StatusBadge,
  Text,
} from "@/design-system";

import type { Project } from "@/types/project";

import { PROJECT_STATUS } from "../lib";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({
  project,
}: ProjectMetaProps) {
  const status = PROJECT_STATUS[project.status];

  return (
    <Cluster
      gap="sm"
      className="text-sm"
    >
      <StatusBadge tone={status.tone}>
        {status.label}
      </StatusBadge>

      <Text
        size="sm"
        muted
      >
        Started {project.started}
      </Text>
    </Cluster>
  );
}
