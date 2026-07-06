import type { JournalEntry } from "@/types/journal";

interface ArticleHeaderProps {
  article: JournalEntry;
}

export function ArticleHeader({
  article,
}: ArticleHeaderProps) {
  return (
    <header className="mb-20 space-y-6">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
        {article.category}
      </p>

      <h1 className="font-serif text-5xl font-semibold tracking-tight text-fg lg:text-6xl">
        {article.title}
      </h1>

      <p className="max-w-2xl text-xl leading-9 text-fg-secondary">
        {article.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
        <span>{article.author}</span>

        <span>•</span>

        <span>{article.publishedAt}</span>

        <span>•</span>

        <span>{article.readingTime}</span>
      </div>
    </header>
  );
}
