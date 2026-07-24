import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { ImageUpload } from "./image-upload";

describe("ImageUpload", () => {
  const createObjectURL = vi.fn();
  const revokeObjectURL = vi.fn();

  beforeEach(() => {
    createObjectURL.mockReset();
    revokeObjectURL.mockReset();

    vi.stubGlobal("URL", {
      ...URL,
      createObjectURL,
      revokeObjectURL,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the upload instructions", () => {
    render(<ImageUpload />);

    expect(
      screen.getByText("Drag & drop files here"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("or click to browse"),
    ).toBeInTheDocument();
  });

  it("does not render previews initially", () => {
    render(<ImageUpload />);

    expect(
      screen.queryByAltText(/Preview/i),
    ).not.toBeInTheDocument();
  });

  it("supports the disabled state", () => {
    render(<ImageUpload disabled />);

    const upload =
      screen.getByText("Drag & drop files here")
        .parentElement;

    expect(upload).toHaveClass(
      "cursor-not-allowed",
      "opacity-50",
    );
  });

  it("merges custom class names", () => {
    render(
      <ImageUpload className="custom-class" />,
    );

    const upload =
      screen.getByText("Drag & drop files here")
        .parentElement;

    expect(upload?.parentElement).toHaveClass(
      "space-y-4",
      "custom-class",
    );
  });

  it("forwards the multiple option", () => {
    const { container } = render(
      <ImageUpload multiple />,
    );

    expect(
      container.querySelector("input[type='file']"),
    ).toHaveAttribute("multiple");
  });

  it("accepts image files", () => {
    const { container } = render(
      <ImageUpload />,
    );

    expect(
      container.querySelector("input[type='file']"),
    ).toHaveAttribute("accept", "image/*");
  });

  it("creates previews and calls onImagesSelected", async () => {
    const callback = vi.fn();

    createObjectURL
      .mockReturnValueOnce("blob:first")
      .mockReturnValueOnce("blob:second");

    const { container } = render(
      <ImageUpload
        multiple
        onImagesSelected={callback}
      />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const first = new File(
      ["first"],
      "first.png",
      {
        type: "image/png",
      },
    );

    const second = new File(
      ["second"],
      "second.jpg",
      {
        type: "image/jpeg",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [first, second],
      },
    });

    expect(
      await screen.findByAltText("Preview 1"),
    ).toHaveAttribute("src", "blob:first");

    expect(
      screen.getByAltText("Preview 2"),
    ).toHaveAttribute("src", "blob:second");

    expect(createObjectURL).toHaveBeenCalledTimes(
      2,
    );

    expect(callback).toHaveBeenCalledWith([
      first,
      second,
    ]);
  });

  it("creates previews without an onImagesSelected callback", async () => {
    createObjectURL.mockReturnValue(
      "blob:preview",
    );

    const { container } = render(
      <ImageUpload />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const file = new File(
      ["image"],
      "image.png",
      {
        type: "image/png",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [file],
      },
    });

    expect(
      await screen.findByAltText("Preview 1"),
    ).toHaveAttribute(
      "src",
      "blob:preview",
    );
  });

  it("revokes previous previews when new files are selected", async () => {
    createObjectURL
      .mockReturnValueOnce("blob:first")
      .mockReturnValueOnce("blob:second");

    const { container } = render(
      <ImageUpload />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const first = new File(
      ["first"],
      "first.png",
      {
        type: "image/png",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [first],
      },
    });

    expect(
      await screen.findByAltText("Preview 1"),
    ).toHaveAttribute("src", "blob:first");

    const second = new File(
      ["second"],
      "second.png",
      {
        type: "image/png",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [second],
      },
    });

    await vi.waitFor(() => {
      expect(revokeObjectURL).toHaveBeenCalledWith(
        "blob:first",
      );
    });

    expect(
      screen.getByAltText("Preview 1"),
    ).toHaveAttribute("src", "blob:second");
  });

  it("revokes active previews when unmounted", async () => {
    createObjectURL.mockReturnValue(
      "blob:preview",
    );

    const { container, unmount } = render(
      <ImageUpload />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const file = new File(
      ["image"],
      "image.png",
      {
        type: "image/png",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [file],
      },
    });

    expect(
      await screen.findByAltText("Preview 1"),
    ).toBeInTheDocument();

    revokeObjectURL.mockClear();

    unmount();

    expect(revokeObjectURL).toHaveBeenCalledWith(
      "blob:preview",
    );
  });
});
