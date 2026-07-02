import { projects } from "@/content/projects";
import type { Project } from "@/types/project";

export function getProjects(): readonly Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    if (a.year !== b.year) {
      return b.year - a.year;
    }

    return a.title.localeCompare(b.title);
  });
}

export function getFeaturedProjects(): readonly Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): readonly string[] {
  return projects.map((project) => project.slug);
}
