import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Edvard Pasz. I build developer tools, explore practical AI workflows, and document software engineering, architecture, and engineering projects.",
};

import {
  ContactCTA,
  CurrentFocus,
  FeaturedProjects,
  Hero,
  Philosophy,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <CurrentFocus />

      <Philosophy />

      <ContactCTA />
    </>
  );
}
