import type { Locale } from "./config";

import { de } from "@/content/de";
import { en } from "@/content/en";
import { hu } from "@/content/hu";

import type { AboutContent } from "@/features/about/types";
import type {
  HomeCapabilities,
  HomeContact,
  HomeFeaturedProjects,
  HomeHero,
  HomePhilosophy,
} from "@/features/home/types";
import type { FAQContent } from "@/types/faq";
import type { ProcessContent } from "@/types/process";

interface HomeContent {
  hero: HomeHero;
  capabilities: HomeCapabilities;
  howIHelp: HomeCapabilities;
  featuredProjects: HomeFeaturedProjects;

  process: {
    eyebrow: string;
    actionLabel: string;
  };

  latestWriting: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    emptyState: string;
    draftLabel: string;
    readLabel: string;
  };

  contact: HomeContact;
  philosophy: HomePhilosophy;
}

interface NavigationContent
  extends Record<string, string> {
  services: string;
  work: string;
  process: string;
  pricing: string;
  about: string;
  faq: string;
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
  href?: string;
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

interface ProjectsContent {
  title: string;
  description: string;
  selectedWork: string;
  selectedDescription: string;
  allProjects: string;
  portfolio: string;
  emptyState: string;

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

interface AddOnsContent {
  title: string;
  description: string;
  forLabel: string;

  items: {
    "website-care": {
      name: string;
      for: string;
      features: readonly string[];
    };

    "google-visibility": {
      name: string;
      for: string;
      features: readonly string[];
    };

    "content-support": {
      name: string;
      for: string;
      features: readonly string[];
    };

    "additional-pages": {
      name: string;
      for: string;
      examples: readonly string[];
    };

    "additional-languages": {
      name: string;
      for: string;
      features: readonly string[];
    };
  };

  startingFrom: string;
  perMonth: string;
  perPage: string;
  perLanguage: string;
  addOnsAvailable: string;
  examples: string;
}

interface ServicesContent {
  title: string;
  description: string;
  items: readonly {
    slug: string;
    title: string;
    description: string;
  }[];
}

interface ContactContent {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
  primaryCta: string;
  secondaryCta: string;
}

interface LegalSection {
  title: string;
  body: readonly string[];
}

interface LegalDocument {
  title: string;
  description: string;
  sections: readonly LegalSection[];
}

interface LegalContent {
  imprint: LegalDocument;
  privacy: LegalDocument;
  terms: LegalDocument;
  legal: {
    title: string;
    description: string;
  };
}

interface PricingPlan {
  forLabel: string;
  for: string;
  addOns: string;
}

interface PricingContent {
  title: string;
  description: string;

  paymentLabel: string;
  paymentDescription: string;

  plans: {
    starter: PricingPlan;
    business: PricingPlan;
    premium: PricingPlan;
  };

  upfront: string;
  from: string;
  perMonth: string;
  total: string;
  months: string;

  calculator: {
    title: string;
    description: string;

    packageLabel: string;
    paymentLabel: string;
    addOnsLabel: string;

    monthly: string;
    upfront: string;
    total: string;
    perMonth: string;
    months: string;

    selected: string;
    pages: string;
    languages: string;

    estimatedInvestment: string;
    estimatedMonthlyPayment: string;
    estimatedTotal: string;

    websiteCare: string;
    googleVisibility: string;
    contentSupport: string;
    additionalPages: string;
    additionalLanguages: string;

    from: string;
    page: string;
    language: string;

    includes: string;
    removeLabel: string;
    addLabel: string;
  };

  noteTitle: string;
  note: string;
}

interface Dictionary {
  about: AboutContent;
  addOns: AddOnsContent;
  contact: ContactContent;
  faq: FAQContent;
  home: HomeContent;
  footer: FooterContent;
  legal: LegalContent;
  pricing: PricingContent;
  process: ProcessContent;
  projects: ProjectsContent;
  services: ServicesContent;
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
