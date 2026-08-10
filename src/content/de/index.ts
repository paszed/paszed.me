import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { search } from "./search";

export const de = {
  about,
  footer,
  home,
  search,

  navigation: {
    home: "Startseite",
    services: "Leistungen",
    work: "Unsere Projekte",
    about: "Über uns",
    contact: "Kontakt",
  },

  navigationLabels: {
    open: "Navigation öffnen",
    close: "Navigation schließen",
    navigation: "Primäre Navigation",
    home: "Startseite",
    search: "Suche",
  },
} as const;
