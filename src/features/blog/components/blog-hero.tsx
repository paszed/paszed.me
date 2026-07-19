import { Heading } from "@/design-system";

export function BlogHero() {
  return (
    <section className="space-y-6">
      <Heading as="h1">
        Blog
      </Heading>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        A collection of engineering notes, tutorials, project write-ups, and
        lessons learned while building software.
      </p>
    </section>
  );
}
