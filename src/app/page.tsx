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
    "Personal website of Edvard Pasz. I build developer tools, explore practical AI workflows, and document software engineering, architecture, and engineering projects.",
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
