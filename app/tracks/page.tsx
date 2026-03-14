import { getProjects } from "@/lib/getProjects";
import Tracks from "@/app/Components/Track";

export default async function TracksPage() {
  const allProjects = await getProjects();
  
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-serif mb-2">Learning Tracks</h1>
        <p className="text-neutral-500 mb-10">Structured paths through our research and archives.</p>
      </div>
      <Tracks projects={allProjects} />
    </main>
  );
}