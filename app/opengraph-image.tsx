import { ImageResponse } from "next/og";

export const alt = "Clefmark — Territory sales, tied together";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          Territory sales,
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          tied together.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#6b7280",
            maxWidth: 800,
          }}
        >
          Map, clients, inbox, and playbooks in one place for field B2B teams.
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          <span style={{ fontSize: 24, color: "#111111", marginLeft: 8 }}>
            Clefmark
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
