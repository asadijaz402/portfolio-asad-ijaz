import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";
import { FadeUp } from "../ui/FadeUp";

export function Stats() {
  return (
    <div
      style={{
        background: COLORS.ink,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "2.5rem 3rem",
      }}
    >
      {portfolioData.stats.map((stat, index) => (
        <FadeUp key={stat.label} delay={index * 80}>
          <div style={{ textAlign: "center", padding: "0 1rem" }}>
            <span
              style={{
                fontFamily: FONTS.serif,
                fontStyle: "italic",
                fontSize: "2.8rem",
                color: COLORS.accent,
                display: "block",
                lineHeight: 1,
              }}
            >
              {stat.num}
            </span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                fontFamily: FONTS.mono,
              }}
            >
              {stat.label}
            </span>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
