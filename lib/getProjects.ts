import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects"); // adjust to your path

export function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse the metadata section of the MDX
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled Project",
      description: data.description || "No description available.",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
    };
  });
}