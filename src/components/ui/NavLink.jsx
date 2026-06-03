import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: COLORS.muted,
        textDecoration: "none",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: FONTS.mono,
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = COLORS.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = COLORS.muted;
      }}
    >
      {children}
    </a>
  );
}
