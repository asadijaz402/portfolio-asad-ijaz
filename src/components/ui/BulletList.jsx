import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export function BulletList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((text, index) => (
        <li
          key={index}
          style={{
            fontSize: "13px",
            color: COLORS.muted,
            padding: "0.28rem 0 0.28rem 1.3rem",
            position: "relative",
            lineHeight: 1.75,
            fontFamily: FONTS.mono,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "0.35rem",
              color: COLORS.accent,
              fontSize: "11px",
            }}
          >
            →
          </span>
          {text}
        </li>
      ))}
    </ul>
  );
}
