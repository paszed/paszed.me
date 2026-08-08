import type { Metadata } from "next";

import { SearchPage } from "@/features/search";
import {
  defaultLocale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const content = getDictionary(
    defaultLocale,
  );

  return {
    title: content.search.title,
    description:
      content.search.description,
  };
}

export default async function Page() {
  const content = getDictionary(
    defaultLocale,
  );

  return (
    <SearchPage
      title={content.search.title}
      description={
        content.search.description
      }
      input={content.search.input}
      empty={content.search.empty}
      categories={
        content.search.categories
      }
    />
  );
}
