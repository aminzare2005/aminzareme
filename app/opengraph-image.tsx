import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amin Zare - Product Manager & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #fafafa 0%, #e4e4e7 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <img
          src="https://github.com/aminzare2005.png"
          alt=""
          width={120}
          height={120}
          style={{ borderRadius: "24px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.1,
            }}
          >
            Amin Zare
          </span>
          <span style={{ fontSize: 28, color: "#52525b", marginTop: 8 }}>
            Product Manager & Frontend Developer
          </span>
          <span style={{ fontSize: 22, color: "#71717a", marginTop: 16 }}>
            aminzare.me
          </span>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
