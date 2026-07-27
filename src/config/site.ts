export const site = {
  name: "Paszed",

  brand: "paszed",

  owner: "Edvard Pasz",

  url: "https://paszed.me",

  title:
    "Edvard Pasz — Developer Tools, Software Engineering & AI Workflows",

  description:
    "Personal website of Edvard Pasz. Building developer tools, exploring practical AI workflows, and documenting software engineering, architecture, terminal workflows, and the systems behind the projects I create.",

  email: "edvard@paszed.me",

  locale: "en_US",

  language: "en",

  themeColor: "#f8f5ef",

  social: {
    github: "https://github.com/paszed",
    linkedin: "https://linkedin.com/in/paszed",
    x: "https://x.com/paszed_",
  },

  ogImage: "/og.png",
} as const;

export type Site = typeof site;
