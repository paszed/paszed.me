import Link from "next/link";

import type { JournalEntry } from "@/types/journal";

interface ArticleRelatedProps {
  articles: JournalEntry[];
}

export function ArticleRelated({
  articles,
}: ArticleRelatedProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <aside className="mt-24 border-t border-border pt-12">
      <div className="space-y-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-fg">
          Related Articles
        </h2>

        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-fg-muted">
                {article.category}
              </p>

              <h3 className="font-serif text-2xl font-semibold text-fg group-hover:text-accent">
                {article.title}
              </h3>

              <p className="mt-3 text-fg-secondary">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
