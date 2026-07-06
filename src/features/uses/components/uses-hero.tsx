import { H1 } from "@/components/ui/heading";
import { uses } from "@/content";

export function UsesHero() {
  return (
    <section className="space-y-6">
      <H1>Uses</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {uses.description}
      </p>
    </section>
  );
}
