import { site } from "@/config/site";

import type { Schema } from "./types";

export function createWebsiteSchema(
  language = site.language,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: site.name,

    url: site.url,

    description: site.description,

    inLanguage: language,

    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}
