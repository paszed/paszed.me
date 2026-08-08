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
  labels: {
    previous: string;
    next: string;
  };
}

export function ArticleNavigation({
  previous,
  next,
  labels,
}: ArticleNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <Stack>
      <Grid>
        <Stack className="text-left">
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
                  <Label>
                    {labels.previous}
                  </Label>

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
                  <Label>
                    {labels.next}
                  </Label>

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
