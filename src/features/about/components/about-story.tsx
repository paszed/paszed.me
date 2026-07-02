import { H2 } from "@/components/ui/heading";
import { about } from "@/content/about";

export function AboutStory() {
  return (
    <section className="space-y-6">
      <H2>My Story</H2>

      <div className="space-y-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        {about.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
