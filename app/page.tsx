import Hero from "@/app/Components/Hero";
import Tracks from "./Components/Track";
import ProjectDocumentation from "./Components/ProjectDocumentation";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* <div className="h-56 w-56 bg-red-500 dark:bg-green-500 absolute right-0"></div> */}
      <Hero />
      <ProjectDocumentation />
      <Tracks />
      {/* Next sections: Tracks, Frameworks, Featured Essays */}

      {/* <Link href="/project"></Link> */}
    </>
  );
}