export type Project = {
  title: string;
  keywords: string[];
  slug: string;
  created: string;
  subtitle: string;
  services: string;
  product: string;
  introduction: string;
  content: string;
};

export type ObsidianResponse = {
  tags: string[] | null;
  frontmatter: Project;
  stat: {
    ctime: number;
    mtime: number;
    size: number;
  };
  path: string;
  content: string;
};
