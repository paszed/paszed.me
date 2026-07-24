import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { getAllArticles } from "./get-all-articles";
import { getSortedArticles } from "./get-sorted-articles";

vi.mock("./get-all-articles", () => ({
  getAllArticles: vi.fn(),
}));

const mockedGetAllArticles =
  vi.mocked(getAllArticles);

describe("getSortedArticles", () => {
  beforeEach(() => {
    mockedGetAllArticles.mockReset();
  });

  it("sorts published articles by newest first", () => {
    mockedGetAllArticles.mockReturnValue([
      {
        title: "Older",
        publishedAt: new Date("2024-01-01"),
      },
      {
        title: "Newer",
        publishedAt: new Date("2025-01-01"),
      },
    ] as never);

    expect(
      getSortedArticles().map(
        (article) => article.title,
      ),
    ).toEqual([
      "Newer",
      "Older",
    ]);
  });

  it("places unpublished articles after published ones", () => {
    mockedGetAllArticles.mockReturnValue([
      {
        title: "Draft",
      },
      {
        title: "Published",
        publishedAt: new Date("2025-01-01"),
      },
    ] as never);

    expect(
      getSortedArticles().map(
        (article) => article.title,
      ),
    ).toEqual([
      "Published",
      "Draft",
    ]);
  });

  it("keeps published articles before unpublished ones", () => {
    mockedGetAllArticles.mockReturnValue([
      {
        title: "Published",
        publishedAt: new Date("2025-01-01"),
      },
      {
        title: "Draft",
      },
    ] as never);

    expect(
      getSortedArticles().map(
        (article) => article.title,
      ),
    ).toEqual([
      "Published",
      "Draft",
    ]);
  });

  it("sorts unpublished articles alphabetically", () => {
    mockedGetAllArticles.mockReturnValue([
      {
        title: "Zulu",
      },
      {
        title: "Alpha",
      },
    ] as never);

    expect(
      getSortedArticles().map(
        (article) => article.title,
      ),
    ).toEqual([
      "Alpha",
      "Zulu",
    ]);
  });
});
