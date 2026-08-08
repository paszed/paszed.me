import {
  render,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { ContentIcon } from "./content-icon";

describe("ContentIcon", () => {
  it("renders article icon", () => {
    const { container } = render(
      <ContentIcon name="article" />,
    );

    expect(
      container.querySelector("svg"),
    ).toBeInTheDocument();
  });

  it("renders page icon", () => {
    const { container } = render(
      <ContentIcon name="page" />,
    );

    expect(
      container.querySelector("svg"),
    ).toBeInTheDocument();
  });

  it("renders project icon", () => {
    const { container } = render(
      <ContentIcon name="project" />,
    );

    expect(
      container.querySelector("svg"),
    ).toBeInTheDocument();
  });
});
