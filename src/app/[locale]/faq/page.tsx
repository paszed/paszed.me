import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Stack,
  Text,
} from "@/design-system";
import { FAQSection } from "@/features/faq/components/faq-section";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface FAQPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: FAQPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.faq.title,
    description: content.faq.description,
  };
}

export default async function FAQPage({
  params,
}: FAQPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <Page>
      <PageHeader title={content.faq.title}>
        <Text muted>
          {content.faq.description}
        </Text>
      </PageHeader>

      <Stack gap="2xl">
        <FAQSection content={content.faq} />
      </Stack>
    </Page>
  );
}
