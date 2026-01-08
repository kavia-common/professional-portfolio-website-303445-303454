/**
 * Centralized sample content data for the portfolio.
 * Replace these objects/arrays with real content later.
 */

export const person = {
  name: "Alex Morgan",
  title: "Full‑Stack Developer",
  location: "San Francisco, CA",
  intro:
    "I build accessible, performant web applications with a focus on clean UI, thoughtful UX, and maintainable code.",
  highlights: [
    "4+ years building production web apps",
    "Strong focus on accessibility and performance",
    "Comfortable across frontend, backend, and tooling",
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com", kind: "primary" },
    { label: "GitHub", href: "https://github.com", kind: "secondary" },
    { label: "Email", href: "mailto:hello@example.com", kind: "ghost" },
  ],
};

export const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A responsive dashboard for tracking KPIs with charts, filtering, and role-based views.",
    tech: ["React", "TypeScript", "CSS", "REST"],
    links: {
      demo: "https://example.com",
      code: "https://github.com",
    },
  },
  {
    title: "Team Task Manager",
    description:
      "A collaborative Kanban-style task manager with keyboard shortcuts and offline-friendly UX.",
    tech: ["React", "Node.js", "IndexedDB", "A11y"],
    links: {
      demo: "https://example.com",
      code: "https://github.com",
    },
  },
  {
    title: "Portfolio Starter",
    description:
      "A lightweight, customizable portfolio template with scroll-spy navigation and clean theming.",
    tech: ["React", "Vanilla CSS", "SEO"],
    links: {
      demo: "https://example.com",
      code: "https://github.com",
    },
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Express", "Next.js"],
  },
  {
    category: "Tools",
    items: ["Git", "Jest", "Testing Library", "ESLint", "Figma"],
  },
];

export const resume = {
  summary:
    "I enjoy building polished products end-to-end—from component libraries to APIs—while keeping performance, accessibility, and developer experience top of mind.",
  download: {
    label: "View Resume (PDF)",
    href: "/resume-placeholder.pdf",
  },
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Example Company",
      period: "2023 — Present",
      bullets: [
        "Led a UI refresh improving usability and reducing support tickets by 18%.",
        "Built a component library with accessibility guidelines and documentation.",
        "Improved Core Web Vitals through code splitting and performance audits.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Another Company",
      period: "2021 — 2023",
      bullets: [
        "Shipped features across the stack with React and Node.js.",
        "Collaborated with design to implement responsive layouts and prototypes.",
        "Added automated testing improving release confidence and stability.",
      ],
    },
  ],
};
