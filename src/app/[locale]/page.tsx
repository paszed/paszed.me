import type { Metadata } from "next";

import {
  Capabilities,
  ContactCTA,
  FeaturedProjects,
  Hero,
  Philosophy,
  ProcessPreview,
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
    description: content.home.hero.description,
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <>
      <Hero
        content={content.home.hero}
      />

      <Capabilities
        content={content.home.capabilities}
      />

      <FeaturedProjects
        content={
          content.home.featuredProjects
        }
      />

      <ProcessPreview
        content={content.process}
        eyebrow={content.home.process.eyebrow}
        href={`/${locale}/process`}
        actionLabel={
          content.home.process.actionLabel
        }
      />

      <Philosophy
        content={content.home.philosophy}
      />

      <ContactCTA
        content={content.home.contact}
      />
    </>
  );
}
