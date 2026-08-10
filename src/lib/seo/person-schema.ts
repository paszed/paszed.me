import type { Schema } from "./types";

export interface PersonSchemaInput {
  name: string;
  url?: string;
  email?: string;
  image?: string;
  sameAs?: readonly string[];
  jobTitle?: string;
  knowsAbout?: readonly string[];
}

export function createPersonSchema(
  person: PersonSchemaInput,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",

    name: person.name,

    ...(person.url
      ? {
          url: person.url,
        }
      : {}),

    ...(person.email
      ? {
          email: person.email,
        }
      : {}),

    ...(person.image
      ? {
          image: person.image,
        }
      : {}),

    ...(person.sameAs?.length
      ? {
          sameAs: person.sameAs,
        }
      : {}),

    ...(person.jobTitle
      ? {
          jobTitle: person.jobTitle,
        }
      : {}),

    ...(person.knowsAbout?.length
      ? {
          knowsAbout: person.knowsAbout,
        }
      : {}),
  };
}
