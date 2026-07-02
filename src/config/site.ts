export const site = {
  name: "Paszed",
  brand: "paszed",
  owner: "Edvard Pasz",

  url: "https://paszed.me",

  title: "Paszed",
  description:
    "Building developer tools, AI applications, and modern web products.",

  email: "edvard@paszed.me",

  links: {
    github: "https://github.com/paszed",
    x: "https://x.com/paszed_",
    reddit: "https://reddit.com/u/paszed",
  },
} as const;

export type Site = typeof site;
