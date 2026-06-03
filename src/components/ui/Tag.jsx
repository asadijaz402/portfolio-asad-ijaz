import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const VARIANTS = {
  paper: {
    border: COLORS.border,
    color: COLORS.muted,
    background: COLORS.paper,
    hoverBorder: COLORS.border,
    hoverColor: COLORS.muted,
    hoverBackground: COLORS.paper,
  },
  dark: {
    border: "#333",
    color: "#aaa",
    background: "transparent",
    hoverBorder: COLORS.accent,
    hoverColor: COLORS.paper,
    hoverBackground: "transparent",
  },
};

export function Tag({ label, variant = "paper", interactive = false }) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant];
  const active = interactive && hovered;

  return (
    <span
      onMouseEnter={interactive ? () => setHovered(true) : undefined}
      onMouseLeave={interactive ? () => setHovered(false) : undefined}
      style={{
        fontSize: variant === "dark" ? "12px" : "11px",
        padding: variant === "dark" ? "0.28rem 0.7rem" : "0.2rem 0.65rem",
        border: `1px solid ${active ? v.hoverBorder : v.border}`,
        color: active ? v.hoverColor : v.color,
        background: active ? v.hoverBackground : v.background,
        fontFamily: FONTS.mono,
        transition: "all 0.2s",
        cursor: interactive ? "default" : undefined,
      }}
    >
      {label}
    </span>
  );
}
