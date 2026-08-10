import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { services } from "@/content/services";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
  ];

  const staticPages = pages.map((page) => ({
    url: `${site.url}${page}`,
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workPages = work.map((item) => ({
    url: `${site.url}/work/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...workPages,
  ];
}
