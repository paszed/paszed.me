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
            className="
              flex
              items-start
              gap-4
              leading-relaxed
              text-fg-secondary
            "
          >
            <span
              aria-hidden="true"
              className="
                mt-2
                size-1.5
                shrink-0
                rounded-full
                bg-success
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
