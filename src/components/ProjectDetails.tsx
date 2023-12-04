import Link from "next/link";
import Image from "next/image";

import { Project } from "@/types";

import outline from "@/assets/logo_outline.png";

export default function ProjectDetails({
  project,
  date,
}: {
  project: Project;
  date: string;
}) {
  return (
    <section
      style={{ minHeight: "-webkit-fill-available" }}
      className="flex h-full justify-between flex-col p-8 xl:w-1/3 xl:sticky xl:top-0 xl:p-20 xl:border-r-[1px] xl:border-[#999] xl:h-screen"
    >
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
          <h1 className="capitalize">{project.title}</h1>
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
  );
}
