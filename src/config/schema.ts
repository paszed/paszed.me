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

  knowsAbout: [
    "Software Engineering",
    "Software Architecture",
    "Developer Tools",
    "Developer Experience",
    "Artificial Intelligence",
    "AI Engineering",
    "TypeScript",
    "Go",
    "Next.js",
    "React",
  ],

  worksFor: {
    "@type": "Organization",
    name: site.name,
  },
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
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: site.name,

  url: site.url,

  description: site.description,

  logo: `${site.url}${site.ogImage}`,
};
