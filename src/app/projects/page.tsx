import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore developer tools, web applications, and software engineering projects built by Edvard Pasz.",
};

import { Page } from "@/components/layout/page";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectsHero } from "@/features/projects";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Page>
      <div className="space-y-16">
        <ProjectsHero />

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
