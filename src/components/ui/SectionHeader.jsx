import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export function SectionHeader({
  eyebrow,
  title,
  titleEmphasis,
  dark = false,
  marginBottom = "2.5rem",
}) {
  const ink = dark ? "#fff" : COLORS.ink;

  return (
    <>
      {eyebrow && (
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: dark ? "rgba(255,255,255,0.6)" : COLORS.accent,
            fontFamily: FONTS.mono,
            marginBottom: "0.4rem",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: FONTS.serif,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: ink,
          marginBottom,
        }}
      >
        {title && <>{title} </>}
        {titleEmphasis && <em style={{ fontStyle: "italic" }}>{titleEmphasis}</em>}
      </h2>
    </>
  );
}
