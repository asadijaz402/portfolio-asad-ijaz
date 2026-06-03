import { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { NAV_LINKS, portfolioData } from "../../data/portfolio";
import { useScrolled } from "../../hooks/useScrolled";
import { NavLink } from "../ui/NavLink";

function HireButton({ className = "", onClick }) {
  return (
    <a
      href={`mailto:${portfolioData.email}`}
      className={className}
      onClick={onClick}
      style={{
        background: COLORS.ink,
        color: COLORS.paper,
        padding: "0.6rem 1.3rem",
        fontSize: "11px",
        letterSpacing: "0.06em",
        fontFamily: FONTS.mono,
        textDecoration: "none",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = COLORS.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = COLORS.ink;
      }}
    >
      Hire me →
    </a>
  );
}

export function Nav() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navStyle = {
    "--nav-border": scrolled ? COLORS.border : "transparent",
    background: scrolled ? "rgba(244,241,234,0.92)" : "rgba(244,241,234,0.7)",
    backdropFilter: "blur(14px)",
    borderBottom: `1px solid ${scrolled ? COLORS.border : "transparent"}`,
  };

  return (
    <nav className="site-nav" style={navStyle}>
      <a
        href="#"
        style={{
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: "1.1rem",
          color: COLORS.ink,
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}
        onClick={closeMenu}
      >
        AI.
      </a>

      <ul className="site-nav__links">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <NavLink href={`#${label.toLowerCase()}`}>{label}</NavLink>
          </li>
        ))}
      </ul>

      <HireButton className="site-nav__hire site-nav__hire--desktop" />

      <button
        type="button"
        className={`site-nav__toggle${menuOpen ? " site-nav__toggle--open" : ""}`}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
        style={{ borderColor: scrolled ? COLORS.border : COLORS.border }}
      >
        <span className="site-nav__toggle-bar" />
        <span className="site-nav__toggle-bar" />
        <span className="site-nav__toggle-bar" />
      </button>

      {menuOpen && (
        <ul className="site-nav__mobile-menu">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <NavLink href={`#${label.toLowerCase()}`} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <HireButton
              className="site-nav__hire site-nav__hire--mobile"
              onClick={closeMenu}
            />
          </li>
        </ul>
      )}
    </nav>
  );
}
