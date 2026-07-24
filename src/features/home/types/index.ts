import type { home } from "@/content/home";

export type HomeContent = typeof home;

export type HomeHero = HomeContent["hero"];
export type HomeCurrentFocus = HomeContent["currentFocus"];
export type HomeFeaturedProjects = HomeContent["featuredProjects"];
export type HomeLatestWriting = HomeContent["latestWriting"];
export type HomePhilosophy = HomeContent["philosophy"];

export type HomeFocusItem = HomeCurrentFocus["items"][number];
export type HomePrinciple = HomePhilosophy["items"][number];
