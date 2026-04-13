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
          "Helium AI coordinated Prism → Helix → Nova in 4.2s",
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
          "Routed 1,200 events/sec across 5 micro-agents with 99.8% accuracy",
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
          "Branched to deep-analysis after confidence scored 0.72 (threshold: 0.8)",
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
          "Invoked 3 tools (web search, SQL, calculator) and synthesized a verified answer",
        badges: ["AI Agent", "Workflow"],
      },
    ],
  },
];
