import {
  FaInfoCircle,
  FaBullseye,
  FaChartLine,
  FaGlobe,
  FaMedal,
  FaCogs,
  FaGlobeAfrica,
  FaHospitalSymbol,
  FaChartBar,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

import { JSX } from "react";
import { Book, PenTool, Server, Shield, Users } from "lucide-react";

export const companyMenu = [
  {
    title: "About Us",
    description: "Learn about our foundation, purpose, and what drives Finex.",
    href: "/company#company",
    icon: FaInfoCircle,
  },
  {
    title: "Mission & Vision",
    description: "Our guiding principles and future ambitions.",
    href: "/company#mission-vision",
    icon: FaBullseye,
  },
  {
    title: "Competitive Edge",
    description:
      "What makes Finex stand out in the healthcare analytics space.",
    href: "/company#competitive-edge",
    icon: FaMedal,
  },
  {
    title: "Market Reach & Impact",
    description: "See how Finex is making a difference globally.",
    href: "/company#market-reach",
    icon: FaGlobe,
  },
  {
    title: "Why Finex is Better",
    description: "Key strengths and innovations that set us apart.",
    href: "/company#why-finex-better",
    icon: FaChartLine,
  },
  {
    title: "Operational Processes",
    description: "Understand our workflows and client engagement methods.",
    href: "/company#operations",
    icon: FaCogs,
  },
];

export const competitiveEdge = [
  {
    title: "Multidisciplinary Expertise",
    description:
      "We combine analytics, cybersecurity, fintech, and healthcare insights into unified, adaptable solutions for any healthcare challenge.",
    icon: "/images/multi-data.gif",
    className: "col-span-full lg:col-span-3", // Takes 4/6 of the grid width
  },
  {
    title: "Compliance-First Architecture",
    description:
      "All deployments are HIPAA, PCI DSS, and GDPR compliant, offering peace of mind for sensitive healthcare data.",
    icon: "/images/fingerprint.jpeg",

    className: "col-span-full lg:col-span-3", // Takes 2/6 of the grid width
  },
  {
    title: "Fraud Prevention Systems",
    description:
      "Our solutions integrate fraud detection and real-time monitoring in health payments and billing systems.",
    icon: "/images/security.jpeg",
    className: "col-span-full lg:col-span-2", // Takes 2/6 of the grid width
  },
  {
    title: "Tailored for Underserved Markets",
    description:
      "We scale innovation in low-resource regions, ensuring access to transformative healthcare tools regardless of infrastructure.",
    icon: "/images/market-region.jpeg",

    className: "col-span-full lg:col-span-2", // Takes 2/6 of the grid width
  },
  {
    title: "Education & Capacity Building",
    description:
      "Beyond tech, we train teams to sustain operations through workshops, tools, and support that builds confidence and autonomy.",
    icon: "/images/education.jpeg",
    className: "col-span-full lg:col-span-2", // Takes 2/6 of the grid width
  },
];
export interface MarketReachItem {
  icon: JSX.Element;
  titleStat: number;
  titleHeading: string;
  description: string;
}

export const marketReachData: MarketReachItem[] = [
  {
    icon: <FaGlobeAfrica className="h-6 w-6 text-main" />,
    titleStat: 3,
    titleHeading: "Continents",
    description: "Finex targets Africa, North America, and Southeast Asia.",
  },
  {
    icon: <FaHospitalSymbol className="h-6 w-6 text-main" />,
    titleStat: 20,
    titleHeading: "Healthcare Clients",
    description: "Projected within 3 years based on scaling operations.",
  },
  {
    icon: <FaChartBar className="h-6 w-6 text-main" />,
    titleStat: 15,
    titleHeading: "Smart Solutions Built",
    description: "Includes AI, e-payment, and fraud detection tools.",
  },
  {
    icon: <FaShieldAlt className="h-6 w-6 text-main" />,
    titleStat: 100,
    titleHeading: "Compliant Frameworks",
    description: "All systems aligned with global privacy/security standards.",
  },
];

export const whyFinexIsBetter = [
  {
    icon: FaBrain,
    title: "End-to-End Healthcare Expertise",
    description: "Covering analytics, finance, and digital health in one.",
  },
  {
    icon: FaShieldAlt,
    title: "Fraud Prevention & Transparency",
    description: "Prevent billing fraud and automate healthcare claims.",
  },
  {
    icon: FaChartLine,
    title: "Scalable, Results-Driven Solutions",
    description: "Delivering impact through adaptive, data-driven models.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Emerging Market Focus",
    description: "Built for real challenges in underserved regions.",
  },
];

export const processes = [
  {
    title: "Client Discovery & Needs Assessment",
    content:
      "Initial consultations to understand the healthcare organization's goals, data maturity, and operational constraints.",
    icon: <Users size={24} />,
  },
  {
    title: "Solution Blueprinting",
    content:
      "Tailored strategies covering analytics needs, cybersecurity compliance, fintech integration, or policy alignment.",
    icon: <PenTool size={24} />,
  },
  {
    title: "Tech Stack & Security Infrastructure",
    content:
      "Deployment of compliant, secure tools — from AI dashboards to encrypted APIs, built for resilience and scale.",
    icon: <Shield size={24} />,
  },
  {
    title: "Implementation & Change Management",
    content:
      "We support full rollout, internal stakeholder alignment, training, and impact monitoring.",
    icon: <Server size={24} />,
  },
  {
    title: "Capacity Building & Post-Deployment Support",
    content:
      "After go-live, we remain involved through performance reviews, usage audits, and iterative scaling.",
    icon: <Book size={24} />,
  },
];
