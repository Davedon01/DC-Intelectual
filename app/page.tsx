import Hero from "@/app/Components/Hero";
import { getProjects } from "@/lib/getProjects";
import Tracks from "./Components/Track";
import ProjectDocumentation from "./Components/ProjectDocumentation";

export default async function HomePage() {
  // Fetching projects from your library
  const projects = await getProjects();

  return (
    <main>
      {/* The new Hero now accepts the projects data as a prop */}
      <Hero projects={projects} />
      
      {/* Keeping your existing specialized sections below */}
      <ProjectDocumentation />
      {/* <Tracks projects={[]} /> */}
    </main>
  );
}