import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <div id="demos" className="scroll-mt-8">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        {/* Footer */}
        <footer className="py-4 text-center">
          <p className="text-xs text-helium-cream/40">
            Built with Helium AI — orchestrating intelligence, one workflow at a time.
          </p>
        </footer>
      </div>
    </main>
  );
}
