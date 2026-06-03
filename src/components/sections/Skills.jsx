import { COLORS } from "../../constants/colors";
import { portfolioData } from "../../data/portfolio";
import { FadeUp } from "../ui/FadeUp";
import { SectionHeader } from "../ui/SectionHeader";
import { SkillGroup } from "./SkillGroup";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 3rem", background: COLORS.ink }}>
      <FadeUp>
        <SectionHeader
          eyebrow="Expertise"
          title="Technical"
          titleEmphasis="Skills"
          dark
        />
      </FadeUp>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "#2a2a2a",
        }}
      >
        {portfolioData.skills.map((skillGroup, index) => (
          <FadeUp key={skillGroup.group} delay={index * 60}>
            <SkillGroup {...skillGroup} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
