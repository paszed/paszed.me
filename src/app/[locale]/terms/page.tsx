import type { Metadata } from "next";

import {
  Page,
  Stack,
  Text,
} from "@/design-system";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface TermsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.legal.terms.title,
    description: content.legal.terms.description,
  };
}

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);
  const document = content.legal.terms;

  return (
    <Page>
      <Stack gap="2xl">
        <Stack gap="sm">
          <Text
            as="h1"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {document.title}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {document.description}
          </Text>
        </Stack>

        <Stack gap="xl">
          {document.sections.map((section) => (
            <Stack
              key={section.title}
              gap="sm"
            >
              <Text
                as="h2"
                size="lead"
                className="font-semibold"
              >
                {section.title}
              </Text>

              <Stack gap="sm">
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
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Page>
  );
}
