import { ProjectSection } from "./project-section";

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
            className="flex gap-3 text-fg-secondary"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-success" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
