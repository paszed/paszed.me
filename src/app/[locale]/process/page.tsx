import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Stack,
  Text,
} from "@/design-system";
import { ProcessSection } from "@/features/process/components/process-section";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface ProcessPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ProcessPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.process.title,
    description: content.process.description,
  };
}

export default async function ProcessPage({
  params,
}: ProcessPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={content.process.title}>
          <Text muted>
            {content.process.description}
          </Text>
        </PageHeader>

        <ProcessSection
          content={content.process}
        />
      </Stack>
    </Page>
  );
}
