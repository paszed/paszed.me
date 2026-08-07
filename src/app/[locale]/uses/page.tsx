import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Stack,
  Text,
} from "@/design-system";
import { uses } from "@/content";
import {
  getDictionary,
} from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import {
  UsesSection,
} from "@/features/uses";

interface UsesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: UsesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.uses.title,
    description: content.uses.description,
  };
}

export default async function UsesPage({
  params,
}: UsesPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="xl">

        <PageHeader title={content.uses.title}>
  <Text
    muted
    className="max-w-2xl leading-relaxed"
  >
    {content.uses.description}
  </Text>
</PageHeader>
        {uses.sections.map((section) => (
          <UsesSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </Stack>
    </Page>
  );
}
