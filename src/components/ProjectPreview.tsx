import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

export type ProjectPreviewProps = {
  title: string;
  image: StaticImageData | string;
  href: string;
};

export default function ProjectPreview({
  title,
  image,
  href,
}: ProjectPreviewProps) {
  return (
    <Link href={href} className="relative flex h-screen">
      <Image
        src={image}
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
        <p className="absolute bottom-4 left-4 text-white font-light">
          {title}
        </p>
      </div>
    </Link>
  );
}
