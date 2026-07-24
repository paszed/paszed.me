import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SocialIcon } from "./social-icon";

describe("SocialIcon", () => {
  it("renders a known social icon", () => {
    const { container } = render(
      <SocialIcon name="GitHub" />,
    );

    expect(
      container.querySelector("svg"),
    ).toBeInTheDocument();
  });

  it("returns null for an unknown icon", () => {
    const { container } = render(
      <SocialIcon name="Unknown" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("applies custom class names", () => {
    const { container } = render(
      <SocialIcon
        name="GitHub"
        className="custom-class"
      />,
    );

    expect(
      container.querySelector("svg"),
    ).toHaveClass("custom-class");
  });

  it("applies the configured social color class", () => {
    const { container } = render(
      <SocialIcon name="LinkedIn" />,
    );

    expect(
      container.querySelector("svg"),
    ).toHaveClass(
      "group-hover:text-[#0A66C2]",
    );
  });
});
