export interface Video {
  id: string;
  title: string;
  src: string;
  prompt: string;
  badges: string[];
}

export interface Category {
  id: string;
  title: string;
  videos: Video[];
}

const CDN = process.env.NEXT_PUBLIC_CDN_URL ?? "";

export const categories: Category[] = [
  {
    id: "orchestration",
    title: "Orchestration Demos",
    videos: [
      {
        id: "orch-1",
        title: "Resume Builder",
        src: `${CDN}/resume-use-case.mp4`,
        prompt:
          "Generate a professional CV for a job seeker with the following profile:\nName: Alex Morgan\nExperience: 15 years in Artificial Intelligence and Machine Learning\nCurrent affiliation: LNNC (Lead Researcher and Principal AI Architect)\nActively seeking: Senior AI leadership roles or Chief AI Officer positions\n\nBuild out a complete, realistic career history across 15 years that includes:\nProgression from engineer to leadership\nProjects involving LLMs, computer vision, NLP, and autonomous systems\nPublications, patents, or research contributions (generate realistic examples)\nSkills section covering both technical and leadership competencies\nEducation with relevant postgraduate qualifications\n\nDesign requirements:\nBlack and white only, no colour\nClean, minimal layout with clear typographic hierarchy\nATS-friendly formatting\nNo icons, no sidebar columns, no decorative elements\nDeliver as a formatted Word document ready for download",
        badges: ["Workflow", "AI Agent"],
      },
      {
        id: "orch-2",
        title: "Multi-Format Research Showcase",
        src: `${CDN}/research-use-case.mp4`,
        prompt:
          "Research the global impact of generative AI on the creative industry in 2024 and 2025. Cover key statistics, industry disruption, economic impact, and emerging opportunities for creators.\n\nOnce the research is complete, do all of the following:\n1. Create a well-structured written report as a formatted document with sections for Executive Summary, Key Findings, Industry Impact, Economic Data, and Opportunities.\n2. Build a clean, minimal website using Orbit that presents this research visually. Use a dark background, clear section headers, and data callouts.\n3. Generate a bold editorial-style image that represents the theme of AI and human creativity merging. Use abstract visual language.\n4. Record a short audio summary (90 seconds) that I can use as a podcast intro or explainer. Keep the tone professional but conversational.\n\nDeliver all four outputs together.",
        badges: ["Research", "Workflow"],
      },
      {
        id: "orch-3",
        title: "Founder Business Plan as a Website",
        src: `${CDN}/business-plan-use-case.mp4`,
        prompt:
          "I have a business idea: an AI-powered personal finance coach that uses behavioural psychology to help millennials build better money habits through daily micro-actions and accountability nudges. Research this concept thoroughly. Then do the following:\n1. Build a complete business plan including: problem statement, solution, target market, go-to-market strategy, competitive landscape, and 3-year revenue projections with assumptions.\n2. Create a market comparison table showing the top 5 competitors, their pricing, weaknesses, and how this product differentiates.\n3. Develop a revenue model covering freemium tiers, premium subscription, and B2B licensing to employers or banks.\n4. Deliver everything as a sleek, minimal website using Orbit. Design it with a rust, navy, olive, and charcoal colour palette. Use a geometric or fine-grid pattern as the background texture. Typography should be clean and editorial. This website should look investor-ready on its own.",
        badges: ["AI Agent", "Workflow"],
      },
      {
        id: "orch-4",
        title: "AIM Demo",
        src: `${CDN}/aim-use-case.mp4`,
        prompt:
          "I want to get started with the business pretty soon. I have a knowledge base with several business ideas I've been collecting. I need you to go through all of them carefully and identify the single best idea I can realistically launch within my $10,000 budget — one that has a strong chance of generating revenue within the first three months.\n\nBefore recommending anything, research each idea thoroughly. Look at current market demand, competition landscape, startup costs, and how quickly similar businesses typically reach profitability. Then tell me clearly which one you're backing and why it beats the others given my constraints.\n\nOnce you've chosen the best idea, build me a complete business plan — covering the concept, target audience, go-to-market strategy, pricing model, revenue projections, and the key risks I need to manage.\n\nThen produce these deliverables for me: first, build me a clean and professional website for the business that I can use to start taking customers from day one. Second, generate a short advertisement video for the business that I can run on social media to drive early awareness. Third, an investor pitch audio file where you walk through the business concept, the opportunity, why now, and what the $10,000 gets us — spoken naturally as if presenting to a real investor. Fourth, an Excel revenue model breaking down month-by-month income, costs, and profit for the first 12 months so I can track performance. Fifth, a PDF research report covering the market analysis, competitive landscape, and the reasoning behind why this business idea was selected over the others.\n\nKeep everything grounded in reality — I want to move fast and I need a plan I can actually execute.",
        badges: ["AI Agent", "Research"],
      },
    ],
  },
];
