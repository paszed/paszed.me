import { devToolbox } from "./dev-toolbox";
import { paszedMe } from "./paszed-me";

export { bootstrapper } from "./bootstrapper";

export const projects = [
  bootstrapper,
  devToolbox,
  paszedMe,
] as const;
