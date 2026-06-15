/**
 * lib/data.ts
 * ------------------------------------------------------------------
 * Single source of truth for the site's content.
 * Edit values here and the whole site updates.
 *
 * Items marked  // TODO  are placeholders — replace with your real
 * links, email, photo and any metrics you want to show.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "Chiranjeev Rout",
  roles: ["Chemical Engineer", "Researcher", "Future Business Leader"],
  tagline:
    "Turning the rigor of the lab into the clarity of the boardroom — building at the intersection of engineering, research, and strategy.",
  // The exact institutional line, used verbatim across the site.
  institutionLine:
    "I am currently pursuing Integrated M.Tech in Chemical Engineering at the Institute of Chemical Technology, Mumbai.",
  location: "Bhubaneswar, India",
  email: "chiranjeev.rout@example.com", // TODO: your real email
  links: {
    linkedin: "https://www.linkedin.com/in/chiranjeev-rout", // TODO: confirm handle
    github: "https://github.com/chiranjeev-rout", // TODO or remove
    resume: "/resume.pdf", // TODO: drop your PDF into /public/resume.pdf
    twitter: "", // TODO optional
  },
  // Drop a square headshot at /public/profile.jpg to replace the placeholder.
  photo: "/profile.jpg",
};

export const about = {
  lead: "Engineer by training, strategist by intent.",
  paragraphs: [
    "I am a final-stage Integrated M.Tech student in Chemical Engineering at the Institute of Chemical Technology (ICT), Mumbai — one of India's most rigorous chemical engineering institutions. My work sits where molecular-scale science meets real industrial and commercial decisions.",
    "Over five years I have moved fluidly between the lab and the boardroom: sustainable-materials and textile-chemistry research, refinery and process exposure at IOCL and Paradeep Phosphates, R&D at the Indian Oil R&D Centre, and management consulting at Primus Partners. That range taught me to translate technical depth into decisions people can act on.",
    "I am now heading to Xavier Institute of Management, Bhubaneswar (XIMB) for an MBA, with a clear ambition: to lead at the meeting point of technology, strategy, and management — combining hard engineering credibility with the judgment to build and scale impact.",
  ],
};

/** About-section milestone timeline */
export const milestones = [
  {
    year: "2021",
    title: "Began Integrated M.Tech at ICT",
    detail: "Joined the 2021–26 Integrated M.Tech in Chemical Engineering.",
  },
  {
    year: "2023",
    title: "Industrial exposure",
    detail: "Refinery and process internships at IOCL and Paradeep Phosphates.",
  },
  {
    year: "2024",
    title: "Research deepens",
    detail:
      "Sustainable-materials and textile-finishing research; R&D at Indian Oil R&D Centre.",
  },
  {
    year: "2025",
    title: "Consulting + CAT",
    detail:
      "Business consulting at Primus Partners; CAT 2025 alongside coursework.",
  },
  {
    year: "2026",
    title: "MBA at XIMB",
    detail: "Admitted to the MBA-BM 2026–28 cohort at XIMB, Bhubaneswar.",
  },
];

