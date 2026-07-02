import { Page } from "@/components/layout/page";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Page
      title="Projects"
      description="Software, experiments, and things I'm building."
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Page>
  );
}
