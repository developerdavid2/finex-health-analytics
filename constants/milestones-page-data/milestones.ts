import {
  FaRocket,
  FaLaptopMedical,
  FaUserTie,
  FaCertificate,
  FaChartBar,
  FaUsersCog,
  FaChalkboardTeacher,
  FaRobot,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const milestonesMenu = [
  {
    title: "Scale Operations",
    description: "Raise funding to expand services and enter new markets.",
    href: "/milestones#scale",
    icon: FaRocket,
  },
  {
    title: "Launch New Products",
    description:
      "Innovative solutions in healthcare analytics and informatics.",
    href: "/milestones#products",
    icon: FaLaptopMedical,
  },
  {
    title: "Secure Strategic Partnerships",
    description: "Engage major players in healthcare, insurance, and fintech.",
    href: "/milestones#partnerships",
    icon: FaUserTie,
  },
  {
    title: "Brand & Leadership",
    description: "Grow thought leadership and global brand recognition.",
    href: "/milestones#brand",
    icon: FaChartBar,
  },
  {
    title: "Training Programs",
    description: "Empower professionals through education and workshops.",
    href: "/milestones#training",
    icon: FaChalkboardTeacher,
  },
  {
    title: "AI & Automation",
    description: "Streamline operations through intelligent technologies.",
    href: "/milestones#automation",
    icon: FaRobot,
  },
  {
    title: "Financial Growth",
    description: "Hit revenue and profitability benchmarks.",
    href: "/milestones#growth",
    icon: FaChartBar,
  },
  {
    title: "Team Expansion",
    description: "Hire top talent to scale services globally.",
    href: "/milestones#team",
    icon: FaUsersCog,
  },
  {
    title: "Certifications & Awards",
    description: "Achieve recognition through industry validations.",
    href: "/milestones#certifications",
    icon: FaCertificate,
  },
];

export interface MilestoneItem {
  id: string;
  title: string;
  icon: IconType;
  image: string;
  description: string;
  cta: string;
  href: string;
  className?: string;
}

export const milestonesMainData: MilestoneItem[] = [
  {
    id: "scale",
    title: "Scale Operations",
    icon: FaRocket,
    image: "/images/milestones/milestone-scale.jpg",
    description:
      "Raise funding to expand our healthcare analytics services across new geographies and demographics.",
    cta: "Read more",
    href: "/milestones#scale",
  },
  {
    id: "products",
    title: "Launch New Products",
    icon: FaLaptopMedical,
    image: "/images/milestones/milestone-products.jpeg",
    description:
      "Introduce new AI-driven tools that enhance decision-making in healthcare management.",
    cta: "Read more",
    href: "/milestones#products",
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    icon: FaUserTie,
    image: "/images/milestones/milestone-partners.jpg",
    description:
      "Partner with leading stakeholders across health, finance, and data ecosystems.",
    cta: "Read more",
    href: "/milestones#partnerships",
  },
  {
    id: "brand",
    title: "Brand & Leadership",
    icon: FaChartBar,
    image: "/images/milestones/milestone-leader.jpg",
    description:
      "Establish Finex as a leading voice in healthcare transformation and data integrity.",
    cta: "Read more",
    href: "/milestones#brand",
  },
];
