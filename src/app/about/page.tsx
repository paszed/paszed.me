import { Page } from "@/components/layout/page";
import {
  AboutHero,
  AboutPhilosophy,
  AboutStory,
} from "@/features/about";

export default function AboutPage() {
  return (
    <Page>
      <div className="space-y-20">
        <AboutHero />

        <AboutStory />

        <AboutPhilosophy />
      </div>
    </Page>
  );
}
