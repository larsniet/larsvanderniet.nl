import youngpwr from "@/assets/youngpwr.jpg";
import sieraat from "@/assets/sieraat.jpeg";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  keywords: string[];
  image: string | StaticImageData;
  slug: string;
  createdAt: string;
  subtitle: string;
  services: string;
  product: string;
  introduction: string;
};

const projects: Project[] = [
  {
    title: "Youngpwr",
    keywords: ["youngpwr", "young", "pwr", "jongeren"],
    image: youngpwr,
    slug: "youngpwr",
    createdAt: "2000-08-15",
    subtitle:
      "Een platform voor jongeren om zichzelf te ontwikkelen en te groeien in het bedrijfsleven.",
    services: "Webdesign, webdevelopment, SEO, serverbeheer, onderhoud",
    product: "Website, CMS, Mailchimp integratie",
    introduction:
      "YoungPWR, hét platform voor alle jongeren. YoungPWR is jouw coach en geeft je het netwerk dat je nodig hebt voor meer power en geluk om succesvol te zijn én net dat beetje meer te verdienen.",
  },
  // {
  //   title: "Sieraat",
  //   image: sieraat,
  //   slug: "sieraat",
  // },
];

export default projects;
