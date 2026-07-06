import type { Metadata } from "next";

import { SearchPage } from "@/features/search";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Search",
  description:
    "Search projects, engineering journal articles, and pages on paszed.me.",
  path: "/search",
});

export default function Page() {
  return <SearchPage />;
}
