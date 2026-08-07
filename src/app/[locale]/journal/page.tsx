import type { Metadata } from "next";
import Link from "next/link";

import {
  Cluster,
  Page,
  PageHeader,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import {
  journalCategories,
} from "@/content/journal";
import {
  getDictionary,
} from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import {
  getPublishedArticles,
} from "@/lib/journal";

interface JournalPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.journal.title,
    description: content.journal.description,
  };
}

export default async function JournalPage({
  params,
}: JournalPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  const articles = getPublishedArticles();

  const categories = journalCategories.map(
    (definition) => ({
      ...definition,
      articles: articles.filter(
        (article) =>
          article.category === definition.category,
      ),
    }),
  );

  return (
    <Page>
      <Stack gap="xl">

        <PageHeader title={content.journal.title}>
  <Text
    muted
    className="max-w-2xl leading-relaxed"
  >
    {content.journal.description}
  </Text>
</PageHeader>
        {categories.map((category, index) => (
          <Section key={category.slug}>
            <Stack gap="xl">
              <SectionHeader
                eyebrow={`Section ${String(index + 1).padStart(2, "0")}`}
                title={category.category}
                description={category.description}
              />

              <Stack>
                {category.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${locale}/journal/${article.slug}`}
                    className="group border-b border-border py-5"
                  >
                    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                      <Text
                        as="span"
                        className="font-medium transition-colors group-hover:text-accent"
                      >
                        {article.title}
                      </Text>

                      <Cluster gap="sm">
                        <Text
                          size="sm"
                          muted
                        >
                          {article.readingTimeMinutes} min
                        </Text>
                      </Cluster>
                    </div>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Section>
        ))}
      </Stack>
    </Page>
  );
}
