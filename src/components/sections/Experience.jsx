import { COLORS } from "../../constants/colors";
import { portfolioData } from "../../data/portfolio";
import { FadeUp } from "../ui/FadeUp";
import { SectionHeader } from "../ui/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 3rem", background: COLORS.paper }}>
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
    </section>
  );
}
