"use client";

import { useState } from "react";
import type { Video } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VideoPlayer from "./VideoPlayer";
import PromptDialog from "./PromptDialog";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);

  return (
    <>
      <Card className="group flex h-full flex-col border-white/5 bg-[#1e1e1e] pt-0 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 hover:border-helium-pink/20 hover:shadow-2xl hover:shadow-helium-pink/5">
        {/* Thumbnail */}
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-t-xl bg-[#111] shrink-0"
          onClick={() => setVideoOpen(true)}
        >
          <video
            preload="metadata"
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-helium-yellow shadow-lg shadow-helium-yellow/20 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="ml-0.5 h-6 w-6 text-[#212121]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title — fixed height so all cards align */}
        <CardHeader className="pb-1 shrink-0">
          <CardTitle className="text-base font-bold text-helium-cream min-h-[2.5rem] flex items-start">
            {video.title}
          </CardTitle>
        </CardHeader>

        {/* Prompt area — fixed height with overflow hidden */}
        <CardContent className="pt-0 flex-1 flex flex-col">
          <div className="rounded-lg bg-[#161616] p-3 flex-1 flex flex-col">
            <p className="text-xs font-semibold text-helium-pink mb-1.5 shrink-0">Prompt:</p>
            <p className="text-sm leading-relaxed text-helium-cream/70 overflow-hidden flex-1 max-h-[3.9rem]" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
              {video.prompt.replace(/\n+/g, " ")}
            </p>
            <button
              onClick={() => setPromptOpen(true)}
              className="mt-2 inline-flex items-center gap-1 self-start rounded-md bg-helium-blue/10 px-3 py-1 text-xs font-semibold text-helium-blue transition-colors hover:bg-helium-blue/20 shrink-0 cursor-pointer"
            >
              View more
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </CardContent>

        {/* Badges — always at bottom */}
        <CardFooter className="bg-transparent gap-2 border-t-0 border-none shrink-0 mt-auto">
          {video.badges.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              className="border-white/10 bg-white/5 text-xs text-helium-cream/70"
            >
              {badge}
            </Badge>
          ))}
        </CardFooter>
      </Card>

      <VideoPlayer
        open={videoOpen}
        onOpenChange={setVideoOpen}
        src={video.src}
        title={video.title}
      />

      <PromptDialog
        open={promptOpen}
        onOpenChange={setPromptOpen}
        prompt={video.prompt}
        title={video.title}
      />
    </>
  );
}
