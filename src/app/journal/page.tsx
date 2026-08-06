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
import { getPublishedArticles } from "@/lib/journal";

export default function JournalPage() {
  const articles = getPublishedArticles();

  const categories = journalCategories.map((definition) => ({
    ...definition,
    articles: articles.filter(
      (article) =>
        article.category === definition.category,
    ),
  }));

  return (
    <Page>
      <Stack gap="2xl">
        <SectionHeader
          level={1}
          centered
          eyebrow="Engineering Journal"
          title="Journal"
          description="Essays and notes on software engineering, architecture, infrastructure, systems, AI, and the principles behind building software intended to last."
        />

        <Section>
          <Stack gap="xl">
            <Stack gap="sm">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.25em]"
              >
                Archive
              </Text>

              <Heading as="h2">
                Topics and disciplines
              </Heading>

              <Text
                muted
                className="max-w-2xl leading-relaxed"
              >
                {articles.length} essays across{" "}
                {categories.length} engineering disciplines,
                documenting ideas, decisions, and lessons from
                building software systems.
              </Text>
            </Stack>

            <div className="divide-y divide-border border-y border-border">
              {categories.map((category, index) => (
                <Link
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="
                    group
                    grid
                    gap-4
                    py-6
                    transition-colors
                    md:grid-cols-[3rem_minmax(0,1fr)_auto]
                    md:items-start
                    md:gap-6
                  "
                >
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
                  >
                    {category.articles.length}{" "}
                    {category.articles.length === 1
                      ? "essay"
                      : "essays"}
                  </Text>
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
                <SectionHeader
                  eyebrow={`Section ${String(index + 1).padStart(2, "0")}`}
                  title={category.category}
                  description={category.description}
                />

                <Stack>
                  {category.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/journal/${article.slug}`}
                      className="
                        group
                        border-b
                        border-border
                        py-5
                      "
                    >
                      <div
                        className="
                          grid
                          gap-3
                          md:grid-cols-[minmax(0,1fr)_auto]
                          md:items-baseline
                          md:gap-8
                        "
                      >
                        <Text
                          as="span"
                          className="
                            font-medium
                            transition-colors
                            group-hover:text-accent
                          "
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
            </div>
          </Section>
        ))}
      </Stack>
    </Page>
  );
}
