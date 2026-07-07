import { ProjectSection } from "./project-section";
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
            className="flex gap-3 text-fg-secondary"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-success" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
