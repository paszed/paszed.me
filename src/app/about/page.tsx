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
    "Learn about Edvard Pasz, the engineering philosophy behind his software platforms, and his approach to building maintainable systems.",
};

export default function AboutPage() {
  return (
    <Page>
      <Stack gap="2xl">
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <AboutSkills />
      </Stack>
    </Page>
  );
}
