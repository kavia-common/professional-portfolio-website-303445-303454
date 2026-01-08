import React from "react";
import Section from "../components/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { skills } from "../data/content";

/**
 * PUBLIC_INTERFACE
 * Skills section rendered as categorized cards with badge lists.
 */
function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A categorized overview — edit categories and items to match your profile."
    >
      <div className="grid grid-skills" aria-label="Skill categories">
        {skills.map((group) => (
          <Card key={group.category} className="skill-card">
            <h3 className="card-title">{group.category}</h3>
            <div className="badge-row" aria-label={`${group.category} items`}>
              {group.items.map((item) => (
                <Badge key={item} tone="accent">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
