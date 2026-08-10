import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.legal.imprint.title,
    description: content.legal.imprint.description,
  };
}

export default async function ImprintPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);
  const page = content.legal.imprint;

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={page.title}>
          <Text
            size="lg"
            muted
            className="max-w-2xl leading-relaxed"
          >
            {page.description}
          </Text>
        </PageHeader>

        <Section>
          <Stack gap="2xl" className="max-w-3xl">
            {page.sections.map((section) => (
              <Stack key={section.title} gap="sm">
                <Text as="h2" size="lg">
                  {section.title}
                </Text>

                {section.body.map((paragraph) => (
                  <Text
                    key={paragraph}
                    muted
                    className="leading-relaxed"
                  >
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            ))}
          </Stack>
        </Section>
      </Stack>
    </Page>
  );
}
