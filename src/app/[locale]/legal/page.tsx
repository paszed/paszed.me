import type { Metadata } from "next";

import {
  Page,
  Stack,
  Text,
} from "@/design-system";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface LegalPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.legal.legal.title,
    description: content.legal.legal.description,
  };
}

export default async function LegalPage({
  params,
}: LegalPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);
  const document = content.legal.legal;

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

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={`/${locale}/legal`}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <Text
              as="h2"
              size="lead"
              className="font-semibold"
            >
              {content.legal.imprint.title}
            </Text>

            <Text
              size="sm"
              muted
              className="mt-2 leading-relaxed"
            >
              {content.legal.imprint.description}
            </Text>
          </a>

          <a
            href={`/${locale}/privacy`}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <Text
              as="h2"
              size="lead"
              className="font-semibold"
            >
              {content.legal.privacy.title}
            </Text>

            <Text
              size="sm"
              muted
              className="mt-2 leading-relaxed"
            >
              {content.legal.privacy.description}
            </Text>
          </a>

          <a
            href={`/${locale}/terms`}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <Text
              as="h2"
              size="lead"
              className="font-semibold"
            >
              {content.legal.terms.title}
            </Text>

            <Text
              size="sm"
              muted
              className="mt-2 leading-relaxed"
            >
              {content.legal.terms.description}
            </Text>
          </a>
        </div>
      </Stack>
    </Page>
  );
}
