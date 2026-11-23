import { ImageResponse } from "next/og";
import { venueConfig } from "@/lib/venue";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#fcfbfa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2.5px solid #c59b27",
          borderRadius: "14px",
        }}
      >
        <span
          style={{
            color: "#96700c",
            fontSize: 26,
            fontWeight: "bold",
            letterSpacing: 2,
            fontFamily: "serif",
          }}
        >
          {venueConfig.initials}
        </span>
      </div>
    ),
    size
  );
}
