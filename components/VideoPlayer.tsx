"use client";

import { useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  title: string;
}

export default function VideoPlayer({
  open,
  onOpenChange,
  src,
  title,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-3xl bg-[#161616] border-white/10 p-0 gap-0 overflow-hidden"
        showCloseButton
      >
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-helium-cream text-base">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 pt-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
