import type { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </section>
  );
}
