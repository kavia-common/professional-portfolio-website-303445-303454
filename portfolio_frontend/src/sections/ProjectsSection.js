import React from "react";
import Section from "../components/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { projects } from "../data/content";

/**
 * PUBLIC_INTERFACE
 * Projects grid section (responsive 1/2/3 columns).
 */
function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few representative projects — swap in your real work later."
    >
      <div className="grid grid-projects" role="list" aria-label="Project cards">
        {projects.map((p) => (
          <Card key={p.title} className="project-card" role="listitem">
            <div className="card-header">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-description">{p.description}</p>
            </div>

            <div className="badge-row" aria-label={`${p.title} technologies`}>
              {p.tech.map((t) => (
                <Badge key={t} tone="neutral">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="card-actions" aria-label={`${p.title} links`}>
              <Button href={p.links.demo} external variant="primary">
                Demo
              </Button>
              <Button href={p.links.code} external variant="secondary">
                Code
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
