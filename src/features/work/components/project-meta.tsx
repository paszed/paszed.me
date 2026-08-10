import type { Project } from "@/types/project";

import {
  Cluster,
  Text,
} from "@/design-system";

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
  return (
    <Cluster
      gap="md"
      className="text-sm text-fg-secondary"
    >
      <Text as="span" size="sm">
        {categoryLabel}
      </Text>

      <span
        aria-hidden="true"
        className="text-fg-muted"
      >
        ·
      </span>

      <Text as="span" size="sm">
        {startedLabel}
      </Text>

      <span
        aria-hidden="true"
        className="text-fg-muted"
      >
        ·
      </span>

      <Text as="span" size="sm">
        {project.status}
      </Text>
    </Cluster>
  );
}
