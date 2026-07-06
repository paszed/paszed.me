import { site } from "@/config/site";
import type { Schema } from "./types";

export function createPersonSchema(): Schema {
  return {
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
}
