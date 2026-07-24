import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Center,
  Cluster,
  Container,
  Eyebrow,
  Grid,
  Heading,
  Section,
  Stack,
  Surface,
  Text,
  TextLink,
} from "@/design-system";

import { ThemedLion } from "@/brand";
import { home } from "@/content";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-24 lg:min-h-[calc(100vh-4.5rem)] lg:py-0">
      <Surface
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(90,33,79,0.22),transparent_42%)]"
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

          <Center className="lg:justify-end lg:pl-12">
            <Surface className="border p-3 shadow-sm">
              <Surface className="relative aspect-[4/5] w-[19rem] overflow-hidden rounded-sm lg:w-[22rem]">
                <Image
                  src="/images/profile.jpg"
                  alt={site.owner}
                  fill
                  priority
                  sizes="(max-width: 1024px) 304px, 352px"
                  className="object-cover"
                />
              </Surface>
            </Surface>
          </Center>
        </Grid>
      </Container>
    </Section>
  );
}
