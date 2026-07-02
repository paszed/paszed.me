import { H2 } from "@/components/ui/heading";

interface ProjectOverviewProps {
  overview: string;
}

export function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <section className="space-y-6">
      <H2>Overview</H2>

      <p className="leading-8 text-neutral-600 dark:text-neutral-400">
        {overview}
      </p>
    </section>
  );
}
