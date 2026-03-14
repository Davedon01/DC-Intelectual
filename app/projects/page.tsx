import fs from "fs";
import path from "path";
import Link from "next/link";
import Img from "@/public/Project-page-DC-Intelectual.webp"

interface Project {
  title: string;
  slug: string;
  description: string;
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

        const titleMatch = content.match(/title:\s*["']?(.+)["']?/);
        const descriptionMatch = content.match(/description:\s*["']?(.+)["']?/);

        return {
          slug,
          title: titleMatch ? titleMatch[1] : slug.replace(/-/g, " "),
          description: descriptionMatch ? descriptionMatch[1] : "",
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
                  <h2 className="text-2xl font-serif text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                    Load project →
                  </span>
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
