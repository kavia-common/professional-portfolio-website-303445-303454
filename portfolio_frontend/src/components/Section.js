import React from "react";

/**
 * PUBLIC_INTERFACE
 * Section wrapper used to standardize layout and provide semantic landmarks.
 *
 * @param {object} props
 * @param {string} props.id Anchor id for navigation
 * @param {string} props.title Visible section heading
 * @param {string} [props.subtitle] Optional supporting text under title
 * @param {React.ReactNode} props.children Section content
 */
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section" aria-label={title}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export default Section;
