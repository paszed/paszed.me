import type { TechnologyIconName } from "@/design-system";

export interface AboutHeroContent {
  title: string;
  intro: string;
}

export interface AboutStoryContent {
  title: string;
  description: string;
  items: readonly string[];
}

export interface AboutPhilosophyItem {
  title: string;
  description: string;
}

export interface AboutPhilosophyContent {
  title: string;
  description: string;
  items: readonly AboutPhilosophyItem[];
}

export interface AboutSkillsGroup {
  category: string;
  items: readonly TechnologyIconName[];
}

export interface AboutSkillsContent {
  title: string;
  description: string;
  items: readonly AboutSkillsGroup[];
}

export interface AboutContent {
  hero: AboutHeroContent;
  story: AboutStoryContent;
  philosophy: AboutPhilosophyContent;
  skills: AboutSkillsContent;
}
