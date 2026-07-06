import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { getPublishedArticles } from "@/lib/journal";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    "",
    "/about",
    "/projects",
    "/journal",
    "/uses",
    "/now",
    "/links",
  ];

  const staticPages = pages.map((page) => ({
    url: `${site.url}${page}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const projectPages = getProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalPages = getPublishedArticles().map((article) => ({
    url: `${site.url}/journal/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...journalPages,
  ];
}
