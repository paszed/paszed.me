import { Page } from "@/components/layout/page";
import {
  AboutHero,
  AboutStory,
} from "@/features/about";

export default function AboutPage() {
  return (
    <Page
      title="About"
      description="Learn more about me, my background, and how I approach building software."
    >
      <div className="space-y-20">
        <AboutHero />

        <AboutStory />
      </div>
    </Page>
  );
}
