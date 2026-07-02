import Link from "next/link";

import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/heading";
import { home } from "@/content/home";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="space-y-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <H2>{home.featuredProjects.title}</H2>

            <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              {home.featuredProjects.description}
            </p>
          </div>

          <Link href="/projects">
            <Button>View All Projects</Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
