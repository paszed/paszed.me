import { agentNetwork } from "./agent-network";
import { bootstrapper } from "./bootstrapper";
import { cli } from "./cli";
import { contentEngine } from "./content-engine";
import { dataPlatform } from "./data-platform";
import { designSystem } from "./design-system";
import { dotfiles } from "./dotfiles";
import { engineering } from "./engineering";
import { eventPlatform } from "./event-platform";
import { identity } from "./identity";
import { observability } from "./observability";
import { paszedMe } from "./paszed-me";
import { search } from "./search";
import { testkit } from "./testkit";
import { trustPlatform } from "./trust-platform";

export { agentNetwork } from "./agent-network";
export { bootstrapper } from "./bootstrapper";
export { cli } from "./cli";
export { contentEngine } from "./content-engine";
export { dataPlatform } from "./data-platform";
export { designSystem } from "./design-system";
export { dotfiles } from "./dotfiles";
export { engineering } from "./engineering";
export { eventPlatform } from "./event-platform";
export { identity } from "./identity";
export { observability } from "./observability";
export { paszedMe } from "./paszed-me";
export { search } from "./search";
export { testkit } from "./testkit";
export { trustPlatform } from "./trust-platform";

export const projects = [
  agentNetwork,
  bootstrapper,
  cli,
  contentEngine,
  dataPlatform,
  designSystem,
  dotfiles,
  engineering,
  eventPlatform,
  identity,
  observability,
  paszedMe,
  search,
  testkit,
  trustPlatform,
] as const;
