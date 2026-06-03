import { COLORS } from "../../constants/colors";
import { portfolioData } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { FadeUp } from "../ui/FadeUp";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" style={{ background: COLORS.paper, }}>
      <FadeUp>
        <SectionHeader eyebrow="Work" title="Notable" titleEmphasis="Projects" />
      </FadeUp>
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          
        }}
      >
        {portfolioData.projects.map((project, index) => (
          <FadeUp key={project.title} delay={index * 100}>
            <ProjectCard {...project} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
