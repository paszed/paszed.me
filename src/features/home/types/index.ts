export interface HomeHeroAction {
  label: string;
  href: string;
}

export interface HomeHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: HomeHeroAction;
  secondaryCta: HomeHeroAction;
}

export interface HomeCapabilitiesItem {
  title: string;
  description: string;
}

export interface HomeCapabilities {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly HomeCapabilitiesItem[];
}

export interface HomeFeaturedProjects {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  emptyState: string;
  readLabel: string;
}

export interface HomeContactAction {
  label: string;
  href: string;
}

export interface HomeContact {
  title: string;
  description: string;
  primaryCta: HomeContactAction;
  secondaryCta: HomeContactAction;
}

export interface HomePhilosophyItem {
  title: string;
  description: string;
}

export interface HomePhilosophy {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly HomePhilosophyItem[];
}

export interface HomeLatestWriting {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  emptyState: string;
  draftLabel: string;
  readLabel: string;
}

export interface HomeContent {
  hero: HomeHero;
  capabilities: HomeCapabilities;
  howIHelp: HomeCapabilities;
  featuredProjects: HomeFeaturedProjects;
  latestWriting: HomeLatestWriting;
  contact: HomeContact;
  philosophy: HomePhilosophy;
}
