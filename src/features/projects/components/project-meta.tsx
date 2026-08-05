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
      className="
        text-xs
        uppercase
        tracking-wide
      "
    >
      <StatusBadge tone={status.tone}>
        {status.label}
      </StatusBadge>

      <Text
        size="xs"
        muted
      >
        {project.category.replaceAll("-", " ")}
      </Text>

      <Text
        size="xs"
        muted
      >
        {project.started}
      </Text>
    </Cluster>
  );
}
