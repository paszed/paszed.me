export const site = {
  name: "Paszed",
  brand: "paszed",
  owner: "Edvard Pasz",

  url: "https://paszed.me",

  title: "Paszed",

  description:
    "Building developer tools, AI applications, and modern web products.",

  email: "edvard@paszed.me",
} as const;

export type Site = typeof site;
