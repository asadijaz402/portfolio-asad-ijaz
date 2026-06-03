import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { FadeUp } from "../ui/FadeUp";
import { PeriodBadge } from "../ui/PeriodBadge";
import { SectionHeader } from "../ui/SectionHeader";

export function Education() {
  const { degree, school, year, courses } = portfolioData.education;

  return (
    <Section
      style={{
        background: COLORS.card,
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <FadeUp>
        <SectionHeader eyebrow="Background" titleEmphasis="Education" />
      </FadeUp>
      <FadeUp delay={100}>
        <div
          className="education-card"
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "2rem 2.5rem",
            background: COLORS.paper,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontWeight: 700,
                fontSize: "1.05rem",
                color: COLORS.ink,
              }}
            >
              {degree}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: COLORS.accent,
                fontFamily: FONTS.mono,
                marginTop: 4,
              }}
            >
              {school}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: COLORS.muted,
                marginTop: "1rem",
                lineHeight: 1.9,
                fontFamily: FONTS.mono,
                whiteSpace: "pre-line",
              }}
            >
              {courses}
            </div>
          </div>
          <PeriodBadge variant="filled">{year}</PeriodBadge>
        </div>
      </FadeUp>
    </Section>
  );
}
