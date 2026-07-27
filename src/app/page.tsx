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
  description: site.description,
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <CurrentFocus />

      <FeaturedProjects />

      <LatestWriting />

      <Philosophy />

      <ContactCTA />
    </div>
  );
}
