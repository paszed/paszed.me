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
import {
  defaultLocale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const content = getDictionary(
    defaultLocale,
  );

  return {
    title: content.links.title,
    description:
      content.links.description,
  };
}

type Profile =
  (typeof profiles)[keyof typeof profiles];

const allProfiles = Object.values(
  profiles,
) as Profile[];

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
    <Stack gap="md" className={className}>
      <Text
        size="sm"
        className="
          font-medium
          uppercase
          tracking-[0.2em]
          text-fg-muted
        "
      >
        {title}
      </Text>

      <Stack gap="sm">
        {profiles.map((profile) => {
          const external =
            profile.href.startsWith("http");

          return (
            <Link
              key={profile.id}
              href={profile.href}
              target={
                external
                  ? "_blank"
                  : undefined
              }
              rel={
                external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group"
            >
              <Card
                variant="interactive"
                className="
                  flex
                  items-center
                  justify-between
                  px-6
                  py-4
                "
              >
                <Cluster gap="md">
                  <Icon
                    className="
                      size-11
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-fg-muted
                      transition-colors
                      group-hover:text-accent
                    "
                  >
                    <SocialIcon
                      name={profile.label}
                      className="size-5"
                    />
                  </Icon>

                  <Stack gap="sm">
                    <Text
                      as="h3"
                      className="
                        font-semibold
                        transition-colors
                        group-hover:text-accent
                      "
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
                  className="
                    text-fg-muted
                    transition-all
                    duration-200
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-accent
                  "
                />
              </Card>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default async function LinksPage() {
  const content = getDictionary(
    defaultLocale,
  );

  return (
    <Page>
      <Stack gap="xl">
        <SectionHeader
          eyebrow="Paszed"
          title={content.links.title}
          description={
            content.links.description
          }
        />

        <ProfileGroup
          title={
            content.links.sections.featured
          }
          profiles={featuredProfiles}
        />

        <ProfileGroup
          title={
            content.links.sections.developer
          }
          profiles={developerProfiles}
          className="pt-10"
        />

        <ProfileGroup
          title={
            content.links.sections.social
          }
          profiles={socialProfiles}
          className="pt-10"
        />
      </Stack>
    </Page>
  );
}
