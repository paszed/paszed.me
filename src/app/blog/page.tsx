import { Page } from "@/components/layout/page";
import {
  BlogHero,
  BlogPostList,
} from "@/features/blog";

export default function BlogPage() {
  return (
    <Page
      title="Blog"
      description="Engineering articles, tutorials, and development notes."
    >
      <div className="space-y-20">
        <BlogHero />

        <BlogPostList />
      </div>
    </Page>
  );
}
