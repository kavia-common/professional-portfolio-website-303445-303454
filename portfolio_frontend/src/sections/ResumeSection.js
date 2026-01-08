import React from "react";
import Section from "../components/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { resume } from "../data/content";

/**
 * PUBLIC_INTERFACE
 * Resume section with a download/view link and experience timeline items.
 */
function ResumeSection() {
  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="A short summary and experience timeline — plus a placeholder PDF link."
    >
      <div className="resume-top">
        <p className="resume-summary">{resume.summary}</p>
        <Button href={resume.download.href} variant="primary">
          {resume.download.label}
        </Button>
      </div>

      <div className="timeline" aria-label="Experience timeline">
        {resume.experience.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`} className="timeline-item">
            <div className="timeline-head">
              <h3 className="card-title">{exp.role}</h3>
              <p className="timeline-meta">
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-dot" aria-hidden="true">
                  •
                </span>
                <span className="timeline-period">{exp.period}</span>
              </p>
            </div>
            <ul className="bullets" aria-label={`${exp.role} responsibilities`}>
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default ResumeSection;
