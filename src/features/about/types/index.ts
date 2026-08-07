import type { about } from "@/content/en/about";
export type AboutContent = typeof about;

export type AboutHeroContent =
  AboutContent["hero"];

export type AboutStoryContent =
  AboutContent["story"];

export type AboutPhilosophyContent =
  AboutContent["philosophy"];

export type AboutSkillsContent =
  AboutContent["skills"];
