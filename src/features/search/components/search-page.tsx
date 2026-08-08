import {
  Measure,
  Page,
  Stack,
  Text,
} from "@/design-system";

import { SearchBox } from "./search-box";

interface SearchPageProps {
  title: string;
  description: string;

  input: {
    placeholder: string;
    label: string;
  };

  empty: {
    title: string;
    description: string;
  };

  categories: {
    Project: string;
    Article: string;
    Page: string;
  };
}

export function SearchPage({
  title,
  description,
  input,
  empty,
  categories,
}: SearchPageProps) {
  return (
    <Measure size="3xl">
      <Page>
        <Stack gap="xl">
          <Stack gap="sm">
            <Text
              as="h1"
              className="text-4xl font-semibold"
            >
              {title}
            </Text>

            <Text muted>
              {description}
            </Text>
          </Stack>

          <SearchBox
            input={input}
            empty={empty}
            categories={categories}
          />
        </Stack>
      </Page>
    </Measure>
  );
}
