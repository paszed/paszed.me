import Link from "next/link";

import {
  Card,
  Eyebrow,
  Heading,
  ListItem,
  Stack,
  Text,
} from "@/design-system";

import { highlightMatch } from "../lib/highlight-match";
import type { SearchItem } from "../types/search";

interface SearchResultProps {
  item: SearchItem;
  selected: boolean;
  query: string;
}

export function SearchResult({
  item,
  selected,
  query,
}: SearchResultProps) {
  const title = highlightMatch(
    item.title,
    query,
  );

  const description = highlightMatch(
    item.description,
    query,
  );

  return (
    <ListItem>
      <Link
        href={item.href}
        className="group block"
      >
        <Card
          variant="interactive"
          className={
            selected
              ? "border-accent bg-surface"
              : undefined
          }
        >
          <Stack gap="sm">
            <Eyebrow>{item.category}</Eyebrow>

            <Heading
              as="h3"
              className="text-lg"
            >
              {title.map((part, index) => (
                <mark
                  key={index}
                  className={
                    part.highlighted
                      ? "rounded bg-accent/15 text-accent"
                      : "bg-transparent text-inherit"
                  }
                >
                  {part.text}
                </mark>
              ))}
            </Heading>

            <Text
              size="sm"
              muted
            >
              {description.map((part, index) => (
                <mark
                  key={index}
                  className={
                    part.highlighted
                      ? "rounded bg-accent/15 text-accent"
                      : "bg-transparent text-inherit"
                  }
                >
                  {part.text}
                </mark>
              ))}
            </Text>
          </Stack>
        </Card>
      </Link>
    </ListItem>
  );
}
