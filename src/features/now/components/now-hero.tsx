import { H1 } from "@/design-system";

export function NowHero() {
  return (
    <section className="space-y-6">
      <H1>Now</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        This page captures what I&rsquo;m currently focused on. Inspired by
        Derek Sivers&rsquo; now page, it&rsquo;s a snapshot of what I&rsquo;m
        building, learning, and exploring at this moment.
      </p>
    </section>
  );
}
