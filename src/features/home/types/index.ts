import type { home } from "@/content";

export type HomeContent = typeof home;

export type HomeHero = HomeContent["hero"];

export type HomeCapabilities =
  HomeContent["capabilities"];

export type HomeFeaturedProjects =
  HomeContent["featuredProjects"];

export type HomeLatestWriting =
  HomeContent["latestWriting"];

export type HomePhilosophy =
  HomeContent["philosophy"];
