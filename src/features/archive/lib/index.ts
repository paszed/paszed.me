import { getProjects } from "@/lib/projects";

import type { ArchivedProject } from "../types";

/**
 * Returns projects that have reached the archived lifecycle state.
 */
export function getArchivedProjects(): readonly ArchivedProject[] {
  return getProjects().filter(
    (project): project is ArchivedProject =>
      project.status === "archived",
  );
}
