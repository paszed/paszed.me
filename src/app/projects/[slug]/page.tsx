import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Page } from "@/components/layout/page";
import { JsonLd } from "@/components/seo/json-ld";
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
import {
  createBreadcrumbSchema,
  createMetadata,
  createProjectSchema,
} from "@/lib/seo";

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

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
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

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: project.title,
      path: `/projects/${project.slug}`,
    },
  ]);

  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Page>
        <div className="space-y-16">
          <ProjectHero project={project} />

          <ProjectGallery project={project} />


        <ProjectOverview overview={project.overview} />

<ProjectListSection
  title="Problem"
  items={project.problem}
/>

<ProjectListSection
  title="Goals"
  items={project.goals}
/>

<ProjectListSection
  title="Architecture"
  items={project.architecture}
/>

<ProjectListSection
  title="Features"
  items={project.features}
/>

<ProjectListSection
  title="Engineering Decisions"
  items={project.engineering}
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
