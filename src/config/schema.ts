import { site } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: site.owner,

  url: site.url,

  email: site.email,

  image: `${site.url}${site.ogImage}`,

  sameAs: [
    site.social.github,
    site.social.linkedin,
    site.social.x,
  ],

  jobTitle: "Software Engineer",
};

export const websiteSchema = {
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

  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: site.name,

  url: site.url,

  logo: `${site.url}${site.ogImage}`,
};
