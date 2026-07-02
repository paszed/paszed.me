import { Page } from "@/components/layout/page";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectsHero } from "@/features/projects";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Page
      title="Projects"
      description="Software, experiments, and things I'm building."
    >
      <div className="space-y-16">
        <ProjectsHero />

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </Page>
  );
}
