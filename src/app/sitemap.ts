import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/uses",
    "/now",
    "/links",
  ];

  const staticPages = pages.map((page) => ({
    url: `${site.url}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const projectPages = getProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
