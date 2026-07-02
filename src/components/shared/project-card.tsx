import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tags: readonly string[];
}

export function ProjectCard({
  title,
  description,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="leading-7 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
