import { site } from "@/config/site";

import type { Project } from "@/types/project";

import type { Schema } from "./types";

export function createProjectSchema(
  project: Project,
): Schema {
  const website = project.links.find(
    (link) =>
      link.label.toLowerCase().includes("website") ||
      link.label.toLowerCase().includes("demo"),
  )?.href;

  const repository = project.links.find(
    (link) =>
      link.label.toLowerCase().includes("github") ||
      link.label.toLowerCase().includes("repository"),
  )?.href;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    name: project.title,
    description: project.summary,

    url: website ?? `${site.url}/projects/${project.slug}`,

    author: {
      "@type": "Person",
      name: site.owner,
      url: site.url,
    },

    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },

    programmingLanguage: project.technologies.map(
      (technology) => technology.name,
    ),

    keywords: project.technologies.map(
      (technology) => technology.name,
    ),

    image: `${site.url}${site.ogImage}`,

    ...(repository && {
      codeRepository: repository,
    }),

    ...(website && {
      sameAs: website,
    }),
  };
}
