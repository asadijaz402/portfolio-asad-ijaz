import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const VARIANTS = {
  primary: {
    background: COLORS.ink,
    color: COLORS.paper,
    border: "none",
    hoverBackground: COLORS.accent,
    hoverColor: COLORS.paper,
    hoverBorder: "none",
  },
  outline: {
    background: "transparent",
    color: COLORS.ink,
    border: `1px solid ${COLORS.ink}`,
    hoverBackground: COLORS.ink,
    hoverColor: COLORS.paper,
    hoverBorder: `1px solid ${COLORS.ink}`,
  },
  light: {
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    hoverBackground: "rgba(255,255,255,0.25)",
    hoverColor: "#fff",
    hoverBorder: "1px solid rgba(255,255,255,0.3)",
  },
};

export function Button({
  children,
  href,
  variant = "primary",
  target,
  rel = "noreferrer",
  style = {},
}) {
  const v = VARIANTS[variant];

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: v.background,
        color: v.color,
        padding: "0.75rem 1.5rem",
        fontSize: "12px",
        letterSpacing: "0.05em",
        fontFamily: FONTS.mono,
        textDecoration: "none",
        border: v.border,
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = v.hoverBackground;
        e.currentTarget.style.color = v.hoverColor;
        if (v.hoverBorder) e.currentTarget.style.border = v.hoverBorder;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.color = v.color;
        if (v.border) e.currentTarget.style.border = v.border;
      }}
    >
      {children}
    </a>
  );
}
