import type { Metadata } from "next";

import {
  Capabilities,
  ContactCTA,
  FeaturedProjects,
  Hero,
  HowIHelp,
  LatestWriting,
  Philosophy,
} from "@/features/home";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface HomePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.home.hero.title,
    description:
      content.home.hero.description,
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  return (
    <div className="overflow-hidden">
      <Hero
        content={content.home.hero}
      />

      <Capabilities
        content={content.home.capabilities}
      />

      <HowIHelp
        content={content.home.howIHelp}
      />

      <FeaturedProjects
        content={content.home.featuredProjects}
      />

      <LatestWriting
        content={content.home.latestWriting}
      />

      <Philosophy
        content={content.home.philosophy}
      />

      <ContactCTA
        content={content.home.contact}
      />
    </div>
  );
}
