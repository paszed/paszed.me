import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticleContent,
  ArticleHeader,
  ArticleNavigation,
  ArticleRelated,
  ReadingProgress,
} from "@/features/journal";
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
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getPublishedArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/journal/${article.slug}`,
    type: "article",
  });
}

export default async function JournalArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = getPublishedArticle(slug);

  if (!article) {
    notFound();
  }

  const previous = getPreviousArticle(slug);
  const next = getNextArticle(slug);
  const related = getRelatedArticles(slug);

  return (
    <>
      <JsonLd data={createArticleSchema(article)} />

      <JsonLd
        data={createBreadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Journal",
            path: "/journal",
          },
          {
            name: article.title,
            path: `/journal/${article.slug}`,
          },
        ])}
      />

      <ReadingProgress />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <ArticleHeader article={article} />

        <ArticleContent article={article} />

        <ArticleRelated articles={article ? related : []} />

        <ArticleNavigation
          previous={previous}
          next={next}
        />
      </article>
    </>
  );
}
