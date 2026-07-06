import Link from "next/link";

import {
  Card,
  Label,
  Stack,
} from "@/components/ui";
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
    <nav className="mt-24 border-t border-border pt-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
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

                  <h3 className="font-serif text-xl font-semibold text-fg transition-colors group-hover:text-accent">
                    {previous.title}
                  </h3>
                </Stack>
              </Card>
            </Link>
          )}
        </div>

        <div className="text-left md:text-right">
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

                  <h3 className="font-serif text-xl font-semibold text-fg transition-colors group-hover:text-accent">
                    {next.title}
                  </h3>
                </Stack>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
