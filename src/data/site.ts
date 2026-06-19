export type Project = {
  title: string;
  dek: string;
  year: string;
  stack: string[];
  href?: string;
};

export type Artwork = {
  title: string;
  year: string;
  medium: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const profile = {
  name: "Your Name",
  role: "Developer, writer, and visual thinker",
  location: "Seoul, Korea",
  edition: "Portfolio Gazette",
  headline: "Building thoughtful software with a sketchbook close at hand.",
  intro:
    "This is a newspaper-style portfolio for your writing, projects, and artwork. Replace this copy with your own story when you are ready.",
  bio:
    "Use this space for a sharper personal introduction: what you build, what you care about, and the kind of work you want people to remember.",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/krisson0722" },
    { label: "Email", href: "mailto:hello@example.com" }
  ]
};

export const projects: Project[] = [
  {
    title: "Project Headline",
    dek: "A concise description of a project, case study, or product you want to feature.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Design"]
  },
  {
    title: "Second Feature",
    dek: "Swap this with another project, experiment, or collaboration when your data is ready.",
    year: "2025",
    stack: ["React", "Content", "UX"]
  },
  {
    title: "Archive Note",
    dek: "A smaller item can still feel editorial when it has a clear angle and a clean summary.",
    year: "2024",
    stack: ["Prototype", "Writing"]
  }
];

export const artworks: Artwork[] = [
  {
    title: "Study for a Front Page",
    year: "2026",
    medium: "Digital drawing",
    image: "/art/study-front-page.svg",
    description:
      "Placeholder artwork for the gallery. Add your image files to public/art and update this record.",
    featured: true
  },
  {
    title: "Ink Margin",
    year: "2026",
    medium: "Sketch",
    image: "/art/ink-margin.svg",
    description:
      "A second placeholder so the gallery layout is visible before the real drawings arrive.",
    featured: true
  },
  {
    title: "Column Break",
    year: "2025",
    medium: "Mixed media",
    image: "/art/column-break.svg",
    description:
      "Keep the title, year, medium, and path here in sync with the file you place in public/art."
  }
];
