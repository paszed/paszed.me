import type { Metadata } from "next";

import {
  Page,
  Stack,
} from "@/design-system";

import {
  AboutHero,
  AboutPhilosophy,
  AboutSkills,
  AboutStory,
} from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Edvard Pasz, his engineering approach, software philosophy, and the systems he builds.",
};

export default function AboutPage() {
  return (
    <Page>
      <Stack gap="xl">
        <AboutHero />

        <AboutStory />

        <AboutPhilosophy />

        <AboutSkills />
      </Stack>
    </Page>
  );
}
