export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  prompt: string;
  result: string;
  badges: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

export const categories: Category[] = [
  {
    id: "orchestration",
    title: "Orchestration Demos",
    description:
      "See how Helium AI coordinates multi-step workflows across agents, tools, and data pipelines in real time.",
    videos: [
      {
        id: "orch-1",
        title: "Multi-Agent Pipeline",
        description:
          "Watch Helium orchestrate three specialized agents to process, analyze, and summarize a dataset end-to-end.",
        thumbnail: "/thumbnails/orch-1.jpg",
        prompt: "Orchestrate data pipeline for Q4 sales report",
        result:
          "Helium AI coordinated Prism (extraction) → Helix (analysis) → Nova (summary) in 4.2s",
        badges: ["Workflow", "AI Agent"],
      },
      {
        id: "orch-2",
        title: "Real-Time Event Processing",
        description:
          "Helium reacts to streaming events, routing each to the right handler with zero manual config.",
        thumbnail: "/thumbnails/orch-2.jpg",
        prompt: "Process incoming webhook events in real time",
        result:
          "Helium AI routed 1,200 events/sec across 5 micro-agents with 99.8% accuracy",
        badges: ["Workflow", "Research"],
      },
      {
        id: "orch-3",
        title: "Conditional Branching Flow",
        description:
          "Dynamic workflow that adapts its path based on intermediate AI outputs and confidence scores.",
        thumbnail: "/thumbnails/orch-3.jpg",
        prompt: "Run adaptive analysis with confidence gating",
        result:
          "Helium AI branched to deep-analysis path after initial confidence scored 0.72 (threshold: 0.8)",
        badges: ["AI Agent", "Research"],
      },
      {
        id: "orch-4",
        title: "Tool-Augmented Generation",
        description:
          "Helium equips agents with external tools — search, code execution, and database queries — on the fly.",
        thumbnail: "/thumbnails/orch-4.jpg",
        prompt: "Answer complex question using tool-augmented reasoning",
        result:
          "Helium AI invoked 3 tools (web search, SQL, calculator) and synthesized a verified answer",
        badges: ["AI Agent", "Workflow"],
      },
    ],
  },
  {
    id: "student",
    title: "Student Use Cases",
    description:
      "Explore how students leverage Helium AI to accelerate learning, research, and academic projects.",
    videos: [
      {
        id: "stu-1",
        title: "AI Study Plan Generator",
        description:
          "Helium creates a personalized weekly study plan based on syllabus, deadlines, and learning style.",
        thumbnail: "/thumbnails/stu-1.jpg",
        prompt: "Generate student study plan for finals week",
        result:
          "Helium AI orchestrated workflow using Prism + Helix to build a 7-day adaptive plan",
        badges: ["Students", "AI Agent"],
      },
      {
        id: "stu-2",
        title: "Research Paper Summarizer",
        description:
          "Upload a paper and get a structured summary with key findings, methodology, and citations.",
        thumbnail: "/thumbnails/stu-2.jpg",
        prompt: "Summarize this 40-page ML research paper",
        result:
          "Helium AI extracted 12 key findings, 3 methodology notes, and 8 citation links in 6s",
        badges: ["Students", "Research"],
      },
      {
        id: "stu-3",
        title: "Flashcard Auto-Builder",
        description:
          "Helium parses lecture notes and generates spaced-repetition flashcards automatically.",
        thumbnail: "/thumbnails/stu-3.jpg",
        prompt: "Create flashcards from Chapter 5 biology notes",
        result:
          "Helium AI generated 34 flashcards with difficulty ratings and spaced-repetition schedule",
        badges: ["Students", "Workflow"],
      },
      {
        id: "stu-4",
        title: "Essay Outline Assistant",
        description:
          "Get a structured essay outline with thesis suggestions, argument flow, and source recommendations.",
        thumbnail: "/thumbnails/stu-4.jpg",
        prompt: "Build essay outline on climate change policy",
        result:
          "Helium AI produced a 5-section outline with 3 thesis options and 12 source suggestions",
        badges: ["Students", "Research"],
      },
    ],
  },
  {
    id: "business",
    title: "Business Automation",
    description:
      "Discover how teams use Helium AI to automate repetitive tasks, streamline ops, and ship faster.",
    videos: [
      {
        id: "biz-1",
        title: "Invoice Processing Pipeline",
        description:
          "Helium extracts line items from invoices, validates totals, and pushes to accounting software.",
        thumbnail: "/thumbnails/biz-1.jpg",
        prompt: "Process batch of 50 vendor invoices",
        result:
          "Helium AI processed 50 invoices in 18s — flagged 3 discrepancies for human review",
        badges: ["Workflow", "AI Agent"],
      },
      {
        id: "biz-2",
        title: "Customer Support Triage",
        description:
          "Incoming tickets are classified, prioritized, and routed to the right team automatically.",
        thumbnail: "/thumbnails/biz-2.jpg",
        prompt: "Triage 200 support tickets by urgency and category",
        result:
          "Helium AI classified tickets with 96% accuracy — escalated 12 critical issues instantly",
        badges: ["AI Agent", "Workflow"],
      },
      {
        id: "biz-3",
        title: "Meeting Notes to Action Items",
        description:
          "Helium transcribes meetings and extracts action items with owners and deadlines.",
        thumbnail: "/thumbnails/biz-3.jpg",
        prompt: "Extract action items from 45-min product meeting",
        result:
          "Helium AI identified 8 action items, assigned 5 owners, and set 3 deadline reminders",
        badges: ["Workflow", "Research"],
      },
      {
        id: "biz-4",
        title: "Competitive Analysis Report",
        description:
          "Helium gathers market data, compares features, and generates a formatted comparison report.",
        thumbnail: "/thumbnails/biz-4.jpg",
        prompt: "Generate competitive analysis for SaaS CRM market",
        result:
          "Helium AI analyzed 8 competitors across 15 dimensions and produced a 12-page report",
        badges: ["Research", "AI Agent"],
      },
    ],
  },
  {
    id: "research",
    title: "Research Workflows",
    description:
      "Advanced research pipelines — from literature review to data analysis to hypothesis testing.",
    videos: [
      {
        id: "res-1",
        title: "Literature Review Automation",
        description:
          "Helium searches databases, filters relevant papers, and builds an annotated bibliography.",
        thumbnail: "/thumbnails/res-1.jpg",
        prompt: "Conduct literature review on transformer architectures",
        result:
          "Helium AI reviewed 240 papers, shortlisted 18, and generated annotated bibliography",
        badges: ["Research", "AI Agent"],
      },
      {
        id: "res-2",
        title: "Dataset Cleaning & Prep",
        description:
          "Automated data cleaning — handles missing values, outliers, normalization, and feature engineering.",
        thumbnail: "/thumbnails/res-2.jpg",
        prompt: "Clean and prepare customer churn dataset",
        result:
          "Helium AI fixed 342 missing values, removed 12 outliers, engineered 5 new features",
        badges: ["Research", "Workflow"],
      },
      {
        id: "res-3",
        title: "Hypothesis Testing Pipeline",
        description:
          "Helium runs statistical tests, checks assumptions, and reports results with confidence intervals.",
        thumbnail: "/thumbnails/res-3.jpg",
        prompt: "Test hypothesis: feature X improves retention",
        result:
          "Helium AI ran t-test (p=0.003), confirmed significance at 95% CI [0.12, 0.38]",
        badges: ["Research", "Students"],
      },
      {
        id: "res-4",
        title: "Knowledge Graph Builder",
        description:
          "Extract entities and relationships from documents to build an interactive knowledge graph.",
        thumbnail: "/thumbnails/res-4.jpg",
        prompt: "Build knowledge graph from 20 medical case studies",
        result:
          "Helium AI extracted 156 entities, 89 relationships, and generated interactive graph",
        badges: ["Research", "AI Agent"],
      },
    ],
  },
];
