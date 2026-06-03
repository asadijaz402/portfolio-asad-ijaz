import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";

export function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: COLORS.ink,
        color: COLORS.muted,
        fontSize: "11px",
        letterSpacing: "0.05em",
        fontFamily: FONTS.mono,
      }}
    >
      <span>© 2026 {portfolioData.name}</span>
      <span>{portfolioData.location}</span>
      <span>{portfolioData.title}</span>
    </footer>
  );
}
