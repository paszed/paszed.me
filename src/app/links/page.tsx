import Link from "next/link";

import { Page } from "@/components/layout/page";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { profiles } from "@/content/profiles";

type Profile = (typeof profiles)[keyof typeof profiles];

const allProfiles = Object.values(profiles) as Profile[];

const featuredProfiles = allProfiles.filter(
  (profile) => profile.featured,
);

const developerProfiles = allProfiles.filter(
  (profile) => profile.category === "developer",
);

const socialProfiles = allProfiles.filter(
  (profile) => profile.category === "social",
);

const contactProfiles = allProfiles.filter(
  (profile) => profile.category === "contact",
);

interface ProfileGroupProps {
  title: string;
  profiles: readonly Profile[];
}

function ProfileGroup({
  title,
  profiles,
}: ProfileGroupProps) {
  return (
    <section className="space-y-6">
      <SectionHeader title={title} />

      <div className="grid gap-4">
        {profiles.map((profile) => (
          <Link
            key={profile.label}
            href={profile.href}
            target={
              profile.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              profile.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
          >
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  {profile.label}
                </h3>

                <p className="leading-7 text-neutral-600 dark:text-neutral-400">
                  {profile.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function LinksPage() {
  return (
    <Page className="space-y-16">
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
      />

      <ProfileGroup
        title="Social"
        profiles={socialProfiles}
      />

      <ProfileGroup
        title="Contact"
        profiles={contactProfiles}
      />
    </Page>
  );
}
