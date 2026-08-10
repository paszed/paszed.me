export const footer = {
  labels: {
    navigation: "Navigation",
    resources: "Resources",
    developer: "Developer",
    contact: "Contact",
    description:
      "Building developer tools, AI applications, and modern web products.",
    tagline:
      "Build. Learn. Ship.",
    copyright:
      "© {year} Alapworks. All rights reserved.",
    builtWith:
      "Built with Next.js, TypeScript & Tailwind CSS.",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/work",
    },
    {
      label: "Journal",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  resources: [
    {
      label: "Uses",
    },
    {
      label: "Links",
      href: "/links",
    },
  ],

  developer: [],

  contact: [],
} as const;
