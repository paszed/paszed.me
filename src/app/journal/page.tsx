import Link from "next/link";

import {
  Cluster,
  Heading,
  Page,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import { journalCategories } from "@/content/journal";
import { getAllArticles } from "@/lib/journal";

export default function JournalPage() {
  const articles = getAllArticles();

  const categories = journalCategories.map((definition) => ({
    ...definition,
    articles: articles.filter(
      (article) => article.category === definition.category,
    ),
  }));

  return (
    <Page className="space-y-20">
      <SectionHeader
        level={1}
        centered
        eyebrow="Engineering Journal"
        title="Journal"
        description="Essays and notes on software engineering, architecture, infrastructure, systems, AI, and the principles behind building software intended to last."
      />

      <Section>
        <Stack gap="2xl">
          <Stack gap="sm">
            <Text
              size="sm"
              muted
              className="uppercase tracking-[0.3em]"
            >
              Contents
            </Text>

            <Heading as="h2">
              An index of the journal.
            </Heading>

            <Text
              muted
              className="max-w-2xl leading-relaxed"
            >
              {articles.length} essays across{" "}
              {categories.length} disciplines, organized by
              the ideas and engineering problems they explore.
            </Text>
          </Stack>

          <div>
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="group block border-t border-border py-6 last:border-b"
              >
                <div className="grid gap-3 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:items-start md:gap-6">
                  <Text
                    size="sm"
                    muted
                    className="font-mono"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <Stack
                    gap="sm"
                    className="!space-y-2"
                  >
                    <Heading
                      as="h3"
                      className="transition-colors group-hover:text-accent"
                    >
                      {category.category}
                    </Heading>

                    <Text
                      muted
                      className="max-w-2xl leading-relaxed"
                    >
                      {category.description}
                    </Text>
                  </Stack>

                  <Text
                    size="sm"
                    muted
                    className="whitespace-nowrap md:pt-1"
                  >
                    {category.articles.length}{" "}
                    {category.articles.length === 1
                      ? "essay"
                      : "essays"}
                  </Text>
                </div>
              </Link>
            ))}
          </div>
        </Stack>
      </Section>

      {categories.map((category, index) => (
        <Section key={category.slug}>
          <div
            id={category.slug}
            className="scroll-mt-24"
          >
            <Stack gap="xl">
              <div className="grid gap-4 border-b border-border pb-8 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:items-end md:gap-6">
                <Text
                  size="sm"
                  muted
                  className="font-mono"
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>

                <Stack gap="sm">
                  <Heading as="h2">
                    {category.category}
                  </Heading>

                  <Text
                    muted
                    className="max-w-2xl leading-relaxed"
                  >
                    {category.description}
                  </Text>
                </Stack>

                <Text
                  size="sm"
                  muted
                  className="whitespace-nowrap"
                >
                  {category.articles.length}{" "}
                  {category.articles.length === 1
                    ? "essay"
                    : "essays"}
                </Text>
              </div>

              <div>
                {category.articles.map((article) => (
                  <div
                    key={article.slug}
                    className="border-b border-border py-5"
                  >
                    <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                      <Link
                        href={`/journal/${article.slug}`}
                        className="group"
                      >
                        <Text
                          as="span"
                          className="font-medium transition-colors group-hover:text-accent"
                        >
                          {article.title}
                        </Text>
                      </Link>

                      <Cluster
                        gap="sm"
                        className="text-fg-muted"
                      >
                        <Text
                          size="sm"
                          muted
                        >
                          {article.readingTimeMinutes} min
                        </Text>

                        {!article.published && (
                          <>
                            <Text
                              size="sm"
                              muted
                              aria-hidden
                            >
                              ·
                            </Text>

                            <Text
                              size="sm"
                              muted
                            >
                              Draft
                            </Text>
                          </>
                        )}
                      </Cluster>
                    </div>
                  </div>
                ))}
              </div>
            </Stack>
          </div>
        </Section>
      ))}
    </Page>
  );
}
