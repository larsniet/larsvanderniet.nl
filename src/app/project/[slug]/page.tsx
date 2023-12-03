import { notFound } from "next/navigation";
import projects from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

import outline from "@/assets/logo_outline.png";

type Params = {
  slug: string;
};

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.larsvanderniet.nl"
);

const getProject = async (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

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
    image: project.image,
    date: new Date(project.createdAt).toISOString(),
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
      publishedTime: new Date(project.createdAt).toISOString(),
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

  const date = new Date(project.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex min-h-screen flex-col xl:flex-row">
      <section className="flex min-h-screen justify-between flex-col p-8 xl:w-1/3 xl:sticky xl:top-0 xl:p-20 xl:border-r-[1px] xl:border-[#999]">
        <div>
          <div className="flex gap-2 items-end mb-32">
            <Link href="/">
              <div className="w-8 h-8 bg-black relative lg:w-12 lg:h-12">
                <Image
                  src={outline}
                  alt="Lars van der Niet logo outline"
                  className="absolute bottom-1 left-1 h-3 w-2.5 lg:h-5 lg:w-4"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <time className="text-xs" dateTime={date}>
              {date}
            </time>
            <h1>{project.title}</h1>
            <div className="text-[#666]">{project.subtitle}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="uppercase text-[#999] text-xs">Services</div>
            <div className="text-xs">{project.services}</div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div className="uppercase text-[#999] text-xs">
              Product & Deliverables
            </div>
            <div className="text-xs">{project.product}</div>
          </div>
        </div>
      </section>

      <div className="h-full xl:w-2/3">
        <section className="h-screen">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={1000}
            className="object-cover h-full w-full"
          />
        </section>

        <section className="p-8 lg:p-32 border-b-[1px] border-[#999]">
          <h2>{project.introduction}</h2>
        </section>

        <section className="p-8 lg:p-32 border-b-[1px] border-[#999]">
          <h3>Pre-production</h3>
          <p>
            Hando, a modelling agency that specializes in hand models, is
            launching a new visual project to showcase the beauty and
            versatility of hands. The project will feature a variety of hand
            models, each with their own unique look and style. The images will
            be used to promote Handos services to potential clients.
          </p>
        </section>

        <section className="flex flex-col gap-8 p-8 lg:p-32 border-b-[1px] border-[#999]">
          <h2 className="font-normal">
            Don&apos;t hesitate to reach out, lets talk about your project.
          </h2>
          <Link
            className="text-white bg-black px-5 py-3 self-start text-base md:text-xl"
            href="mailto:lvdnbusiness@gmail.com"
          >
            Let&apos;s Talk
          </Link>
        </section>
      </div>
    </article>
  );
}
