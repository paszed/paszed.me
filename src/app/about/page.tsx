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
