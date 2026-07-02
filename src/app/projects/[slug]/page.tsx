import { notFound } from "next/navigation";

import { Page } from "@/components/layout/page";
import {
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

        <ProjectLinks project={project} />

        <ProjectTech project={project} />
      </div>
    </Page>
  );
}
