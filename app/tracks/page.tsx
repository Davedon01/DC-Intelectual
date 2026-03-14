import { getProjects } from "@/lib/getProjects";
import Tracks from "@/app/Components/Track";
import img from "@/public/Track-page-dc-intelectual.webp"

export default async function TracksPage() {
  const allProjects = await getProjects();
  
  return (
    <main className="min-h-screen">
      {/* Header Section with Static Background */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden bg-cover bg-center bg-fixed"
               style={{ backgroundImage: `url(${img.src})` }}>
        
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-serif mb-4 text-neutral-900 dark:text-white">
            Learning Tracks
          </h1>
          <p className="text-xl text-neutral-800 dark:text-neutral-300 max-w-2xl leading-relaxed">
            A structured archive of psychological studies, behavioral frameworks, 
            and analytical explorations into human nature.
          </p>
        </div>
      </section>

      {/* Tracks Component (White/Neutral background as usual) */}
      <div className="relative z-10 bg-neutral-50 dark:bg-neutral-950">
        <Tracks projects={allProjects} />
      </div>
    </main>
  );
}