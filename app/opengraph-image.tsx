import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Evergreen SEO Agency — Local SEO for Home Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#22c55e",
            borderRadius: "2px",
            marginBottom: "40px",
          }}
        />
        {/* Main headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Evergreen SEO Agency
        </div>
        {/* Subheadline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#22c55e",
            textAlign: "center",
            letterSpacing: "-0.5px",
          }}
        >
          Local SEO for Home Service Businesses
        </div>
        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          evergreenseoagency.com
        </div>
      </div>
    ),
    { ...size }
  );
}
