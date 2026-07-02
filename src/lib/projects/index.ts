import { projects } from "@/content/projects";
import type { Project } from "@/types/project";

export function getProjects(): readonly Project[] {
  return projects;
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): readonly string[] {
  return projects.map((project) => project.slug);
}
