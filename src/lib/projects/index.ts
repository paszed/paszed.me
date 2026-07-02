import { projects } from "@/content/projects";
import type { Project } from "@/types/project";

export function getProjects(): readonly Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
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
