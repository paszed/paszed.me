import { profiles } from "@/content/profiles";

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
      "© {year} {owner}. All rights reserved.",
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
      href: "/projects",
    },
    {
      label: "Journal",
      href: "/journal",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  resources: [
    {
      label: "Uses",
      href: "/uses",
    },
    {
      label: "Links",
      href: "/links",
    },
  ],

  developer: [
    profiles.github,
    profiles.npm,
  ],

  contact: [
    profiles.email,
  ],
} as const;
