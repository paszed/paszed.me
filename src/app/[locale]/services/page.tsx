import type { Metadata } from "next";
import Link from "next/link";

import {
  Grid,
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface ServicesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.services.title,
    description: content.services.description,
  };
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={content.services.title}>
          <Text
            size="lg"
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.services.description}
          </Text>
        </PageHeader>

        <Section>
          <Grid gap="lg">
            {content.services.items.map((service) => (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-border
                  p-6
                  transition-[border-color,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-fg-muted
                  sm:p-8
                "
              >
                <Stack gap="md">
                  <Text
                    as="h2"
                    size="lead"
                    className="transition-colors group-hover:text-accent"
                  >
                    {service.title}
                  </Text>

                  <Text
                    muted
                    className="leading-relaxed"
                  >
                    {service.description}
                  </Text>

                  <Text
                    size="sm"
                    className="font-medium"
                  >
                    →
                  </Text>
                </Stack>
              </Link>
            ))}
          </Grid>
        </Section>
      </Stack>
    </Page>
  );
}
