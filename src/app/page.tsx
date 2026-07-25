import type { Metadata } from "next";

import { site } from "@/config/site";
import {
  ContactCTA,
  CurrentFocus,
  FeaturedProjects,
  Hero,
  LatestWriting,
  Philosophy,
} from "@/features/home";

export const metadata: Metadata = {
  title: site.title,
  description:
    "Personal website of Edvard Pasz. Software engineering, developer infrastructure, distributed systems, AI, projects, and long-form engineering writing.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <CurrentFocus />

      <FeaturedProjects />

      <LatestWriting />

      <Philosophy />

      <ContactCTA />
    </>
  );
}
