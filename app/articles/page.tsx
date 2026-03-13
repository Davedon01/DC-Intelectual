import fs from "fs";
import path from "path";
import Link from "next/link";

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
    <section className="max-w-5xl mx-auto px-6 py-20">

      <div className="mb-16">
        <h1 className="text-4xl font-serif mb-4">
          Articles
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400">
          Short essays, reflections, and intellectual explorations.
        </p>
      </div>

      <div className="space-y-10">

        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>

            <article className="border-b pb-8 cursor-pointer group">

              <h2 className="text-2xl font-serif mb-2 group-hover:underline">
                {article.title}
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                {article.description}
              </p>

              <span className="text-sm text-neutral-500">
                {article.date}
              </span>

            </article>

          </Link>
        ))}

      </div>
    </section>
  );
}