export const education = [
  {
    degree: "Integrated M.Tech, Chemical Engineering",
    school: "Institute of Chemical Technology (ICT), Mumbai",
    period: "2021 — 2026",
    location: "ICT–IOC Campus, Bhubaneswar",
    highlights: [
      "Five-year integrated programme spanning core chemical engineering and an M.Tech specialisation.",
      "Student representative for the I.M.Tech 2021–26 batch, handling formal institutional correspondence.",
      "Consistent record of academic and extracurricular recognition.",
    ],
    coursework: [
      "Transport Phenomena",
      "Chemical Reaction Engineering",
      "Process Design & Simulation",
      "Material Science",
      "Textile Chemistry & Finishing",
      "Thermodynamics",
    ],
    interests: [
      "Sustainable materials",
      "Textile chemistry",
      "Material characterization",
      "Process intensification",
    ],
  },
  {
    degree: "MBA (Business Management) — Incoming",
    school: "Xavier Institute of Management, Bhubaneswar (XIMB)",
    period: "2026 — 2028",
    location: "Bhubaneswar",
    highlights: [
      "Admitted to the MBA-BM 2026–28 cohort.",
      "Transitioning from technical depth toward strategy, consulting, and general management.",
    ],
    coursework: [
      "Strategy",
      "Finance",
      "Marketing",
      "Operations",
      "Business Analytics",
    ],
    interests: ["Management consulting", "Strategy", "Tech-enabled operations"],
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  type: "Consulting" | "Industry" | "R&D" | "Research";
  summary: string;
  contributions: string[];
  skills: string[];
  impact: string;
};

export const experiences: Experience[] = [
  {
    org: "Primus Partners India",
    role: "Business & Consulting Intern",
    period: "2025",
    type: "Consulting",
    summary:
      "Management-consulting engagement focused on impact realization, research, and client-ready deliverables.",
    contributions: [
      "Supported impact-realization projects with structured analysis and synthesis.",
      "Authored and refined client reports and data-backed narratives.",
      "Ran secondary research and data collection across multiple domains.",
    ],
    skills: ["Market research", "Report writing", "Data analysis", "Strategy"],
    impact:
      "Translated dense technical and policy material into decision-ready insight for client teams.",
  },
  {
    org: "Indian Oil R&D Centre",
    role: "Research Intern",
    period: "2024",
    type: "R&D",
    summary:
      "R&D exposure at one of India's leading energy research centres.",
    contributions: [
      "Worked alongside research teams on applied process and materials problems.",
      "Built familiarity with industrial-grade characterization and testing workflows.",
    ],
    skills: ["Experimental design", "Characterization", "Scientific writing"],
    impact: "Connected lab-scale findings to industrial process realities.",
  },
  {
    org: "Indian Oil Corporation Limited (IOCL)",
    role: "Refinery Intern",
    period: "2023",
    type: "Industry",
    summary:
      "Hands-on refinery exposure across core unit operations and process units.",
    contributions: [
      "Studied refinery unit operations and process flow end to end.",
      "Documented process understanding and safety practices on site.",
    ],
    skills: ["Process engineering", "Plant operations", "Process safety"],
    impact:
      "Grounded classroom theory in the realities of a live, large-scale refinery.",
  },
  {
    org: "Paradeep Phosphates Limited",
    role: "Process Intern",
    period: "2023",
    type: "Industry",
    summary:
      "Process-plant internship in fertilizer and phosphates manufacturing.",
    contributions: [
      "Mapped production processes and material flows across the plant.",
      "Observed quality-control and process-optimization practices.",
    ],
    skills: ["Process analysis", "Quality control", "Plant operations"],
    impact: "Built a working picture of continuous chemical manufacturing.",
  },
];

export type Project = {
  title: string;
  category: "Research" | "Materials" | "Textile" | "Process" | "Capstone";
  problem: string;
  method: string;
  result: string;
  skills: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Moth-Proof Finishing of Wool via Herbal Micro-encapsulation",
    category: "Textile",
    problem:
      "Conventional moth-proofing of woolen fabric relies on synthetic insecticides with environmental and health concerns.",
    method:
      "Screened essential-oil extracts and applied the best performers in combination to wool using a padding–drying–curing route with herbal micro-encapsulators; evaluated via bio-assay.",
    result:
      "Identified high-performing natural extract combinations delivering moth resistance with a greener finishing chemistry.",
    skills: ["Experimental design", "Bio-assay", "Formulation"],
    tech: ["Micro-encapsulation", "Pad-dry-cure", "Essential-oil extracts"],
  },
  {
    title: "Sustainable Materials & Cellulose / Hydrogel Research",
    category: "Materials",
    problem:
      "Demand for bio-based, sustainable material systems for absorbent and functional applications.",
    method:
      "Explored cellulose- and hydrogel-based systems, characterizing structure–property relationships.",
    result:
      "Developed insight into how green material design can replace conventional, less sustainable alternatives.",
    skills: ["Material science", "Characterization", "Literature review"],
    tech: ["Cellulose", "Hydrogels", "Polymer characterization"],
  },
  {
    title: "Functional Textile Finishing — Comparative Study",
    category: "Textile",
    problem:
      "Different functional finishes (flame-retardant, water-repellent, antimicrobial, wrinkle-resistant) trade off performance, durability, and sustainability.",
    method:
      "Studied and compared finishing chemistries and application methods across multiple functional finish families.",
    result:
      "Synthesised a comparative understanding of mechanism, durability, and process trade-offs across finishes.",
    skills: ["Textile chemistry", "Analysis", "Scientific writing"],
    tech: ["Functional finishes", "Surface chemistry"],
  },
  {
    title: "Material Characterization Studies",
    category: "Research",
    problem:
      "Reliable property data is the backbone of any materials decision.",
    method:
      "Applied standard material-characterization techniques to relate structure to performance.",
    result:
      "Built a repeatable workflow for turning raw characterization data into actionable conclusions.",
    skills: ["Characterization", "Data analysis", "Experimental design"],
    tech: ["Analytical instrumentation", "Data analysis"],
  },
  {
    title: "Industrial Process Analysis (IOCL / Paradeep)",
    category: "Process",
    problem:
      "Large-scale chemical and refinery processes are complex systems where small inefficiencies compound.",
    method:
      "Mapped unit operations, material flows, and control practices across refinery and fertilizer plants.",
    result:
      "Produced clear process documentation linking theory to operating reality.",
    skills: ["Process engineering", "Systems thinking", "Documentation"],
    tech: ["Refinery units", "Process flow"],
  },
  {
    title: "Capstone — Engineering meets Business",
    category: "Capstone",
    problem:
      "Technical solutions only create value when they are commercially and operationally viable.",
    method:
      "Combined process understanding with market and feasibility analysis to frame an engineering problem as a business case.",
    result:
      "Demonstrated how engineering rigor and business framing reinforce one another.",
    skills: ["Problem solving", "Strategy analysis", "Presentation"],
    tech: ["Feasibility analysis", "Business case"],
  },
];

