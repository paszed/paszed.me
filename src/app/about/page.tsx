import type { Metadata } from "next";

import { Page } from "@/components/layout/page";
import {
  AboutHero,
  AboutPhilosophy,
  AboutSkills,
  AboutStory,
} from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Edvard Pasz, the engineering philosophy behind his software platforms, and his approach to building maintainable systems.",
};

export default function AboutPage() {
  return (
    <Page>
      <div className="space-y-24">
        <AboutHero />

        <AboutStory />

        <AboutPhilosophy />

        <AboutSkills />
      </div>
    </Page>
  );
}
