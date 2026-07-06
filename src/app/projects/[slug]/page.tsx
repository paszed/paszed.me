import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { Page } from "@/components/layout/page";
import {
  ProjectGallery,
  ProjectHero,
  ProjectLinks,
  ProjectListSection,
  ProjectOverview,
  ProjectRoadmap,
  ProjectTech,
} from "@/features/projects";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";
import { createProjectSchema } from "@/lib/seo";

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

  const projectSchema = createProjectSchema(project);

  return (
    <>
      <JsonLd data={projectSchema} />

      <Page>
        <div className="space-y-16">
          <ProjectHero project={project} />

          <ProjectGallery project={project} />

          <ProjectOverview overview={project.overview} />

          <ProjectListSection
            title="Architecture"
            items={project.architecture}
          />

          <ProjectListSection
            title="Challenges"
            items={project.challenges}
          />

          <ProjectListSection
            title="Lessons Learned"
            items={project.lessons}
          />

          <ProjectRoadmap project={project} />

          <ProjectTech project={project} />

          <ProjectLinks project={project} />
        </div>
      </Page>
    </>
  );
}
