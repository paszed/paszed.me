import type { Project } from "@/types/project";

import { ProjectListSection } from "./project-list-section";

interface ProjectRoadmapProps {
  project: Project;
}

export function ProjectRoadmap({
  project,
}: ProjectRoadmapProps) {
  return (
    <ProjectListSection
      title="Roadmap"
      items={project.roadmap}
    />
  );
}
