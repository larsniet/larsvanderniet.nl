import Link from "next/link";

export default function ProjectFooter() {
  return (
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
  );
}
