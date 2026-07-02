import {
  Box,
  Boxes,
  Globe,
  Mail,
  Package,
  type LucideIcon,
} from "lucide-react";

interface SocialIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, LucideIcon> = {
  GitHub: Globe,
  LinkedIn: Globe,
  X: Globe,
  Discord: Globe,
  Email: Mail,
  npm: Package,
  PyPI: Boxes,
  "Docker Hub": Box,
  "Hugging Face": Globe,
  "Stack Overflow": Globe,
};

export function SocialIcon({
  name,
  className,
}: SocialIconProps) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
}
