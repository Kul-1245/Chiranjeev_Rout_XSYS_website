/**
 * lib/blog.ts
 * ------------------------------------------------------------------
 * Blog content. Each post body is an array of blocks so you can write
 * without touching JSX. To add a post, copy an entry and edit it.
 * ------------------------------------------------------------------
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  body: Block[];
};

export const blogCategories = [
  "All",
  "Chemical Engineering",
  "MBA Preparation",
  "Consulting",
  "Leadership",
  "Productivity",
  "Career Growth",
  "Research",
];

export const posts: Post[] = [
  {
    slug: "from-the-lab-to-the-boardroom",
    title: "From the Lab to the Boardroom: Why Engineers Make Sharp Strategists",
    excerpt:
      "The same instincts that make a good process engineer — systems thinking, constraints, evidence — quietly make a good strategist.",
    category: "Career Growth",
    date: "2026-05-28",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "For five years I have been trained to ask one question before any other: what is the system, and where are its constraints? In a refinery that question keeps people safe. In a boardroom it keeps strategy honest.",
      },
      { type: "h", text: "Engineering is constraint-finding" },
      {
        type: "p",
        text: "A process engineer does not start with the answer; they start with the limits — thermodynamic, economic, operational — and design within them. Strategy is the same discipline pointed at a market instead of a reactor.",
      },
      { type: "h", text: "Three habits that transfer" },
      {
        type: "list",
        items: [
          "Systems thinking: nothing moves in isolation; a change upstream shows up three units later.",
          "Evidence over opinion: a number you can defend beats a story you can tell.",
          "Designing for failure: assume the plan breaks, then make it break gracefully.",
        ],
      },
      {
        type: "quote",
        text: "You don't graduate from engineering into business — you carry the rigor across.",
      },
      {
        type: "p",
        text: "That is the bet behind my MBA: not to leave engineering, but to give it a wider surface to act on.",
      },
    ],
  },
  {
    slug: "cat-prep-while-studying-engineering",
    title: "Preparing for CAT Without Pausing Your Degree",
    excerpt:
      "What it actually takes to study for CAT while carrying a full Integrated M.Tech load — and what I'd do differently.",
    category: "MBA Preparation",
    date: "2026-04-12",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The hardest part of CAT 2025 was never the quant. It was running a serious preparation alongside coursework, projects, and batch responsibilities without letting any single one collapse.",
      },
      { type: "h", text: "Treat it like a process, not a sprint" },
      {
        type: "p",
        text: "I split preparation into the three sections and gave each a steady weekly cadence rather than heroic weekend marathons. Consistency compounds; cramming evaporates.",
      },
      { type: "h", text: "What worked" },
      {
        type: "list",
        items: [
          "Structured DILR practice to build pattern recognition under time pressure.",
          "Quant fundamentals first, speed second — accuracy is cheaper to fix than concepts.",
          "Regular full-length mocks to train stamina and section strategy, then honest analysis of every mock.",
        ],
      },
      {
        type: "p",
        text: "The meta-lesson: the exam rewards the same calm, structured execution that consulting and management later demand.",
      },
    ],
  },
  {
    slug: "green-chemistry-textile-finishing",
    title: "Greener by Design: Natural Finishes in Textile Chemistry",
    excerpt:
      "Replacing synthetic moth-proofing with herbal micro-encapsulation — what the research taught me about sustainable formulation.",
    category: "Research",
    date: "2026-03-05",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Functional textile finishes are quietly everywhere — flame retardancy, water repellency, antimicrobial protection, moth resistance. Most rely on chemistries we increasingly want to move away from.",
      },
      { type: "h", text: "The problem with conventional moth-proofing" },
      {
        type: "p",
        text: "Traditional moth-proofing of wool leans on synthetic insecticides. Effective, but with environmental and health costs that a more conscious industry is no longer willing to ignore.",
      },
      { type: "h", text: "A herbal, micro-encapsulated alternative" },
      {
        type: "p",
        text: "In my internship project, we screened essential-oil extracts, then applied the strongest performers in combination to woolen fabric using a padding–drying–curing route with herbal micro-encapsulators, validating performance through bio-assay.",
      },
      {
        type: "quote",
        text: "Sustainability is not a constraint on good engineering. Increasingly, it is the definition of it.",
      },
      {
        type: "p",
        text: "Micro-encapsulation matters because it controls release — durability is often the real bottleneck for natural finishes, not initial efficacy.",
      },
    ],
  },
  {
    slug: "structured-thinking-consulting",
    title: "Structured Thinking: The One Skill Consulting Actually Teaches",
    excerpt:
      "Frameworks come and go. The durable skill is turning a vague question into a clear, testable structure.",
    category: "Consulting",
    date: "2026-02-02",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "My time at Primus Partners taught me less about any single framework and more about a posture: refuse to answer a fuzzy question until you have made it sharp.",
      },
      { type: "h", text: "From mess to structure" },
      {
        type: "list",
        items: [
          "Define the real question, not the question you were handed.",
          "Break it into parts that are mutually exclusive and collectively exhaustive.",
          "Decide what evidence would change your mind — then go find it.",
        ],
      },
      {
        type: "p",
        text: "Engineers will recognise this immediately: it is a flowsheet for thought. That is why the two disciplines fit together so naturally.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
