import Link from "next/link";

import {
  Button,
  Cluster,
} from "@/design-system";
import type { Project } from "@/types/project";

import { ProjectSection } from "./project-section";

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({
  project,
}: ProjectLinksProps) {
  if (project.links.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Resources">
      <Cluster gap="md">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={
                link.primary
                  ? "default"
                  : "outline"
              }
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </Cluster>
    </ProjectSection>
  );
}
