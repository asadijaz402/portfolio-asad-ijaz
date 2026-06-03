import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { NAV_LINKS, portfolioData } from "../../data/portfolio";
import { useScrolled } from "../../hooks/useScrolled";
import { NavLink } from "../ui/NavLink";

export function Nav() {
  const scrolled = useScrolled(40);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.1rem 3rem",
        background: scrolled ? "rgba(244,241,234,0.92)" : "rgba(244,241,234,0.7)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? COLORS.border : "transparent"}`,
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: "1.1rem",
          color: COLORS.ink,
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}
      >
        AI.
      </a>
      <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <NavLink href={`#${label.toLowerCase()}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${portfolioData.email}`}
        style={{
          background: COLORS.ink,
          color: COLORS.paper,
          padding: "0.6rem 1.3rem",
          fontSize: "11px",
          letterSpacing: "0.06em",
          fontFamily: FONTS.mono,
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = COLORS.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = COLORS.ink;
        }}
      >
        Hire me →
      </a>
    </nav>
  );
}
