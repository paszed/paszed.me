import Link from "next/link";

import {
  Card,
  Grid,
  Heading,
  Label,
  Stack,
} from "@/design-system";
import type { JournalEntry } from "@/types/journal";

interface ArticleNavigationProps {
  previous?: JournalEntry;
  next?: JournalEntry;
}

export function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <Stack
      as="nav"
      className="mt-24 border-t border-border pt-10"
    >
      <Grid
        gap="lg"
        className="md:grid-cols-2"
      >
        <Stack>
          {previous && (
            <Link
              href={`/journal/${previous.slug}`}
              className="group block"
            >
              <Card
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <Label>Previous</Label>

                  <Heading
                    as="h3"
                    className="text-xl transition-colors group-hover:text-accent"
                  >
                    {previous.title}
                  </Heading>
                </Stack>
              </Card>
            </Link>
          )}
        </Stack>

        <Stack className="text-left md:text-right">
          {next && (
            <Link
              href={`/journal/${next.slug}`}
              className="group block"
            >
              <Card
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <Label>Next</Label>

                  <Heading
                    as="h3"
                    className="text-xl transition-colors group-hover:text-accent"
                  >
                    {next.title}
                  </Heading>
                </Stack>
              </Card>
            </Link>
          )}
        </Stack>
      </Grid>
    </Stack>
  );
}
