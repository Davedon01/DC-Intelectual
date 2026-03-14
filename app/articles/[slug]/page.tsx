import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import GiscusComments from "@/app/Components/GiscusComments";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "articles",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">

      <div className="prose dark:prose-invert max-w-none">

        <MDXRemote source={source} />

      </div>
       
        <div className="mt-4">
            <GiscusComments />``
        </div>

    </article>

    
  );
}