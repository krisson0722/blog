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
  name: "Kris Son",
  role: "Data Science + Business student, analyst, and research assistant",
  location: "Atlanta, Georgia",
  edition: "Portfolio Gazette",
  headline: "Turning messy data, research questions, and product signals into clearer decisions.",
  intro:
    "I study Data Science and Business at Emory University, where I work across analytics, research, and strategy. My work spans healthcare data cleaning, investment research, behavioral lab operations, and digital marketing.",
  bio:
    "I like projects that ask for both careful structure and sharp judgment: building datasets people can trust, finding patterns in complex systems, and turning analysis into a story that teams can act on.",
  email: "kris.son@emory.edu",
  socials: [
    { label: "GitHub", href: "https://github.com/krisson0722" },
    { label: "Email", href: "mailto:kris.son@emory.edu" }
  ]
};

export const projects: Project[] = [
  {
    title: "Healthcare Data Operations",
    dek: "Engineered complex data cleaning workflows for nursing licensure, graduation rates, and internal employment metrics, supporting executive-level analysis at Emory.",
    year: "2026",
    stack: ["Data Cleaning", "Power BI", "Healthcare Analytics"]
  },
  {
    title: "Digital Asset Investment Research",
    dek: "Analyzed network catalysts, validator developments, systemic risk, and Solana valuation scenarios through DCF modeling and comparative market research.",
    year: "2026",
    stack: ["Investment Research", "DCF Modeling", "Market Analysis"]
  },
  {
    title: "Global Cloud MSP Content Strategy",
    dek: "Analyzed social engagement metrics, shaped brand concepts, and migrated external blog posts to improve content consistency and accessibility.",
    year: "2025",
    stack: ["Engagement Analytics", "Content Strategy", "Brand Research"]
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
