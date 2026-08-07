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
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface AboutPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.about.hero.title,
    description:
      content.about.hero.intro,
  };
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="xl">
        <AboutHero
          content={content.about.hero}
        />

        <AboutStory
          content={content.about.story}
        />

        <AboutPhilosophy
          content={content.about.philosophy}
        />

        <AboutSkills
          content={content.about.skills}
        />
      </Stack>
    </Page>
  );
}
