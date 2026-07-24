import type { Project } from "@/types/project";

/**
 * A project that has reached the archived lifecycle state.
 */
export type ArchivedProject = Project & {
  status: "archived";
};
