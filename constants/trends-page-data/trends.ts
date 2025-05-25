import { FaTrophy, FaChartPie } from "react-icons/fa";
import { IconType } from "react-icons";

export const trendsMenu = [
  {
    title: "Success Factors",
    description: "Key drivers behind Finex's sustainable impact.",
    href: "/trends#success",
    icon: FaTrophy,
  },
  {
    title: "Industry Insights",
    description:
      "Emerging trends and innovations shaping healthcare analytics.",
    href: "/trends#insights",
    icon: FaChartPie,
  },
];

export interface TrendItem {
  id: string;
  title: string;
  icon: IconType;
  image: string;
  description: string;
  cta: string;
  href: string;
  className?: string;
}

export const trendsMainData: TrendItem[] = [
  {
    id: "success",
    title: "Success Factors",
    icon: FaTrophy,
    image: "/images/trends/success-factors.jpg",
    description:
      "Explore the key drivers behind Finex’s sustainable healthcare impact — including localized strategies, stakeholder trust, and measurable outcomes.",
    cta: "Read more",
    href: "/trends#success",
  },
  {
    id: "insights",
    title: "Industry Insights",
    icon: FaChartPie,
    image: "/images/trends/industry-insights.jpg",
    description:
      "Stay informed on trends in digital health, predictive analytics, and regulatory shifts impacting healthcare finance and analytics worldwide.",
    cta: "Read more",
    href: "/trends#insights",
  },
];
