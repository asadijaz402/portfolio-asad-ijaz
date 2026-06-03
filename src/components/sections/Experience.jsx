import { COLORS } from "../../constants/colors";
import { portfolioData } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { FadeUp } from "../ui/FadeUp";
import { SectionHeader } from "../ui/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <Section id="experience" style={{ background: COLORS.paper }}>
      <FadeUp>
        <SectionHeader eyebrow="Career" title="Work" titleEmphasis="Experience" />
      </FadeUp>
      <div style={{ display: "grid", gap: "2px" }}>
        {portfolioData.experience.map((item, index) => (
          <FadeUp key={`${item.company}-${item.period}`} delay={index * 80}>
            <ExperienceCard {...item} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
