import * as content from ".";

import { describe, expect, it } from "vitest";

describe("content exports", () => {
  it("exports modules", () => {
    expect(content).toBeDefined();
  });
});
