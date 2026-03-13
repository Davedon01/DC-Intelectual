import fs from "fs";
import path from "path";
import Link from "next/link";

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
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Intellectual Projects
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A growing archive of independent intellectual work, research, and
          structured explorations across psychology, systems thinking,
          behavioral analysis, and interdisciplinary study.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <article className="group relative cursor-pointer">
              {/* Book Cover */}
              <div className="aspect-3/2 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl mb-3 leading-snug group-hover:text-neutral-900 dark:group-hover:text-white transition">
                    {project.title}
                  </h2>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <span className="text-xs text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition mt-6">
                  Open project →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
