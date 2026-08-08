export interface HomeHero {
  title: string;
  description: string;
  eyebrow: string;
  actions?: {
    primary?: string;
    secondary?: string;
  };
}

export interface HomeCapabilitiesItem {
  title: string;
  description: string;
}

export interface HomeCapabilities {
  title: string;
  description: string;
  items: readonly HomeCapabilitiesItem[];
}

export interface HomeHowIHelpItem {
  title: string;
  description: string;
}

export interface HomeHowIHelp {
  title: string;
  description: string;
  items: readonly HomeHowIHelpItem[];
}

export interface HomeFeaturedProjects {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  emptyState: string;
  readLabel: string;
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

export interface HomePhilosophyItem {
  title: string;
  description: string;
}

export interface HomePhilosophy {
  title: string;
  description: string;
  items: readonly HomePhilosophyItem[];
}

export interface HomeContent {
  hero: HomeHero;
  capabilities: HomeCapabilities;
  howIHelp: HomeHowIHelp;
  featuredProjects: HomeFeaturedProjects;
  latestWriting: HomeLatestWriting;
  philosophy: HomePhilosophy;
}