export const projectCategories = [
  "All",
  "Research",
  "Materials",
  "Textile",
  "Process",
  "Capstone",
] as const;

export type SkillGroup = {
  group: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Engineering",
    skills: [
      { name: "Process Engineering", level: 88 },
      { name: "Chemical Engineering Fundamentals", level: 90 },
      { name: "Material Science", level: 85 },
      { name: "Sustainability", level: 82 },
    ],
  },
  {
    group: "Research",
    skills: [
      { name: "Literature Review", level: 90 },
      { name: "Experimental Design", level: 85 },
      { name: "Data Analysis", level: 84 },
      { name: "Scientific Writing", level: 88 },
    ],
  },
  {
    group: "Business & Consulting",
    skills: [
      { name: "Market Research", level: 86 },
      { name: "Strategy Analysis", level: 82 },
      { name: "Problem Solving", level: 90 },
      { name: "Presentation Skills", level: 88 },
    ],
  },
  {
    group: "Digital Tools",
    skills: [
      { name: "MS Excel", level: 88 },
      { name: "PowerPoint", level: 90 },
      { name: "Data Visualization", level: 80 },
      { name: "AI Productivity Tools", level: 85 },
    ],
  },
];

/** Animated-counter stats for the achievements wall */
export const stats = [
  { value: 4, suffix: "+", label: "Internships across consulting, R&D & industry" },
  { value: 6, suffix: "+", label: "Research & technical projects" },
  { value: 5, suffix: "yr", label: "Integrated M.Tech journey" },
  { value: 1, suffix: "", label: "MBA admission secured (XIMB)" },
];

export type Achievement = {
  title: string;
  detail: string;
  kind: "Academic" | "Award" | "Certification" | "Leadership" | "Competition";
};

export const achievements: Achievement[] = [
  {
    title: "MBA Admission — XIMB",
    detail: "Selected for the MBA-BM 2026–28 cohort at Xavier Institute of Management, Bhubaneswar.",
    kind: "Academic",
  },
  {
    title: "Batch Student Representative",
    detail: "Elected representative for the I.M.Tech 2021–26 batch at ICT–IOC Bhubaneswar.",
    kind: "Leadership",
  },
  {
    title: "Academic & Extracurricular Recognition",
    detail: "Multiple academic and extracurricular awards through the Integrated M.Tech programme.", // TODO: add specific award names
    kind: "Award",
  },
  {
    title: "CAT 2025",
    detail: "Prepared for and appeared in CAT 2025 alongside full academic coursework.",
    kind: "Competition",
  },
  {
    title: "Consulting Engagement — Primus Partners",
    detail: "Delivered research and impact-realization work in a professional consulting setting.",
    kind: "Certification",
  },
  {
    title: "Industrial Training Certifications",
    detail: "Completed certified internships at IOCL, Paradeep Phosphates, and Indian Oil R&D Centre.",
    kind: "Certification",
  },
];

export const vision = {
  lead: "Where I am headed",
  statement:
    "I want to build at the seam between deep technology and decisive management — using engineering rigor to make better strategic calls, and business judgment to turn research into real-world impact.",
  pillars: [
    {
      title: "Pursue the MBA",
      body: "Convert technical depth into strategic and managerial range at XIMB, and learn to lead teams, not just solve problems.",
    },
    {
      title: "Consulting & business leadership",
      body: "Work at the frontier of strategy and operations, where structured thinking turns ambiguity into action.",
    },
    {
      title: "Impact through technology",
      body: "Build and scale solutions where engineering and management reinforce each other to create durable value.",
    },
    {
      title: "Keep learning, keep building",
      body: "Treat curiosity as a discipline — compounding skills across science, business, and leadership over a career.",
    },
  ],
};
