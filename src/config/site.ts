export interface SiteSocial {
  github?: string;
  linkedin?: string;
  x?: string;
}

export const site = {
  name: "Alapworks",
  brand: "alapworks",

  url: "https://alapworks.com",

  title: "Alapworks — Software Engineering & Digital Products",

  description:
    "Alapworks is a software engineering studio building thoughtful digital products, modern web experiences, and robust engineering systems.",

  email: undefined,

  locale: "en_US",

  language: "en",

  themeColor: "#0a0d12",

  social: {
    github: undefined,
    linkedin: undefined,
    x: undefined,
  } satisfies SiteSocial,

  ogImage: "/og.png",
} as const;

export type Site = typeof site;
