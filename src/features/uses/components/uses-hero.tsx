import { Heading } from "@/design-system";
import { uses } from "@/content";

export function UsesHero() {
  return (
    <section className="space-y-6">
      <Heading as="h1">Uses</Heading>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {uses.description}
      </p>
    </section>
  );
}
