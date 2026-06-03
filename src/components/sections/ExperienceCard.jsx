import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { BulletList } from "../ui/BulletList";
import { PeriodBadge } from "../ui/PeriodBadge";

export function ExperienceCard({ role, company, period, bullets }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="experience-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.card,
        border: `1px solid ${hovered ? "#bbb" : COLORS.border}`,
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: COLORS.accent,
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "bottom",
          transition: "transform 0.3s ease",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 700,
              fontSize: "1.05rem",
              color: COLORS.ink,
            }}
          >
            {role}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: COLORS.accent,
              fontFamily: FONTS.mono,
              marginTop: 3,
            }}
          >
            {company}
          </div>
        </div>
        <PeriodBadge>{period}</PeriodBadge>
      </div>
      <BulletList items={bullets} />
    </div>
  );
}
