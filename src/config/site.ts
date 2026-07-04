export const site = {
  name: "Paszed",

  brand: "paszed",

  owner: "Edvard Pasz",

  url: "https://paszed.me",

  title: "Edvard Pasz | Developer Tools, Software Engineering & AI Workflows",

  description:
    "Personal website of Edvard Pasz. I build developer tools, explore practical AI workflows, and document software engineering, software architecture, terminal workflows, and the projects I build along the way.",

  email: "edvard@paszed.me",
} as const;

export type Site = typeof site;
