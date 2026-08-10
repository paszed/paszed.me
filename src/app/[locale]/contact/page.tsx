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

interface ContactPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getDictionary(locale);

  return {
    title: content.contact.title,
    description: content.contact.description,
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;
  const content = getDictionary(locale);

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader title={content.contact.title}>
          <Text muted>
            {content.contact.description}
          </Text>
        </PageHeader>

        <Section>
          <Stack
            gap="xl"
            className="max-w-2xl"
          >
            <Stack gap="sm">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.3em]"
              >
                {content.contact.emailLabel}
              </Text>

              <a
                href={`mailto:${content.contact.email}`}
                className="
                  text-xl
                  font-medium
                  transition-colors
                  hover:text-accent
                  sm:text-2xl
                "
              >
                {content.contact.email}
              </a>
            </Stack>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${content.contact.email}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-transparent
                  bg-accent
                  px-4
                  py-2
                  text-sm
                  font-medium
                  tracking-[0.01em]
                  !text-white
                  shadow-sm
                  transition-colors
                  duration-200
                  hover:bg-accent-hover
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                {content.contact.primaryCta}
              </a>

              <a
                href={`/${locale}/work`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  bg-transparent
                  px-4
                  py-2
                  text-sm
                  font-medium
                  tracking-[0.01em]
                  text-fg
                  transition-colors
                  duration-200
                  hover:border-accent/50
                  hover:bg-surface
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                {content.contact.secondaryCta}
              </a>
            </div>
          </Stack>
        </Section>
      </Stack>
    </Page>
  );
}
