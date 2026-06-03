import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export function PeriodBadge({ children, variant = "outline" }) {
  const styles =
    variant === "filled"
      ? { background: COLORS.ink, color: COLORS.paper, border: "none" }
      : {
          background: COLORS.paper,
          color: COLORS.muted,
          border: `1px solid ${COLORS.border}`,
        };

  return (
    <span
      style={{
        fontSize: "11px",
        letterSpacing: "0.05em",
        fontFamily: FONTS.mono,
        padding: "0.25rem 0.65rem",
        whiteSpace: "nowrap",
        ...styles,
      }}
    >
      {children}
    </span>
  );
}
