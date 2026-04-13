"use client";

import { useRef } from "react";
import type { Video } from "@/lib/data";
import ResultPreview from "./ResultPreview";
import UsecaseBadge from "./UsecaseBadge";

interface VideoCardProps {
  video: Video;
  index: number;
}

export default function VideoCard({ video, index }: VideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#2a2a2a] shadow-md transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/20"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/8 to-accent/8 transition-opacity duration-500 group-hover:opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/40">
            <svg
              className="ml-0.5 h-5 w-5 text-[#212121]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <h3 className="text-md font-bold text-muted leading-tight">
          {video.title}
        </h3>
        <p className="text-sm text-muted/55 leading-relaxed line-clamp-2">
          {video.description}
        </p>

        <ResultPreview prompt={video.prompt} result={video.result} />

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {video.badges.map((badge) => (
            <UsecaseBadge key={badge} label={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
