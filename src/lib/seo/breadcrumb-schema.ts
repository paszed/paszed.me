import type { Schema } from "./types";

import { site } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function createBreadcrumbSchema(
  items: readonly BreadcrumbItem[],
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
