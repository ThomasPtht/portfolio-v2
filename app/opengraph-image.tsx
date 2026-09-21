import { ImageResponse } from "next/og";

export const alt = "Thomas Potherat, développeur Fullstack à Auxerre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #07070d 0%, #1a1233 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          Fullstack Developer
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 24 }}>
          Thomas Potherat
        </div>
        <div style={{ fontSize: 40, color: "#8b5cf6", marginTop: 16 }}>
          Développeur Fullstack
        </div>
        <div style={{ fontSize: 30, color: "#ffffffb3", marginTop: 40 }}>
          Auxerre · Bourgogne · Partout en France
        </div>
      </div>
    ),
    size,
  );
}
