import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Stats } from "./components/sections/Stats";
import { COLORS } from "./constants/colors";
import { FONTS } from "./constants/fonts";

export default function App() {
  return (
    <div
      style={{
        fontFamily: FONTS.mono,
        background: COLORS.paper,
        color: COLORS.ink,
      }}
    >
      <Nav />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
