import { Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import {
  SiDiscord,
  SiDocker,
  SiGithub,
  SiHuggingface,
  SiNpm,
  SiPypi,
  SiReddit,
  SiStackoverflow,
  SiX,
} from "react-icons/si";

interface SocialIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, IconType | typeof Mail> = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  X: SiX,
  Reddit: SiReddit,
  Discord: SiDiscord,
  Email: Mail,
  npm: SiNpm,
  PyPI: SiPypi,
  "Docker Hub": SiDocker,
  "Hugging Face": SiHuggingface,
  "Stack Overflow": SiStackoverflow,
};

const colors: Record<string, string> = {
  GitHub: "",
  LinkedIn: "group-hover:text-[#0A66C2]",
  X: "",
  Reddit: "group-hover:text-[#FF4500]",
  Discord: "group-hover:text-[#5865F2]",
  Email: "group-hover:text-green-500",
  npm: "group-hover:text-[#CB3837]",
  PyPI: "group-hover:text-[#3775A9]",
  "Docker Hub": "group-hover:text-[#2496ED]",
  "Hugging Face": "group-hover:text-[#FFD21E]",
  "Stack Overflow": "group-hover:text-[#F48024]",
};

export function SocialIcon({
  name,
  className,
}: SocialIconProps) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <Icon
      className={cn(
        "transition-colors duration-200",
        colors[name],
        className,
      )}
      aria-hidden="true"
    />
  );
}
