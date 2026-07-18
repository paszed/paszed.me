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

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  const sections = [
    {
      title: "Problem",
      items: project.problem,
    },
    {
      title: "Goals",
      items: project.goals,
    },
    {
      title: "Features",
      items: project.features,
    },
    {
      title: "Architecture",
      items: project.architecture,
    },
    {
      title: "Engineering Decisions",
      items: project.engineering,
    },
    {
      title: "Challenges",
      items: project.challenges,
    },
    {
      title: "Lessons Learned",
      items: project.lessons,
    },
  ];

  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Page>
        <div className="space-y-20">
          <ProjectHero project={project} />

          {project.gallery.length > 0 && (
            <ProjectGallery project={project} />
          )}

          <ProjectOverview overview={project.overview} />

          {sections.map(
            ({ title, items }) =>
              items.length > 0 && (
                <ProjectListSection
                  key={title}
                  title={title}
                  items={items}
                />
              ),
          )}

          <ProjectTech project={project} />

          {project.roadmap.length > 0 && (
            <ProjectRoadmap project={project} />
          )}

          {project.links.length > 0 && (
            <ProjectLinks project={project} />
          )}
        </div>
      </Page>
    </>
  );
}
