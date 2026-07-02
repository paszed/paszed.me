import { notFound } from "next/navigation";

import { Page } from "@/components/layout/page";
import { getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
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
      <div className="space-y-8">
        <p>{project.description}</p>

        <div>
          <h2 className="mb-2 text-lg font-semibold">
            Technologies
          </h2>

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  );
}
