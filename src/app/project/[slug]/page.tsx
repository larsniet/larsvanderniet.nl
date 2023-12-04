import { remark } from "remark";
import html from "remark-html";

import { notFound } from "next/navigation";
import { getProject } from "@/utils/data";
import Image from "next/image";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectFooter from "@/components/ProjectFooter";

type Params = {
  slug: string;
};

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.larsvanderniet.nl"
);

export async function generateMetadata({ params }: { params: Params }) {
  const project = await getProject(params.slug);

  if (!project) {
    return {};
  }

  return {
    applicationName: "Lars van der Niet",
    keywords: project.keywords,
    authors: ["Lars van der Niet"],
    title: project.title,
    description: project.subtitle,
    image: `${siteUrl}/images/${project.title.toLowerCase()}.jpeg`,
    date: new Date(project.created).toISOString(),
    metadataBase: siteUrl,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      url: `${siteUrl}project/${project.slug}`,
      siteName: "Lars van der Niet",
      locale: "en_US",
      type: "article",
      // images: [
      //   {
      //     url: project.image,
      //     width: 1200,
      //     height: 630,
      //     alt: project.title,
      //   },
      // ],
      publishedTime: new Date(project.created).toISOString(),
      authors: ["Lars van der Niet"],
    },
  };
}

export default async function ProjectPage({
  params: { slug },
}: {
  params: Params;
}) {
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }

  const date = new Date(project.created).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(project.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="flex min-h-screen flex-col xl:flex-row">
      <ProjectDetails project={project} date={date} />

      <div className="h-full xl:w-2/3">
        <section className="h-screen">
          <Image
            src={`/images/${project.title.toLowerCase()}.jpeg`}
            alt={project.title}
            width={800}
            height={1000}
            className="object-cover h-full w-full"
          />
        </section>

        <section className="p-8 lg:p-32 border-b-[1px] border-[#999]">
          <h2>{project.introduction}</h2>
        </section>

        <section className="section-padding border-b-[1px] border-[#999]">
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>

        <ProjectFooter />
      </div>
    </article>
  );
}
