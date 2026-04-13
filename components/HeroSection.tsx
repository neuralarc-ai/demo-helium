export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute left-1/2 top-40 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Helium AI Demo Gallery
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted/80 sm:text-xl">
          AI orchestration workflows, demos, and real-world use cases
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted/60">
          Helium AI connects specialized agents, tools, and data sources into
          seamless workflows. Explore demos that show how orchestration turns
          complex multi-step tasks into one-click operations — from student
          study plans to enterprise automation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-[#212121] shadow-lg transition-all duration-300 hover:bg-primary/80 hover:shadow-xl hover:scale-105"
          >
            Explore Demos
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-8 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:scale-105"
          >
            <svg
              className="h-4 w-4 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Workflow Videos
          </a>
        </div>
      </div>
    </section>
  );
}
