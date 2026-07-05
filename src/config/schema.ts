import { site } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.owner,
  url: site.url,
  email: site.email,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
};
