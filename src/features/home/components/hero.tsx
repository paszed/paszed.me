import Link from "next/link";

import { ThemedLion } from "@/brand";
import { home } from "@/content";
import {
  Button,
  Cluster,
  Container,
  Eyebrow,
  Grid,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
} from "@/design-system";

export function Hero() {
  return (
    <Section className="relative isolate overflow-hidden pt-10 pb-20 sm:pt-16 lg:min-h-[calc(100vh-4.5rem)] lg:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.22),transparent_42%)]"
      />

      <ThemedLion />

      <Container className="relative z-10">
        <Grid
          gap="lg"
          className="items-center lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.1fr_0.9fr]"
        >
          <Stack
            gap="lg"
            className="max-w-3xl"
          >
            <Eyebrow>
              {home.hero.eyebrow}
            </Eyebrow>

            <Stack gap="md">
              <Heading as="h1">
                {home.hero.title}
              </Heading>

              <Text
                size="lead"
                muted
                className="max-w-2xl"
              >
                {home.hero.subtitle}
              </Text>
            </Stack>

            <Cluster
              gap="lg"
              className="flex-wrap pt-2"
            >
              <Link href={home.hero.primaryCta.href}>
                <Button>
                  {home.hero.primaryCta.label}
                </Button>
              </Link>

              <TextLink href={home.hero.secondaryCta.href}>
                {home.hero.secondaryCta.label} →
              </TextLink>
            </Cluster>

            <Text
              size="sm"
              muted
              className="max-w-xl pt-4"
            >
              {home.hero.description}
            </Text>
          </Stack>

          <div className="hidden lg:flex lg:justify-end">
            <div
              aria-hidden
              className="relative h-[28rem] w-[24rem]"
            >
              <div className="absolute inset-0 rounded-2xl bg-muted" />

              <div className="absolute inset-6 rounded-xl border border-border" />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
