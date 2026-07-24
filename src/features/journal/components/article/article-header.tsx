import {
  Cluster,
  Eyebrow,
  Heading,
  Stack,
  Text,
} from "@/design-system";
import {
  formatDate,
  formatReadingTime,
} from "@/lib";
import type { JournalEntry } from "@/types/journal";

interface ArticleHeaderProps {
  article: JournalEntry;
}

export function ArticleHeader({
  article,
}: ArticleHeaderProps) {
  return (
    <Stack
      as="header"
      gap="md"
      className="mb-20"
    >
      <Eyebrow>{article.category}</Eyebrow>

      <Heading as="h1">
        {article.title}
      </Heading>

      <Text
        size="lg"
        muted
        className="max-w-2xl"
      >
        {article.description}
      </Text>

      <Cluster
        gap="sm"
        className="text-sm text-fg-muted"
      >
        <Text
          as="span"
          size="sm"
        >
          {article.author}
        </Text>

        <Text
          as="span"
          size="sm"
          aria-hidden
        >
          •
        </Text>

        <Text
          as="span"
          size="sm"
        >
          {article.publishedAt
            ? formatDate(article.publishedAt)
            : "Draft"}
        </Text>

        <Text
          as="span"
          size="sm"
          aria-hidden
        >
          •
        </Text>

        <Text
          as="span"
          size="sm"
        >
          {formatReadingTime(
            article.readingTimeMinutes,
          )}
        </Text>
      </Cluster>
    </Stack>
  );
}
