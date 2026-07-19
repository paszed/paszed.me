import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Container,
  Eyebrow,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
} from "@/design-system";

import { ThemedLion } from "@/components/theme/themed-lion";
import { home } from "@/content";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-24 lg:min-h-[calc(100vh-4.5rem)] lg:py-0">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.22),transparent_42%)]"
      />

      <ThemedLion />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <Stack gap="xl" className="max-w-2xl">
            <Eyebrow>{home.hero.eyebrow}</Eyebrow>

            <Stack gap="md">

              <Heading as="h1">
  {home.hero.title}
</Heading>
              <Text
                size="lead"
                muted
                className="max-w-xl"
              >
                {home.hero.subtitle}
              </Text>
            </Stack>

            <p className="max-w-2xl font-serif text-xl leading-10 text-fg-secondary">
              {home.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link href={home.hero.primaryCta.href}>
                <Button>{home.hero.primaryCta.label}</Button>
              </Link>

              <TextLink href={home.hero.secondaryCta.href}>
                {home.hero.secondaryCta.label} →
              </TextLink>
            </div>
          </Stack>

          <div className="flex justify-center lg:justify-end lg:pl-12">
            <div className="border border-border bg-card p-3 shadow-sm">
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
