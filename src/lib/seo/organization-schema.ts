import { site } from "@/config/site";
import type { Schema } from "./types";

export function createOrganizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: site.name,

    url: site.url,

    description: site.description,

    logo: `${site.url}${site.ogImage}`,
  };
}
