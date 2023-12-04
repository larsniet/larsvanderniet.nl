import Image from "next/image";
import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";
import { getProjects } from "@/utils/data";

import outline from "@/assets/logo_outline.png";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col xl:flex-row">
      <div
        style={{ minHeight: "-webkit-fill-available" }}
        className="flex h-full flex-col justify-between p-8 xl:w-1/2 xl:sticky xl:top-0 xl:p-20 xl:h-screen"
      >
        <div className="flex gap-2 items-end">
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
          <div className="text-xs whitespace-nowrap md:text-sm lg:text-base">
            <span className="text-[#666]">Full stack developer based in </span>
            Amsterdam
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="flex flex-col">
            <h1>
              Lars van der Niet <br />
              <span className="font-extralight">
                Engineering creatively with focus on automation and reliability.
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Link
                className="text-[#666]"
                href="mailto:lvdnbusiness@gmail.com"
              >
                lvdnbusiness@gmail.com .{" "}
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com/in/lars-van-der-niet-055546182"
              >
                linkedin.com/in/lars-van-der-niet
              </Link>
            </div>
            <div className="text-[#666]">
              &copy; {new Date().getFullYear()} Lars van der Niet
            </div>
          </div>
        </div>
      </div>

      <div className="h-full xl:w-1/2">
        {projects &&
          projects.map((project, index) => (
            <ProjectPreview key={index} {...project} />
          ))}
      </div>
    </main>
  );
}
