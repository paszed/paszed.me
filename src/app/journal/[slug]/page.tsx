import { notFound } from "next/navigation";

import { getArticle } from "@/lib/journal";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JournalArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-8 py-24">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          {article.category}
        </p>

        <h1 className="font-serif text-5xl font-semibold tracking-tight text-fg">
          {article.title}
        </h1>

        <p className="text-lg leading-8 text-fg-secondary">
          {article.description}
        </p>

        <div className="flex gap-4 text-sm text-fg-muted">
          <span>{article.publishedAt}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>
      </header>

      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="font-serif leading-8 text-fg-secondary">
          Article content coming soon.
        </p>
      </div>
    </article>
  );
}
