import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Evergreen SEO — More Customers. Less Guesswork.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#050508",
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
            fontSize: "80px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          More Customers.{" "}
          <span style={{ color: "#22c55e" }}>Less Guesswork.</span>
        </div>
        {/* Subheadline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "400",
            color: "#9ca3af",
            textAlign: "center",
            letterSpacing: "-0.5px",
            maxWidth: "800px",
          }}
        >
          We help businesses get found on Google and turn searches into sales.
        </div>
        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          evergreenseo.agency
        </div>
      </div>
    ),
    { ...size }
  );
}
