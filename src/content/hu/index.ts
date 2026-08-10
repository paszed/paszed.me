import { about } from "./about";
import { footer } from "./footer";
import { home } from "./home";
import { search } from "./search";

export const hu = {
  about,
  footer,
  home,
  search,

  navigation: {
    home: "Kezdőlap",
    services: "Szolgáltatások",
    work: "Munkáink",
    about: "Rólunk",
    contact: "Kapcsolat",
  },

  navigationLabels: {
    open: "Navigáció megnyitása",
    close: "Navigáció bezárása",
    navigation: "Elsődleges navigáció",
    home: "Kezdőlap",
    search: "Keresés",
  },
} as const;
