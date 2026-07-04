import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Edvard Pasz, his engineering philosophy, developer workflow, and long-term approach to building software.",
};

import { Page } from "@/components/layout/page";
import {
  AboutHero,
  AboutPhilosophy,
  AboutSkills,
  AboutStory,
} from "@/features/about";

export default function AboutPage() {
  return (
    <Page>
      <div className="space-y-20">
        <AboutHero />

        <AboutStory />

        <AboutPhilosophy />

        <AboutSkills />
      </div>
    </Page>
  );
}
