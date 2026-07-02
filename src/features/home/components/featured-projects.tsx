import Link from "next/link";

import { ProjectCard } from "@/components/shared/project-card";
import { H2 } from "@/components/ui/heading";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <H2>Featured Projects</H2>

        <Link
          href="/projects"
          className="text-sm font-medium text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
