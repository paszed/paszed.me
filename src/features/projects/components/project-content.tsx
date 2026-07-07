import { ProjectSection } from "./project-section";
import type { Project } from "@/types/project";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project,
}: ProjectContentProps) {
  return (
    <div className="space-y-16">
      <ProjectSection title="Overview">
        <p>{project.overview}</p>
      </ProjectSection>

      <ProjectSection title="Architecture">
        <ul className="list-disc space-y-2 pl-6">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges">
        <ul className="list-disc space-y-2 pl-6">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Lessons Learned">
        <ul className="list-disc space-y-2 pl-6">
          {project.lessons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>
    </div>
  );
}
