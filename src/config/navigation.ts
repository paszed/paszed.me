export const navigation = [
  {
    label: "Projects",
    href: "/projects",
    description: "Software projects, experiments, and systems I have built.",
  },
  {
    label: "Journal",
    href: "/journal",
    description:
      "Technical writing on engineering, architecture, AI, and systems design.",
  },
  {
    label: "About",
    href: "/about",
    description: "Background, skills, principles, and engineering philosophy.",
  },
  {
    label: "Now",
    href: "/now",
    description: "Current focus, priorities, and things I am working on.",
  },
] as const;

export type Navigation = typeof navigation;
