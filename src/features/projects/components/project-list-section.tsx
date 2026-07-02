import { ProjectSection } from "@/features/projects";

interface ProjectListSectionProps {
  title: string;
  items: readonly string[];
}

export function ProjectListSection({
  title,
  items,
}: ProjectListSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={title}>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-neutral-600 dark:text-neutral-400"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
