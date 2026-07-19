import Link from "next/link";

import { Button } from "@/design-system";

import { ProjectSection } from "./project-section";

import type { Project } from "@/types/project";

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
    <ProjectSection title="Links">
      <div className="flex flex-wrap gap-4">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={
                link.primary
                  ? undefined
                  : "border border-border bg-transparent text-fg hover:bg-muted"
              }
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </ProjectSection>
  );
}
