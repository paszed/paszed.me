import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { journal } from "./journal";
import { links } from "./links";
import { now, nowPage } from "./now";
import { projects } from "./projects";
import { search } from "./search";
import { uses } from "./uses";

export const hu = {
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
    home: "Kezdőlap",
    projects: "Projektek",
    journal: "Napló",
    about: "Rólam",
    now: "Jelenleg",
  },

  navigationLabels: {
    open: "Navigáció megnyitása",
    close: "Navigáció bezárása",
    navigation: "Elsődleges navigáció",
    home: "Kezdőlap",
    search: "Keresés",
  },
} as const;
