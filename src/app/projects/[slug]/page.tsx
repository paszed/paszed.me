import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Page } from "@/components/layout/page";
import {
  ProjectContent,
  ProjectGallery,
  ProjectHero,
  ProjectLinks,
  ProjectTech,
} from "@/features/projects";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Page
      title={project.title}
      description={project.summary}
    >
      <div className="space-y-16">
        <ProjectHero project={project} />

        <ProjectGallery project={project} />

        <ProjectContent project={project} />

        <ProjectTech project={project} />

        <ProjectLinks project={project} />
      </div>
    </Page>
  );
}
