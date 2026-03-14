import fs from "fs";
import path from "path";
import Link from "next/link";
import img from "@/public/Article-page-DC-Intelectual.webp";

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function ArticlesPage() {
  const directory = path.join(process.cwd(), "content", "articles");

  let articles: Article[] = [];

  try {
    const files = fs.readdirSync(directory);

    articles = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(".mdx", "");
        const filePath = path.join(directory, file);

        const content = fs.readFileSync(filePath, "utf-8");

        const titleMatch = content.match(/title:\s*["']?(.+)["']?/);
        const descriptionMatch = content.match(/description:\s*["']?(.+)["']?/);
        const dateMatch = content.match(/date:\s*["']?(.+)["']?/);

        return {
          slug,
          title: titleMatch ? titleMatch[1] : slug,
          description: descriptionMatch ? descriptionMatch[1] : "",
          date: dateMatch ? dateMatch[1] : "",
        };
      });
  } catch {
    console.warn("Articles folder missing");
  }

  if (articles.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-40 text-center">
        No articles found.
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-white/90 dark:bg-black/80 backdrop-blur-xs" />

      <section className="max-w-3xl mx-auto px-6 py-20 relative z-0">
        <div className="mb-16">
          <h1 className="text-4xl font-serif mb-4 text-neutral-900 dark:text-white">
            Articles
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Short essays, reflections, and intellectual explorations.
          </p>
        </div>

        <div className="space-y-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block group"
            >
              <article className="border-b border-neutral-200 dark:border-neutral-800 pb-10 transition-colors">
                {/* Date */}
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-2 block">
                  {article.date}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-serif mb-3 text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-neutral-700 dark:text-neutral-400 mb-6 leading-relaxed max-w-2xl">
                  {article.description}
                </p>

                {/* "Read Article" Button */}
                <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600/20 dark:border-blue-400/20 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  Read Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
