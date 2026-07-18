import { ProjectSection } from "./project-section";

interface ProjectOverviewProps {
  overview: readonly string[];
}

export function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <ProjectSection title="Overview">
      <div className="max-w-3xl space-y-6">
        {overview.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg leading-relaxed text-fg-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </ProjectSection>
  );
}
