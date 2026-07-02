import { H1 } from "@/components/ui/heading";

export function BlogHero() {
  return (
    <section className="space-y-6">
      <H1>Blog</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {
          "A collection of engineering notes, tutorials, project write-ups, and lessons learned while building software."
        }
      </p>
    </section>
  );
}
