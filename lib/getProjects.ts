import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getProjects() {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  
  // 1. Get all file names in the folder
  const filenames = fs.readdirSync(projectsDirectory);

  const allProjects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // 2. Use gray-matter to parse the metadata (frontmatter)
    const { data } = matter(fileContent);

    // 3. Return a clean object for the Tracks component
    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "Untitled Project", // Pulls from MDX 'title'
      description: data.description || "",      // Pulls from MDX 'description'
      category: data.category || "Research",
      tags: data.tags || [],
    };
  });

  return allProjects;
}