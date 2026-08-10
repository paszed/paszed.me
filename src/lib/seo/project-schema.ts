import type { Project } from "@/types/project";

import { site } from "@/config/site";

import type { Schema } from "./types";

export function createProjectSchema(
  project: Project,
): Schema {
  const websiteLink = project.links.find(
    ({ label }) => {
      const normalized = label.toLowerCase();

      return (
        normalized === "website" ||
        normalized === "live demo" ||
        normalized === "demo"
      );
    },
  );

  const repositoryLink = project.links.find(
    ({ label }) => {
      const normalized = label.toLowerCase();

      return (
        normalized === "github" ||
        normalized === "repository" ||
        normalized === "repo"
      );
    },
  );

  const url =
    websiteLink?.href ??
    `${site.url}/en/projects/${project.slug}`;

  const technologies = project.technologies.map(
    ({ name }) => name,
  );

  const schema: Schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    url,
    programmingLanguage: technologies,
    keywords: technologies,
  };

  if (repositoryLink) {
    schema.codeRepository =
      repositoryLink.href;
  }

  if (websiteLink) {
    schema.sameAs = websiteLink.href;
  }

  return schema;
}
