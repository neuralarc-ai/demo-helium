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
      <Card className="group h-full border-white/5 bg-[#1e1e1e] pt-0 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-helium-pink/20 hover:shadow-2xl hover:shadow-helium-pink/5">
        {/* Thumbnail */}
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-t-xl bg-[#111]"
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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helium-yellow shadow-lg shadow-helium-yellow/20 transition-transform duration-300 group-hover:scale-110">
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

        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-semibold text-helium-cream">
            {video.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="rounded-lg bg-[#161616] p-2.5 font-mono text-[11px] leading-relaxed">
            <span className="font-semibold text-helium-pink">Prompt: </span>
            <span className="text-helium-cream/50 whitespace-pre-line line-clamp-3">
              {video.prompt}
            </span>
            <button
              onClick={() => setPromptOpen(true)}
              className="mt-1 block text-[10px] font-semibold text-helium-blue hover:text-helium-blue/80 transition-colors"
            >
              View more
            </button>
          </div>
        </CardContent>

        <CardFooter className="border-t-white/5 bg-transparent gap-1.5">
          {video.badges.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              className="border-white/10 bg-white/5 text-[10px] text-helium-cream/70"
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
