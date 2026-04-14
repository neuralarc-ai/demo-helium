"use client";

import { useEffect, useRef, useState } from "react";
import type { Category } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
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
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-helium-blue sm:text-3xl">
          {category.title}
        </h2>
        <Badge className="bg-helium-yellow/15 text-helium-yellow border-helium-yellow/25 text-xs">
          {category.videos.length} demos
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 items-stretch">
        {category.videos.map((video, i) => (
          <div
            key={video.id}
            className="flex transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </section>
  );
}
