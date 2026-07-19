import {
  Heading,
  Page,
} from "@/design-system";

import { SearchBox } from "./search-box";

export function SearchPage() {
  return (
    <Page>
      <div className="mx-auto max-w-3xl py-24">
        <header className="space-y-6">
          <Heading as="h1">Search</Heading>

          <p className="text-fg-secondary">
            Search across projects, journal articles, and pages.
          </p>
        </header>

        <div className="mt-12">
          <SearchBox />
        </div>
      </div>
    </Page>
  );
}
