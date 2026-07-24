import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FileUpload } from "./file-upload";

describe("FileUpload", () => {
  it("renders the upload instructions", () => {
    render(<FileUpload />);

    expect(
      screen.getByText("Drag & drop files here"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("or click to browse"),
    ).toBeInTheDocument();
  });

  it("renders a file input", () => {
    const { container } = render(
      <FileUpload />,
    );

    expect(
      container.querySelector("input[type='file']"),
    ).toBeInTheDocument();
  });

  it("supports the disabled state", () => {
    render(<FileUpload disabled />);

    const root =
      screen.getByText("Drag & drop files here")
        .parentElement;

    expect(root).toHaveClass(
      "cursor-not-allowed",
      "opacity-50",
    );
  });

  it("merges custom class names", () => {
    render(
      <FileUpload className="custom-class" />,
    );

    const root =
      screen.getByText("Drag & drop files here")
        .parentElement;

    expect(root).toHaveClass("custom-class");
  });

  it("calls onFilesSelected when files are selected", async () => {
    const callback = vi.fn();

    const { container } = render(
      <FileUpload
        onFilesSelected={callback}
      />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const file = new File(
      ["hello"],
      "hello.txt",
      {
        type: "text/plain",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [file],
      },
    });

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledOnce();
    });

    expect(callback).toHaveBeenCalledWith([
      file,
    ]);
  });

  it("handles selected files without a callback", async () => {
    const { container } = render(
      <FileUpload />,
    );

    const input = container.querySelector(
      "input[type='file']",
    );

    expect(input).not.toBeNull();

    const file = new File(
      ["hello"],
      "hello.txt",
      {
        type: "text/plain",
      },
    );

    fireEvent.change(input!, {
      target: {
        files: [file],
      },
    });

    await vi.waitFor(() => {
      expect(input).toBeInTheDocument();
    });
  });

  it("applies active drag classes while dragging a file", async () => {
    render(<FileUpload />);

    const root =
      screen.getByText("Drag & drop files here")
        .parentElement;

    expect(root).not.toBeNull();

    const file = new File(
      ["hello"],
      "hello.txt",
      {
        type: "text/plain",
      },
    );

    fireEvent.dragEnter(root!, {
      dataTransfer: {
        files: [file],
        items: [
          {
            kind: "file",
            type: file.type,
            getAsFile: () => file,
          },
        ],
        types: ["Files"],
      },
    });

    await vi.waitFor(() => {
      expect(root).toHaveClass(
        "border-primary",
        "bg-primary/5",
      );
    });
  });

  it("forwards the multiple option", () => {
    const { container } = render(
      <FileUpload multiple />,
    );

    expect(
      container.querySelector("input[type='file']"),
    ).toHaveAttribute("multiple");
  });

  it("forwards accepted file types", () => {
    const { container } = render(
      <FileUpload
        accept={{
          "image/png": [".png"],
        }}
      />,
    );

    expect(
      container.querySelector("input[type='file']"),
    ).toHaveAttribute(
      "accept",
      "image/png,.png",
    );
  });
});
