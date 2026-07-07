import { ProjectSection } from "./project-section";

interface ProjectOverviewProps {
  overview: string;
}

export function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <ProjectSection title="Overview">
      <p className="leading-8 text-fg-secondary">
        {overview}
      </p>
    </ProjectSection>
  );
}
