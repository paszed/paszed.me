import Link from "next/link";

import {
  Card,
  Grid,
  Heading,
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
    <Stack
      as="aside"
      gap="lg"
      className="mt-24 border-t border-border pt-12"
    >
      <Heading as="h2">
        Related Articles
      </Heading>

      <Grid gap="lg">
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

                <Heading
                  as="h3"
                  className="text-2xl transition-colors group-hover:text-accent"
                >
                  {article.title}
                </Heading>

                <Text muted>
                  {article.description}
                </Text>
              </Stack>
            </Card>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
}
