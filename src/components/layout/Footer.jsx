import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";

export function Footer() {
  return (
    <footer
      style={{
        background: COLORS.ink,
        color: COLORS.muted,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem",
        fontSize: "11px",
        letterSpacing: "0.05em",
        fontFamily: FONTS.mono,
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span>© 2026 {portfolioData.name}</span>
      <span>{portfolioData.location}</span>
      <span>{portfolioData.title}</span>
    </footer>
  );
}
