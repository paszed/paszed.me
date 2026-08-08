import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { journal } from "./journal";
import { links } from "./links";
import { now, nowPage } from "./now";
import { projects } from "./projects";
import { search } from "./search";
import { uses } from "./uses";

export const en = {
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
    home: "Home",
    projects: "Projects",
    journal: "Journal",
    about: "About",
    now: "Now",
  },

  navigationLabels: {
    open: "Open navigation",
    close: "Close navigation",
    navigation: "Primary navigation",
    home: "Home",
    search: "Search",
  },
} as const;
