import fs from "fs";
import path from "path";
import Link from "next/link"; // Import Link
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  const titleMatch = source.match(/^title:\s*["']?(.+?)["']?$/m);
  const descriptionMatch = source.match(/^description:\s*["']?(.+?)["']?$/m);
  const categoryMatch = source.match(/^category:\s*["']?(.+?)["']?$/m);

  const displayTitle = titleMatch ? titleMatch[1].trim() : slug.replace(/-/g, " ");
  const displayDesc = descriptionMatch ? descriptionMatch[1].trim() : null;
  const displayCat = categoryMatch ? categoryMatch[1].trim() : "Research";

  const cleanSource = source.replace(/^(title|description|category|tags):.*$/gm, "").trim();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-10">
        <span className="text-xs font-bold tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-4 block">
          {displayCat}
        </span>
        
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-6 leading-tight">
          {displayTitle}
        </h1>

        {displayDesc && (
          <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
            {displayDesc}
          </p>
        )}
      </header>

      <article className="prose prose-neutral dark:prose-invert max-w-none 
        prose-headings:font-serif prose-headings:font-normal 
        prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300
        prose-strong:text-neutral-900 dark:prose-strong:text-white">
        <MDXRemote source={cleanSource} />
      </article>

      {/* FIXED FOOTER: Changed button to Link to avoid Runtime Error */}
      <footer className="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800">
        <Link 
          href="/projects"
          className="text-sm font-medium text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
        >
          ← Back to archive
        </Link>
      </footer>
    </div>
  );
}