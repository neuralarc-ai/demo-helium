"use client";

import { useEffect, useRef, useState } from "react";
import type { Category } from "@/lib/data";
import VideoCard from "./VideoCard";

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
            {category.title}
          </h2>
          <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-bold text-accent">
            {category.videos.length} demos
          </span>
        </div>
        <p className="max-w-2xl text-muted/50 text-sm leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {category.videos.map((video, i) => (
          <div
            key={video.id}
            className="flex transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <VideoCard video={video} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
