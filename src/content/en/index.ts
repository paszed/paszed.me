import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { search } from "./search";

export const en = {
  about,
  footer,
  home,
  search,

  navigation: {
    home: "Home",
    services: "Services",
    work: "Our Work",
    about: "About Us",
    contact: "Contact",
  },

  navigationLabels: {
    open: "Open navigation",
    close: "Close navigation",
    navigation: "Primary navigation",
    home: "Home",
    search: "Search",
  },
} as const;
