import type { ObsidianResponse, Project } from "@/types";

const baseUrl = "http://127.0.0.1:27123/vault/Portfolio/Werk/";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.VAULT_TOKEN,
    Accept: "application/vnd.olrapi.note+json",
  },
};

const getProjects = async (): Promise<Project[] | undefined> => {
  // Get markdown files from folder
  const files = await fetch(baseUrl, options).then((res) =>
    res.json().then((data) => {
      return data.files;
    })
  );

  // Read each file content
  const projectsPromises = files.map((file: string) =>
    fetch(baseUrl + file, options).then((res) => res.json())
  );

  const obsidianResponse = (await Promise.all(
    projectsPromises
  )) as ObsidianResponse[];

  // Map to Project type
  const projects = obsidianResponse.map((project) => {
    const cleanedContent = project.content.replace(/---\n[\s\S]*?---\n/, "");

    return {
      title: project.frontmatter.title,
      keywords: project.frontmatter.keywords,
      slug: project.frontmatter.slug,
      created: project.frontmatter.created,
      subtitle: project.frontmatter.subtitle,
      services: project.frontmatter.services,
      product: project.frontmatter.product,
      introduction: project.frontmatter.introduction,
      content: cleanedContent,
    };
  });

  return projects;
};

const getProject = async (slug: string): Promise<Project | undefined> => {
  const project = await fetch(baseUrl + slug + ".md", options).then((res) =>
    res.json()
  );

  const cleanedContent = project.content.replace(/---\n[\s\S]*?---\n/, "");

  return {
    title: project.frontmatter.title,
    keywords: project.frontmatter.keywords,
    slug: project.frontmatter.slug,
    created: project.frontmatter.created,
    subtitle: project.frontmatter.subtitle,
    services: project.frontmatter.services,
    product: project.frontmatter.product,
    introduction: project.frontmatter.introduction,
    content: cleanedContent,
  };
};

export { getProjects, getProject };
