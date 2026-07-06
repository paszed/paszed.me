import { site } from "@/config/site";
import type { Schema } from "./types";

export function createWebsiteSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: site.name,

    url: site.url,

    description: site.description,

    inLanguage: site.language,

    publisher: {
      "@type": "Person",
      name: site.owner,
    },
  };
}
