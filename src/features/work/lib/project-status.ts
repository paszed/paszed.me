import type { Project } from "@/types/project";

type ProjectStatus = Project["status"];

export interface ProjectStatusConfig {
  label: string;
  tone:
    | "info"
    | "warning"
    | "success"
    | "neutral";
}

export const PROJECT_STATUS: Record<
  ProjectStatus,
  ProjectStatusConfig
> = {
  research: {
    label: "Research",
    tone: "info",
  },

  building: {
    label: "Building",
    tone: "warning",
  },

  production: {
    label: "Production",
    tone: "success",
  },

  archived: {
    label: "Archived",
    tone: "neutral",
  },
};
