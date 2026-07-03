import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/icons/social-icon";
import { Page } from "@/components/layout/page";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { profiles } from "@/content/profiles";
import { cn } from "@/lib/cn";

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
    <section className={cn("space-y-8", className)}>
      <SectionHeader title={title} />

      <div className="space-y-4">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
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
            <Card className="group flex items-center justify-between px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-fg-muted transition-colors group-hover:text-accent">
                  <SocialIcon
                    name={profile.label}
                    className="h-5 w-5"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-fg transition-colors group-hover:text-accent">
                    {profile.label}
                  </h3>

                  <p className="text-sm text-fg-secondary">
                    {profile.description}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-fg-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
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
