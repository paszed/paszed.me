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

export const en = {
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
    services: "Services",
    work: "Our Work",
    process: "Process",
    pricing: "Pricing",
    about: "About Us",
    faq: "FAQ",
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
