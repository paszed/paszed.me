import { site } from "@/config/site";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: site.name,

    url: site.url,

    description: site.description,

    logo: `${site.url}${site.ogImage}`,
  };
}
