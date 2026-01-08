import React, { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

/**
 * PUBLIC_INTERFACE
 * Sticky top navigation with scroll-spy active link highlighting.
 *
 * @param {object} props
 * @param {string} props.activeSection Currently active section id
 */
function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLabel = useMemo(() => {
    const found = NAV_ITEMS.find((i) => i.id === activeSection);
    return found ? found.label : "Navigation";
  }, [activeSection]);

  useEffect(() => {
    // Close the mobile menu when resizing to desktop widths.
    const onResize = () => {
      if (window.innerWidth >= 860) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    // Prefer reduced motion setting.
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Use scrollIntoView so fixed header offset is handled by scroll-margin-top in CSS.
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });

    // Update hash without jumping.
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header className="site-header" aria-label="Site header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <nav className="navbar" aria-label={activeLabel}>
        <div className="container navbar-inner">
          <a className="brand" href="#about" onClick={(e) => e.preventDefault()}>
            <span className="brand-mark" aria-hidden="true">
              ◼︎
            </span>
            <span className="brand-text">Portfolio</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>

          <ul
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`.trim()}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${
                    activeSection === item.id ? "is-active" : ""
                  }`.trim()}
                  onClick={() => onNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
