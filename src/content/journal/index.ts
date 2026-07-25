import ai from "./ai";
import architecture from "./architecture";
import career from "./career";
import design from "./design";
import development from "./development";
import distributedSystems from "./distributed-systems";
import engineering from "./engineering";
import engineeringLeadership from "./engineering-leadership";
import infrastructure from "./infrastructure";
import philosophy from "./philosophy";
import platformEngineering from "./platform-engineering";
import productEngineering from "./product-engineering";
import systems from "./systems";

export const journal = [
  ...engineering,
  ...architecture,
  ...development,
  ...design,
  ...infrastructure,
  ...distributedSystems,
  ...platformEngineering,
  ...productEngineering,
  ...engineeringLeadership,
  ...ai,
  ...systems,
  ...philosophy,
  ...career,
];

export { journalCategories } from "./categories";
