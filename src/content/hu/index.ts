import { about } from "./about";
import { addOns } from "./add-ons";
import { contact } from "./contact";
import { faq } from "./faq";
import { footer } from "./footer";
import { home } from "./home";
import { legal } from "./legal";
import { pricing } from "./pricing";
import { process } from "./process";
import { projects } from "./projects";
import { services } from "./services";

export const hu = {
  about,
  addOns,
  contact,
  faq,
  footer,
  home,
  legal,
  pricing,
  process,
  projects,
  services,

  navigation: {
    services: "Szolgáltatások",
    work: "Munkáink",
    process: "Folyamat",
    pricing: "Árak",
    about: "Rólunk",
    faq: "GYIK",
    contact: "Kapcsolat",
  },

  navigationLabels: {
    open: "Navigáció megnyitása",
    close: "Navigáció bezárása",
    navigation: "Fő navigáció",
    home: "Kezdőlap",
    search: "Keresés",
  },
} as const;
