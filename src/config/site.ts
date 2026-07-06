export const site = {
  name: "Paszed",

  brand: "paszed",

  owner: "Edvard Pasz",

  url: "https://paszed.me",

  title:
    "Edvard Pasz | Developer Tools, Software Engineering & AI Workflows",

  description:
    "Personal website of Edvard Pasz. I build developer tools, explore practical AI workflows, and document software engineering, software architecture, terminal workflows, and the projects I build along the way.",

  email: "edvard@paszed.me",

  locale: "en_US",

  language: "en",

  themeColor: "#faf8f5",

  social: {
    github: "https://github.com/paszed",
    linkedin: "https://linkedin.com/in/paszed",
    x: "https://x.com/paszed_",
  },

  ogImage: "/og.png",
} as const;

export type Site = typeof site;
