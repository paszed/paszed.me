import { ProjectListSection } from "./project-list-section";
import { ProjectOverview } from "./project-overview";
import type { Project } from "@/types/project";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project,
}: ProjectContentProps) {
  return (
    <div className="space-y-16">
      <ProjectOverview overview={project.overview} />

      <ProjectListSection
        title="Problem"
        items={project.problem}
      />

      <ProjectListSection
        title="Goals"
        items={project.goals}
      />

      <ProjectListSection
        title="Architecture"
        items={project.architecture}
      />

      <ProjectListSection
        title="Features"
        items={project.features}
      />

      <ProjectListSection
        title="Engineering Decisions"
        items={project.engineering}
      />

      <ProjectListSection
        title="Challenges"
        items={project.challenges}
      />

      <ProjectListSection
        title="Lessons Learned"
        items={project.lessons}
      />

      <ProjectListSection
        title="Roadmap"
        items={project.roadmap}
      />

      <ProjectListSection
        title="Technologies"
        items={project.technologies}
      />
    </div>
  );
}
