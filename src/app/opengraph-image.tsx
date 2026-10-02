import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.openGraph.imageAlt;
export const size = { height: 630, width: 1200 };
export const contentType = "image/png";

/** Default social image generated from site config. Replace with a static file if preferred. */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#18181b",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: 80,
        width: "100%",
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>{siteConfig.name}</div>
      <div style={{ color: "#a1a1aa", fontSize: 34, marginTop: 24 }}>
        {siteConfig.description}
      </div>
    </div>,
    size
  );
}
