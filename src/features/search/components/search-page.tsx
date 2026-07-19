import {
  H1,
  Page,
} from "@/design-system";

import { SearchBox } from "./search-box";

export function SearchPage() {
  return (
    <Page>
      <div className="mx-auto max-w-3xl py-24">
        <H1>Search</H1>

        <p className="mt-6 text-fg-secondary">
          Search across projects, journal articles, and pages.
        </p>

        <div className="mt-12">
          <SearchBox />
        </div>
      </div>
    </Page>
  );
}
