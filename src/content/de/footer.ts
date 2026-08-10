import { profiles } from "@/content/profiles";

export const footer = {
  labels: {
    navigation: "Navigation",
    resources: "Ressourcen",
    developer: "Entwicklung",
    contact: "Kontakt",
    description:
      "Entwicklung von Entwicklerwerkzeugen, KI-Anwendungen und modernen Webprodukten.",
    tagline:
      "Bauen. Lernen. Liefern.",
    copyright:
      "© {year} Alapworks. Alle Rechte vorbehalten.",
    builtWith:
      "Erstellt mit Next.js, TypeScript & Tailwind CSS.",
  },

  navigation: [
    {
      label: "Startseite",
      href: "/",
    },
    {
      label: "Projekte",
      href: "/work",
    },
    {
      label: "Journal",
    },
    {
      label: "Über mich",
      href: "/about",
    },
  ],

  resources: [
    {
      label: "Werkzeuge",
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
