import * as utils from ".";

import { describe, expect, it } from "vitest";

describe("utils exports", () => {
  it("exports utilities", () => {
    expect(utils).toBeDefined();
  });
});
