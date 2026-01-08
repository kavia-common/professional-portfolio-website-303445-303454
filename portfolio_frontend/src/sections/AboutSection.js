import React from "react";
import Section from "../components/Section";
import Button from "../components/ui/Button";
import { person } from "../data/content";

/**
 * PUBLIC_INTERFACE
 * About section with hero-like intro, photo placeholder, and social links.
 */
function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A quick introduction and links — replace with your own details."
    >
      <div className="about-grid">
        <div className="photo-placeholder" role="img" aria-label="Profile photo placeholder">
          <div className="photo-inner">
            <span className="photo-initials" aria-hidden="true">
              AM
            </span>
            <span className="sr-only">Profile image placeholder</span>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">{person.location}</p>
          <h1 className="hero-title">{person.name}</h1>
          <p className="hero-subtitle">{person.title}</p>
          <p className="hero-intro">{person.intro}</p>

          <ul className="bullets" aria-label="Highlights">
            {person.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="button-row" aria-label="Social links">
            {person.socials.map((s) => (
              <Button
                key={s.label}
                href={s.href}
                external={s.href.startsWith("http")}
                variant={s.kind}
              >
                {s.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
