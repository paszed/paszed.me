import {
  Cluster,
  StatusBadge,
  Text,
} from "@/design-system";

import type { Project } from "@/types/project";

import { PROJECT_STATUS } from "../lib";

interface ProjectMetaProps {
  project: Project;
  categoryLabel: string;
  startedLabel: string;
}

export function ProjectMeta({
  project,
  categoryLabel,
  startedLabel,
}: ProjectMetaProps) {
  const status =
    PROJECT_STATUS[project.status];

  return (
    <Cluster gap="md">
      <StatusBadge tone={status.tone}>
        {status.label}
      </StatusBadge>

      <Text
        size="xs"
        muted
      >
        {categoryLabel}
      </Text>

      <Text
        size="xs"
        muted
      >
        {startedLabel}
      </Text>
    </Cluster>
  );
}
