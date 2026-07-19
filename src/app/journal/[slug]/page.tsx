import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Prose,
} from "@/design-system";
import {
  ArticleHeader,
  ArticleNavigation,
  ArticleRelated,
  ReadingProgress,
} from "@/components/article";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getArticle,
  getNextArticle,
  getPreviousArticle,
  getRelatedArticles,
} from "@/lib/journal";
import {
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

  const article = getArticle(slug);

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

  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const previous = getPreviousArticle(slug);
  const next = getNextArticle(slug);
  const related = getRelatedArticles(slug);

  const articleSchema = createArticleSchema(article);

  const breadcrumbSchema = createBreadcrumbSchema([
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
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <ReadingProgress />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <ArticleHeader article={article} />

        <Prose>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </Prose>

        <ArticleRelated articles={related} />

        <ArticleNavigation
          previous={previous}
          next={next}
        />
      </article>
    </>
  );
}
