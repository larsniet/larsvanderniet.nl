import Image from "next/image";
import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";

import outline from "@/assets/logo_outline.png";
import youngpwr from "@/assets/youngpwr.jpg";
import sieraat from "@/assets/sieraat.jpeg";

const projects = [
  {
    title: "Youngpwr",
    image: youngpwr,
    href: "/projects/larsvanderniet",
  },
  {
    title: "Sieraat",
    image: sieraat,
    href: "/projects/larsvanderniet",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col xl:flex-row">
      <div className="flex h-screen flex-col justify-between p-8 xl:w-1/2 xl:sticky xl:top-0 xl:p-20">
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
          <p className="whitespace-nowrap">
            <span className="text-[#666]">Full stack developer based in </span>
            Amsterdam
          </p>
        </div>
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="flex flex-col">
            <h1>Lars van der Niet</h1>
            <h2>
              Engineering creatively with focus on automation and reliability.
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p>
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
            </p>
            <p className="text-[#666]">
              &copy; {new Date().getFullYear()} Lars van der Niet
            </p>
          </div>
        </div>
      </div>

      <div className="h-full xl:w-1/2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
