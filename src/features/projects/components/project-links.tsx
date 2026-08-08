import {
  Button,
  Cluster,
} from "@/design-system";
import type { Project } from "@/types/project";

import { ProjectSection } from "./project-section";

interface ProjectLinksProps {
  project: Project;
  title: string;
}

export function ProjectLinks({
  project,
  title,
}: ProjectLinksProps) {
  if (project.links.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={title}>
      <Cluster gap="md">
        {project.links.map((link) => (
          <Button
            key={link.label}
            variant={
              link.primary
                ? "default"
                : "outline"
            }
          >
            {link.label}
          </Button>
        ))}
      </Cluster>
    </ProjectSection>
  );
}
