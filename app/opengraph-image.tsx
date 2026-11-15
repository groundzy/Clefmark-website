import { ImageResponse } from "next/og";

export const alt = "Clefmark — Territory sales software that starts on the map";
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
            fontSize: 56,
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          Territory sales software that starts on the map.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#6b7280",
            maxWidth: 800,
          }}
        >
          Discover on the map, work Clients, and follow up from Gmail.
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