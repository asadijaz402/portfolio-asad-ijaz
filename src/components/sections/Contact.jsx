import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { FadeUp } from "../ui/FadeUp";
import { SectionHeader } from "../ui/SectionHeader";

function buildContactLinks(data) {
  return [
    { label: `✉  ${data.email}`, href: `mailto:${data.email}` },
    { label: "↗  LinkedIn", href: data.linkedin },
    { label: "↗  GitHub", href: data.github },
    { label: `✆  ${data.phone}`, href: `tel:${data.phone.replace(/\s/g, "")}` },
  ];
}

export function Contact() {
  const links = buildContactLinks(portfolioData);

  return (
    <section
      id="contact"
      style={{ background: COLORS.accent, padding: "6rem 3rem", textAlign: "center" }}
    >
      <FadeUp>
        <SectionHeader
          eyebrow="Let's Talk"
          title="Get in"
          titleEmphasis="Touch"
          dark
          marginBottom="1rem"
        />
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "2.5rem",
            fontFamily: FONTS.mono,
          }}
        >
          Open to exciting full-stack opportunities and freelance projects.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              variant="light"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              style={{ padding: "0.7rem 1.4rem" }}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
