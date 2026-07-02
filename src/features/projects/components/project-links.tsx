import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({
  project,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {project.website && (
        <Link
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Site</Button>
        </Link>
      )}

      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium transition-colors hover:underline"
        >
          GitHub →
        </Link>
      )}
    </div>
  );
}
