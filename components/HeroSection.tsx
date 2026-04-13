"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-helium-pink/6 blur-3xl" />
        <div className="absolute right-1/4 top-16 h-64 w-64 rounded-full bg-helium-blue/6 blur-3xl" />
        <div className="absolute left-1/2 top-32 h-48 w-48 -translate-x-1/2 rounded-full bg-helium-yellow/4 blur-3xl" />
      </div>

      <div
        className="relative mx-auto max-w-3xl text-center transition-all duration-1000 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h1 className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Helium AI Demo Gallery
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-helium-cream/70 sm:text-lg">
          AI orchestration workflows, demos, and real-world use cases
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-helium-cream/40">
          Helium AI connects specialized agents, tools, and data sources into
          seamless workflows — turning complex multi-step tasks into one-click
          operations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-full bg-helium-pink px-7 py-2.5 text-sm font-semibold text-[#212121] shadow-lg shadow-helium-pink/20 transition-all duration-300 hover:bg-helium-pink/80 hover:shadow-xl hover:shadow-helium-pink/30 hover:scale-105"
          >
            Explore Demos
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
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
            className="inline-flex items-center gap-2 rounded-full border border-helium-blue/40 px-7 py-2.5 text-sm font-semibold text-helium-blue transition-all duration-300 hover:border-helium-blue hover:bg-helium-blue/10 hover:scale-105"
          >
            <svg
              className="h-3.5 w-3.5 text-helium-yellow"
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
