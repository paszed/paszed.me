import type { Locale } from "./config";

import { de } from "@/content/de";
import { en } from "@/content/en";
import { hu } from "@/content/hu";

import type { AboutContent } from "@/features/about/types";
import type { HomeContent } from "@/features/home/types";

interface NavigationContent {
  home: string;
  services: string;
  work: string;
  about: string;
  contact: string;
}

interface NavigationLabelsContent {
  open: string;
  close: string;
  navigation: string;
  home: string;
  search: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLabels {
  navigation: string;
  resources: string;
  developer: string;
  contact: string;
  description: string;
  tagline: string;
  copyright: string;
  builtWith: string;
}

interface FooterContent {
  labels: FooterLabels;
  navigation: readonly FooterLink[];
  resources: readonly FooterLink[];
  developer: readonly FooterLink[];
  contact: readonly FooterLink[];
}


interface LinksContent {
  title: string;
  description: string;
  sections: {
    featured: string;
    developer: string;
    social: string;
  };
}

interface NowSection {
  title: string;
  items: readonly string[];
}


interface ProjectsContent {
  title: string;
  description: string;
  selectedWork: string;
  selectedDescription: string;
  allProjects: string;
  portfolio: string;
  card: {
    readLabel: string;
  };
  sections: {
    links: string;
    technology: string;
    purpose: string;
    overview: string;
    roadmap: string;
    gallery: string;
    architecture: string;
    problem: string;
    principles: string;
    capabilities: string;
    engineering: string;
    challenges: string;
    lessons: string;
  };
  defaults: {
    technologyPurpose: string;
    projectImageAlt: string;
  };
}

interface SearchContent {
  title: string;
  description: string;
  input: {
    placeholder: string;
    label: string;
  };
  empty: {
    title: string;
    description: string;
  };
  categories: {
    Project: string;
    Article: string;
    Page: string;
  };
}

interface Dictionary {
  about: AboutContent;
  home: HomeContent;
  footer: FooterContent;
  links: LinksContent;
  now: readonly NowSection[];
  projects: ProjectsContent;
  search: SearchContent;
  uses: typeof en.uses;
  navigation: NavigationContent;
  navigationLabels: NavigationLabelsContent;
}

export const dictionaries: Record<
  Locale,
  Dictionary
> = {
  en,
  de,
  hu,
};

export type { Dictionary };
