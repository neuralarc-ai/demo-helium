import type { Video } from "@/lib/data";
import ResultPreview from "./ResultPreview";
import UsecaseBadge from "./UsecaseBadge";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-muted shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail / Video area */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#2a2a2a]">
        {/* Gradient placeholder for thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg
              className="ml-1 h-6 w-6 text-[#212121]"
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
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-base font-semibold text-[#212121] leading-snug">
          {video.title}
        </h3>
        <p className="text-sm text-[#212121]/70 leading-relaxed">
          {video.description}
        </p>

        {/* AI Result Preview */}
        <ResultPreview prompt={video.prompt} result={video.result} />

        {/* Badges */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {video.badges.map((badge) => (
            <UsecaseBadge key={badge} label={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
