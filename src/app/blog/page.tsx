import type { Metadata } from "next";

import {
  Page,
  Stack,
} from "@/design-system";
import {
  BlogHero,
  BlogPostList,
} from "@/features/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering articles covering developer tools, software architecture, terminal workflows, AI, and lessons learned while building software.",
};

export default function BlogPage() {
  return (
    <Page>
      <Stack className="space-y-20">
        <BlogHero />

        <BlogPostList />
      </Stack>
    </Page>
  );
}
