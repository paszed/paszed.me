import type { Project } from "@/types/project";

import { ProjectListSection } from "./project-list-section";

interface ProjectRoadmapProps {
  project: Project;
  title: string;
}

export function ProjectRoadmap({
  project,
  title,
}: ProjectRoadmapProps) {
  return (
    <ProjectListSection
      title={title}
      items={project.roadmap}
    />
  );
}
