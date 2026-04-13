import type { Category } from "@/lib/data";
import VideoCard from "./VideoCard";

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            {category.title}
          </h2>
          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            {category.videos.length} demos
          </span>
        </div>
        <p className="max-w-2xl text-muted/70 text-base leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {category.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
