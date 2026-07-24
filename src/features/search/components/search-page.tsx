import {
  Heading,
  Measure,
  Page,
  Stack,
  Text,
} from "@/design-system";

import { SearchBox } from "./search-box";

export function SearchPage() {
  return (
    <Page>
      <Measure size="3xl">
        <Stack gap="2xl">
          <Stack gap="md">
            <Heading as="h1">Search</Heading>

            <Text muted>
              Search across projects, journal articles, and pages.
            </Text>
          </Stack>

          <SearchBox />
        </Stack>
      </Measure>
    </Page>
  );
}
