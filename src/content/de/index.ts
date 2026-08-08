import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { journal } from "./journal";
import { links } from "./links";
import { now, nowPage } from "./now";
import { projects } from "./projects";
import { search } from "./search";
import { uses } from "./uses";

export const de = {
  about,
  footer,
  home,
  journal,
  links,
  now,
  nowPage,
  projects,
  search,
  uses,

  navigation: {
    home: "Startseite",
    projects: "Projekte",
    journal: "Journal",
    about: "Über mich",
    now: "Aktuell",
  },

  navigationLabels: {
    open: "Navigation öffnen",
    close: "Navigation schließen",
    navigation: "Primäre Navigation",
    home: "Startseite",
    search: "Suche",
  },
} as const;
