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
    <Section className="relative isolate overflow-hidden pt-12 pb-24 lg:min-h-[calc(100vh-4.5rem)] lg:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.22),transparent_42%)]"
      />

      <ThemedLion />

      <Container className="relative z-10">
        <Grid
          gap="lg"
          className="items-center lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <Stack
            gap="xl"
            className="max-w-2xl"
          >
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

            <Text
              size="lead"
              muted
              className="max-w-2xl font-serif leading-10"
            >
              {home.hero.description}
            </Text>

            <Cluster
              gap="lg"
              className="pt-2"
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
          </Stack>

          <div className="relative flex justify-center lg:justify-end lg:pl-12">
            <div
              aria-hidden
              className="h-[22rem] w-[19rem] rounded-sm bg-muted lg:w-[22rem]"
            />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
