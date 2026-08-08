import type { Metadata } from "next";

import {
  Page,
  SectionHeader,
  Stack,
} from "@/design-system";
import {
  NowSection,
} from "@/features/now";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface NowPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: NowPageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.nowPage.title,
    description: content.nowPage.description,
  };
}

export default async function NowPage({
  params,
}: NowPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  return (
    <Page>
      <Stack className="space-y-16 sm:space-y-20">

        <SectionHeader
  eyebrow="Paszed"
  title={content.nowPage.title}
  description={
    content.nowPage.description
  }
  level={1}
/>
        {content.now.map((section) => (
          <NowSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </Stack>
    </Page>
  );
}
