import { profiles } from "@/content/profiles";

export const footer = {
  labels: {
    navigation: "Navigáció",
    resources: "Források",
    developer: "Fejlesztés",
    contact: "Kapcsolat",
    description:
      "Fejlesztői eszközök, MI-alkalmazások és modern webes termékek készítése.",
    tagline:
      "Építés. Tanulás. Szállítás.",
    copyright:
      "© {year} {owner}. Minden jog fenntartva.",
    builtWith:
      "Next.js, TypeScript és Tailwind CSS használatával készült.",
  },

  navigation: [
    {
      label: "Kezdőlap",
      href: "/",
    },
    {
      label: "Projektek",
      href: "/projects",
    },
    {
      label: "Napló",
      href: "/journal",
    },
    {
      label: "Rólam",
      href: "/about",
    },
  ],

  resources: [
    {
      label: "Eszközök",
      href: "/uses",
    },
    {
      label: "Linkek",
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
