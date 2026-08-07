import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Stack,
  Text,
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Now",
    description:
      "What I&apos;m currently building, learning, exploring, and working on.",
  };
}

export default async function NowPage({
  params,
}: NowPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="xl">
        <PageHeader
          title="Now"
        />

        <Text
          muted
          className="max-w-2xl leading-relaxed"
        >
          What I&apos;m currently building, learning, exploring, and working on.
        </Text>

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
