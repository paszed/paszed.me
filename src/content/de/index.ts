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

export const de = {
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
    services: "Leistungen",
    work: "Unsere Arbeiten",
    process: "Prozess",
    pricing: "Preise",
    about: "Über uns",
    faq: "FAQ",
    contact: "Kontakt",
  },

  navigationLabels: {
    open: "Navigation öffnen",
    close: "Navigation schließen",
    navigation: "Hauptnavigation",
    home: "Startseite",
    search: "Suchen",
  },
} as const;
