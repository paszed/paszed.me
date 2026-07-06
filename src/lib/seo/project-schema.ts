import type { Project } from "@/types/project";
import type { Schema } from "./types";

import { site } from "@/config/site";

export function createProjectSchema(
  project: Project,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    name: project.title,
    description: project.summary,

    url: project.website ?? `${site.url}/projects/${project.slug}`,

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

    programmingLanguage: project.technologies,
    keywords: project.technologies,

    image: `${site.url}${site.ogImage}`,

    ...(project.github && {
      codeRepository: project.github,
    }),

    ...(project.website && {
      sameAs: project.website,
    }),
  };
}
