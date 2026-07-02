import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ThemedLion } from "@/components/theme/themed-lion";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { home } from "@/content/home";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-32">
      <ThemedLion />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl space-y-8">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
              {home.hero.eyebrow}
            </p>

            <H1>
              {home.hero.title}
              <br />
              {home.hero.subtitle}
            </H1>

            <p className="text-xl leading-9 text-fg-secondary">
              {home.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link href={home.hero.primaryCta.href}>
                <Button>{home.hero.primaryCta.label}</Button>
              </Link>

              <Link
                href={home.hero.secondaryCta.href}
                className="text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {home.hero.secondaryCta.label} →
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-full border border-border bg-card p-2 shadow-2xl">
              <div className="relative h-[20rem] w-[20rem] overflow-hidden rounded-full lg:h-[22rem] lg:w-[22rem]">
                <Image
                  src="/images/profile.jpg"
                  alt={site.owner}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 352px"
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
