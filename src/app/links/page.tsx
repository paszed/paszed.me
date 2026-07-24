import type { Metadata } from "next";
import Link from "next/link";

import {
  ActionIcon,
  Card,
  Cluster,
  Icon,
  Page,
  SectionHeader,
  SocialIcon,
  Stack,
  Text,
} from "@/design-system";

import { profiles } from "@/content";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Find Edvard Pasz across GitHub, LinkedIn, Reddit, X, and other developer platforms.",
};

type Profile = (typeof profiles)[keyof typeof profiles];

const allProfiles = Object.values(profiles) as Profile[];

const featuredProfiles = allProfiles.filter(
  (profile) => profile.featured,
);

const developerProfiles = allProfiles.filter(
  (profile) =>
    profile.category === "developer" &&
    !profile.featured,
);

const socialProfiles = allProfiles.filter(
  (profile) =>
    profile.category === "social" &&
    !profile.featured,
);

interface ProfileGroupProps {
  title: string;
  profiles: readonly Profile[];
  className?: string;
}

function ProfileGroup({
  title,
  profiles,
  className,
}: ProfileGroupProps) {
  if (profiles.length === 0) {
    return null;
  }

  return (
    <Stack
      as="section"
      gap="lg"
      className={className}
    >
      <SectionHeader title={title} />

      <Stack gap="sm">
        {profiles.map((profile) => {
          const external =
            profile.href.startsWith("http");

          return (
            <Link
              key={profile.id}
              href={profile.href}
              target={external ? "_blank" : undefined}
              rel={
                external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group"
            >
              <Card
                variant="interactive"
                className="flex items-center justify-between px-6 py-4"
              >
                <Cluster gap="md">
                  <Icon className="size-11 rounded-full border border-border bg-background text-fg-muted transition-colors group-hover:text-accent">
                    <SocialIcon
                      name={profile.label}
                      className="size-5"
                    />
                  </Icon>

                  <Stack gap="sm">
                    <Text
                      as="h3"
                      className="font-semibold transition-colors group-hover:text-accent"
                    >
                      {profile.label}
                    </Text>

                    <Text
                      size="sm"
                      muted
                    >
                      {profile.description}
                    </Text>
                  </Stack>
                </Cluster>

                <ActionIcon
                  name="open"
                  className="text-fg-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </Card>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default function LinksPage() {
  return (
    <Page className="space-y-20">
      <SectionHeader
        centered
        eyebrow="Paszed"
        title="Links"
        description="Everything I'm building, sharing, and contributing to across the web."
      />

      <ProfileGroup
        title="Featured"
        profiles={featuredProfiles}
      />

      <ProfileGroup
        title="Developer"
        profiles={developerProfiles}
        className="pt-10"
      />

      <ProfileGroup
        title="Social"
        profiles={socialProfiles}
        className="pt-10"
      />
    </Page>
  );
}
