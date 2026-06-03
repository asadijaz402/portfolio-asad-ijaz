import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { Tag } from "../ui/Tag";

export function ProjectCard({ num, title, desc, tech }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 14px 32px rgba(0,0,0,0.08)" : "none",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontSize: "2.5rem",
          color: COLORS.border,
          lineHeight: 1,
          marginBottom: "0.6rem",
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: FONTS.display,
          fontWeight: 700,
          fontSize: "1rem",
          color: COLORS.ink,
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "13px",
          color: COLORS.muted,
          lineHeight: 1.8,
          flex: 1,
          fontFamily: FONTS.mono,
        }}
      >
        {desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "1.2rem" }}>
        {tech.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
