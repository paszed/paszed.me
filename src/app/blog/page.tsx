import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering articles covering developer tools, software architecture, terminal workflows, AI, and lessons learned while building software.",
};

import { Page } from "@/components/layout/page";
import {
  BlogHero,
  BlogPostList,
} from "@/features/blog";

export default function BlogPage() {
  return (
    <Page>
      <div className="space-y-20">
        <BlogHero />

        <BlogPostList />
      </div>
    </Page>
  );
}
