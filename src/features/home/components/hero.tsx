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
    <Section className="relative overflow-hidden py-32 lg:py-40">
      <ThemedLion />

      <Container className="relative z-10">
        <div className="grid items-center gap-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-10">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-green-500">
              {home.hero.eyebrow}
            </p>

            <H1>
              {home.hero.title}
              <br />
              {home.hero.subtitle}
            </H1>

            <p className="max-w-xl text-xl leading-9 text-neutral-600 dark:text-neutral-400">
              {home.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link href={home.hero.primaryCta.href}>
                <Button>{home.hero.primaryCta.label}</Button>
              </Link>

              <Link
                href={home.hero.secondaryCta.href}
                className="text-sm font-medium transition-colors hover:text-green-500"
              >
                {home.hero.secondaryCta.label} →
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[24rem] w-[24rem] overflow-hidden rounded-full border border-green-500/20 shadow-[0_20px_80px_rgba(0,0,0,0.25)] lg:h-[26rem] lg:w-[26rem]">
              <Image
                src="/images/profile.jpg"
                alt={site.owner}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 416px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
