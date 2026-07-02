import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Page } from "@/components/layout/page";
import { SocialIcon } from "@/components/icons/social-icon";
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

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
            className="group flex items-center justify-between rounded-xl px-4 py-5 transition-all duration-200 hover:bg-white hover:shadow-sm dark:hover:bg-neutral-950"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 text-neutral-500 transition-colors group-hover:text-green-500 dark:text-neutral-400">
                <SocialIcon
                  name={profile.label}
                  className="h-5 w-5"
                />
              </div>

              <div>
                <h3 className="font-semibold transition-colors group-hover:text-green-500">
                  {profile.label}
                </h3>

                <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {profile.description}
                </p>
              </div>
            </div>

            <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-500" />
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
