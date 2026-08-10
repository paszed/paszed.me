import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/content/services";
import {
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
import type { Locale } from "@/i18n/config";

interface ServicePageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    notFound();
  }

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={service.title}>
          <Text
            size="lg"
            muted
            className="max-w-2xl leading-relaxed"
          >
            {service.description}
          </Text>
        </PageHeader>

        <Section>
          <Stack gap="xl" className="max-w-3xl">
            <Stack gap="md">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.3em]"
              >
                Overview
              </Text>

              <Text
                size="lg"
                className="leading-relaxed"
              >
                {service.overview}
              </Text>
            </Stack>

            <Stack gap="md">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.3em]"
              >
                What we build
              </Text>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.capabilities.map(
                  (capability) => (
                    <div
                      key={capability}
                      className="rounded-xl border border-border p-5"
                    >
                      <Text size="sm">
                        {capability}
                      </Text>
                    </div>
                  ),
                )}
              </div>
            </Stack>
          </Stack>
        </Section>
      </Stack>
    </Page>
  );
}
