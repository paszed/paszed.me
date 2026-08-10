import type { Project } from "@/types/project";

export const work: readonly Project[] = [];

export function getWorkBySlug(
  slug: string,
): Project | undefined {
  return work.find(
    (project) => project.slug === slug,
  );
}

export function getWorkSlugs(): readonly string[] {
  return work.map(
    (project) => project.slug,
  );
}
