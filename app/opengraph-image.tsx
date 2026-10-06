import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Amin Zare - Digital Creator & Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const paper = "#f1eef4";
const surface = "#fcfcfd";
const ink = "#1c1a17";
const inkMuted = "#5f5a52";
const inkFaint = "#9c92a3";
const line = "rgba(25, 23, 28, 0.12)";
const accent = "#7c3ec8";

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <polygon
        fill={color}
        points="24,2 28,17.1 43,13 32,24 43,35 28,30.9 24,46 20,30.9 5,35 16,24 5,13 20,17.1"
      />
    </svg>
  );
}

const TAGS = ["digital creator", "technical pm"];

export default async function Image() {
  const avatar = await fetch(new URL("./og-avatar.png", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: paper,
        color: ink,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: surface,
          position: "relative",
          overflow: "hidden",
          fontFamily: '"Segoe UI", Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: -70,
            top: 130,
          }}
        >
          <Star size={380} color="rgba(25, 23, 28, 0.04)" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 36px",
            borderBottom: `1px solid ${line}`,
            fontSize: 21,
            letterSpacing: 5,
            color: accent,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: 999,
                background: accent,
              }}
            />
            OPEN TO WORK
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            gap: 52,
            padding: "0 56px",
          }}
        >
          <img
            src={avatar as unknown as string}
            alt=""
            width={176}
            height={176}
            style={{
              borderRadius: 36,
              border: `1px solid ${line}`,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 88,
                fontWeight: 900,
                letterSpacing: -4,
                lineHeight: 1,
              }}
            >
              Amin Zare
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 500,
                color: inkMuted,
                marginTop: 18,
              }}
            >
              digital creator & frontend developer
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 30,
              }}
            >
              {TAGS.map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    padding: "8px 18px",
                    border: `1px solid ${line}`,
                    borderRadius: 10,
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    color: inkMuted,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 36px",
            borderTop: `1px solid ${line}`,
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: 5,
            color: inkFaint,
          }}
        >
          <div style={{ display: "flex" }}>AMINZARE.ME</div>

          <div style={{ display: "flex" }}>SHIRAZ, IRAN</div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
