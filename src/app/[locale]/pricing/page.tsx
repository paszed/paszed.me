import type { Metadata } from "next";

import {
  Page,
  PageHeader,
  Stack,
  Text,
  Section,
} from "@/design-system";
import {
  PricingAddOns,
  PricingCalculator,
  PricingNote,
  PricingPlans,
} from "@/features/pricing";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PricingPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.pricing.title,
    description: content.pricing.description,
  };
}

export default async function PricingPage({
  params,
}: PricingPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={content.pricing.title}>
          <Text
            size="lg"
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.pricing.description}
          </Text>
        </PageHeader>

        <PricingPlans
          content={content.pricing}
        />

        <Section>
          <PricingCalculator
            content={content.pricing.calculator}
          />
        </Section>

        <PricingAddOns
          content={content.addOns}
        />

        <PricingNote
          content={content.pricing}
        />
      </Stack>
    </Page>
  );
}
