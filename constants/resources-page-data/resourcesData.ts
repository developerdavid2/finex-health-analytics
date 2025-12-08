import { FaChartLine, FaMapMarkedAlt } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ResourceOverviewItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  image: string;
  href: string;
  cta: string;
  className?: string;
}

export const resourcesMenu: ResourceOverviewItem[] = [
  {
    id: 1,
    title: "Milestones",
    description:
      "Explore our growth journey — from scaling operations and launching new products to building strategic partnerships and securing industry awards.",
    icon: FaMapMarkedAlt,
    image: "/images/resources/milestones-cover.png", // Or Lottie or SVG
    href: "/milestones",
    cta: "Explore Milestones",
    className: "col-span-full lg:col-span-3",
  },
  {
    id: 2,
    title: "Trends",
    description:
      "Discover the emerging insights, innovations, and drivers that shape Finex’s strategic impact in healthcare analytics and informatics.",
    icon: FaChartLine,
    image: "/images/resources/trends-cover.png", // Or Lottie or SVG
    href: "/trends",
    cta: "Explore Trends",
    className: "col-span-full lg:col-span-3",
  },
  {
    id: 3,
    title: "Ebooks",
    description:
      "Dive into expertly crafted publications that blend deep research, cultural storytelling, and actionable insights. ",
    icon: FaChartLine,
    image: "/images/resources/ebooks-cover.jpeg", // Or Lottie or SVG
    href: "/ebooks",
    cta: "Explore Ebooks",
    className: "col-span-full lg:col-span-3",
  },
];
