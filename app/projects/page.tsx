import fs from "fs";
import path from "path";
import Link from "next/link";
import Img from "@/public/Project-page-DC-Intelectual.webp";

interface Project {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
}

export default function ProjectsPage() {
  const directory = path.join(process.cwd(), "content", "projects");

  let projects: Project[] = [];

  try {
    const files = fs.readdirSync(directory);

    projects = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(".mdx", "");
        const filePath = path.join(directory, file);

        const content = fs.readFileSync(filePath, "utf-8");

        // Improved Regex: Handle potential quotes, leading/trailing spaces, and multiline headers
        const titleMatch = content.match(/^title:\s*["']?(.+?)["']?$/m);
        const descriptionMatch = content.match(/^description:\s*["']?(.+?)["']?$/m);
        const categoryMatch = content.match(/^category:\s*["']?(.+?)["']?$/m);
        const tagsMatch = content.match(/^tags:\s*\[(.+?)\]/m);

        return {
          slug,
          title: titleMatch ? titleMatch[1].trim() : slug.replace(/-/g, " "),
          description: descriptionMatch 
            ? descriptionMatch[1].trim() 
            : "Explore this study and analytical framework within our intellectual archive.",
          category: categoryMatch ? categoryMatch[1].trim() : "Research",
          tags: tagsMatch 
            ? tagsMatch[1].split(",").map(tag => tag.trim().replace(/["']/g, "")) 
            : []
        };
      });
  } catch (err) {
    console.warn("Projects folder not found or empty.");
  }

  if (projects.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-40 text-neutral-500 dark:text-neutral-400">
        No projects found.
        <br />
        Add{" "}
        <code className="bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded">
          .mdx
        </code>{" "}
        files inside <code>content/projects</code>.
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Img.src})` }}
      />
      <div className="fixed inset-0 -z-10 bg-white/80 dark:bg-black/80 backdrop-blur-xs" />

      <section className="max-w-3xl mx-auto px-6 py-20 relative z-0">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-neutral-900 dark:text-white">
            Intellectual Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A curated archive of research, behavioral frameworks, and independent intellectual work.
          </p>
        </div>

        {/* Article-style List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="flex flex-col gap-2">
                  {/* Category Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-1">
                    {project.category}
                  </span>
                  
                  <h2 className="text-2xl font-serif text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                      Read Manuscript →
                    </span>
                    {project.tags.length > 0 && (
                       <div className="flex gap-2">
                          {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] text-neutral-400 italic">#{tag}</span>
                          ))}
                       </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className="mt-8 border-b border-neutral-200 dark:border-neutral-800" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}