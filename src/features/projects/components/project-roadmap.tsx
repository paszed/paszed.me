import { ProjectSection } from "@/features/projects";
import type { Project } from "@/types/project";

interface ProjectRoadmapProps {
  project: Project;
}

export function ProjectRoadmap({
  project,
}: ProjectRoadmapProps) {
  if (project.roadmap.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Roadmap">
      <ul className="space-y-3">
        {project.roadmap.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-neutral-600 dark:text-neutral-400"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
