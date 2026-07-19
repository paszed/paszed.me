import Link from "next/link";

import {
  Card,
  H2,
  Label,
  Stack,
  Text,
} from "@/design-system";
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
      <Stack gap="lg">
        <H2>Related Articles</H2>

        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group block"
            >
              <Card
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <Label>{article.category}</Label>

                  <h3 className="font-serif text-2xl font-semibold text-fg transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>

                  <Text muted>
                    {article.description}
                  </Text>
                </Stack>
              </Card>
            </Link>
          ))}
        </div>
      </Stack>
    </aside>
  );
}
