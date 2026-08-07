import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticleContent,
  ArticleHeader,
  ArticleNavigation,
  ArticleRelated,
  ReadingProgress,
} from "@/features/journal";
import type { Locale } from "@/i18n/config";
import {
  getPublishedArticle,
  getNextArticle,
  getPreviousArticle,
  getRelatedArticles,
} from "@/lib/journal";
import {
  JsonLd,
  createArticleSchema,
  createBreadcrumbSchema,
  createMetadata,
} from "@/lib/seo";

interface Props {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const article = getPublishedArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/${locale}/journal/${article.slug}`,
    type: "article",
  });
}

export default async function JournalArticlePage({
  params,
}: Props) {
  const { locale, slug } = await params;

  const article = getPublishedArticle(slug);

  if (!article) {
    notFound();
  }

  const previous = getPreviousArticle(slug);
  const next = getNextArticle(slug);
  const related = getRelatedArticles(slug);

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          {
            name: "Home",
            path: `/${locale}`,
          },
          {
            name: "Journal",
            path: `/${locale}/journal`,
          },
          {
            name: article.title,
            path: `/${locale}/journal/${article.slug}`,
          },
        ])}
      />

      <JsonLd
        data={createArticleSchema(article)}
      />

      <ReadingProgress />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <ArticleHeader article={article} />

        <ArticleContent article={article} />

        <ArticleRelated articles={related} />

        <ArticleNavigation
          previous={previous}
          next={next}
        />
      </article>
    </>
  );
}
