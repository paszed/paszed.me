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
      "© {year} Alapworks. Minden jog fenntartva.",
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
      href: "/work",
    },
    {
      label: "Napló",
    },
    {
      label: "Rólam",
      href: "/about",
    },
  ],

  resources: [
    {
      label: "Eszközök",
    },
    {
      label: "Linkek",
      href: "/links",
    },
  ],

  developer: [],

  contact: [],
} as const;
