import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import type { Project } from "@/types";

export default function ProjectPreview({ title, slug }: Project) {
  return (
    <Link href={`/project/${slug}`} className="relative flex h-screen">
      <Image
        src={`/images/${slug}.jpeg`}
        alt={title}
        width={800}
        height={1000}
        className="object-cover h-full w-full"
      />
      <div className="absolute bottom-1/4 right-0 w-32 bg-black h-24">
        <ArrowUpRight
          className="absolute top-4 right-4 h-3 w-3"
          stroke="#fff"
        />
        <p className="absolute capitalize bottom-4 left-4 text-white font-light">
          {title}
        </p>
      </div>
    </Link>
  );
}
