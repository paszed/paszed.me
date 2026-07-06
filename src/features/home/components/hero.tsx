import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ThemedLion } from "@/components/theme/themed-lion";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { home } from "@/content";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-32 lg:min-h-[calc(100vh-4.5rem)] lg:py-0">
      <>
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.22),transparent_42%)]"
        />

        <ThemedLion />
      </>

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl space-y-10">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.4em] text-accent">
              {home.hero.eyebrow}
            </p>

            <div className="space-y-6">
              <H1>{home.hero.title}</H1>

              <p className="max-w-xl font-sans text-xl leading-9 text-fg-secondary lg:text-2xl">
                {home.hero.subtitle}
              </p>
            </div>

            <p className="max-w-2xl font-serif text-xl leading-10 text-fg-secondary">
              {home.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link href={home.hero.primaryCta.href}>
                <Button>{home.hero.primaryCta.label}</Button>
              </Link>

              <Link
                href={home.hero.secondaryCta.href}
                className="font-sans text-sm font-medium tracking-[0.015em] text-fg transition-colors hover:text-accent"
              >
                {home.hero.secondaryCta.label} →
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pl-12">
            <div className="border border-border bg-card p-3">
              <div className="relative aspect-[4/5] w-[19rem] overflow-hidden rounded-sm lg:w-[22rem]">
                <Image
                  src="/images/profile.jpg"
                  alt={site.owner}
                  fill
                  priority
                  sizes="(max-width: 1024px) 304px, 352px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
