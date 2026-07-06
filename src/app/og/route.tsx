import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f5",
          padding: "72px",
          color: "#111827",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#6b7280",
          }}
        >
          PASZED.ME
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Building software built to last.
          </div>

          <div
            style={{
              fontSize: 30,
              color: "#6b7280",
            }}
          >
            Engineering • Systems • Craft
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#6b7280",
          }}
        >
          https://paszed.me
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
