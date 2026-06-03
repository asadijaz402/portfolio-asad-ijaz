import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { portfolioData } from "../../data/portfolio";
import { useEntrance } from "../../hooks/useEntrance";
import { Button } from "../ui/Button";

function entranceStyle(ready, delay) {
  return {
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };
}

export function Hero() {
  const ready = useEntrance(80);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "8rem 3rem 5rem",
        gap: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #ddd8ce 39px, #ddd8ce 40px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            ...entranceStyle(ready, 100),
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.accent,
            fontFamily: FONTS.mono,
            marginBottom: "1.5rem",
          }}
        >
          {portfolioData.title} · {portfolioData.location}
        </div>
        <h1
          style={{
            ...entranceStyle(ready, 200),
            fontFamily: FONTS.serif,
            fontSize: "clamp(3.5rem, 7vw, 6rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: COLORS.ink,
            marginBottom: "1rem",
          }}
        >
          Asad
          <br />
          <em style={{ fontStyle: "italic", color: COLORS.accent }}>Ijaz</em>
        </h1>
        <p
          style={{
            ...entranceStyle(ready, 320),
            fontSize: "13px",
            color: COLORS.muted,
            maxWidth: "380px",
            lineHeight: 1.85,
            marginBottom: "2.5rem",
            fontFamily: FONTS.mono,
          }}
        >
          {portfolioData.summary}
        </p>
        <div
          style={{
            ...entranceStyle(ready, 440),
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Button href="#experience">View Experience →</Button>
          <Button href={portfolioData.github} variant="outline" target="_blank">
            GitHub ↗
          </Button>
        </div>
      </div>

      <div
        style={{
          ...entranceStyle(ready, 300),
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 300, height: 355 }}>
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: "100%",
              height: "100%",
              border: `2px solid ${COLORS.accent}`,
            }}
          />
          <img
            src={portfolioData.avatar}
            alt={portfolioData.name}
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
              filter: "grayscale(15%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -18,
              right: -18,
              zIndex: 2,
              background: COLORS.accent,
              color: "#fff",
              fontSize: "11px",
              letterSpacing: "0.1em",
              padding: "0.5rem 1rem",
              textTransform: "uppercase",
              fontFamily: FONTS.mono,
            }}
          >
            Available for hire
          </div>
        </div>
      </div>
    </section>
  );
}
