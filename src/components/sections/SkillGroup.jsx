import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { Tag } from "../ui/Tag";

export function SkillGroup({ group, items }) {
  return (
    <div style={{ background: COLORS.ink, padding: "2rem" }}>
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: COLORS.accent,
          fontFamily: FONTS.mono,
          marginBottom: "1rem",
        }}
      >
        {group}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {items.map((item) => (
          <Tag key={item} label={item} variant="dark" interactive />
        ))}
      </div>
    </div>
  );
}
