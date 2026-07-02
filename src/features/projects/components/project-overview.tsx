import { ProjectSection } from "@/features/projects";

interface ProjectOverviewProps {
  overview: string;
}

export function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <ProjectSection title="Overview">
      <p className="leading-8 text-neutral-600 dark:text-neutral-400">
        {overview}
      </p>
    </ProjectSection>
  );
}
