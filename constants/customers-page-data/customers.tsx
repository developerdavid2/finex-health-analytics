import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaMapMarkedAlt,
  FaUniversity,
  FaChartLine,
  FaHandsHelping,
  FaGlobeAfrica,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const customersMenu = [
  {
    title: "Target Customers",
    description:
      "Healthcare providers, insurers, NGOs, and fintech clients we serve.",
    href: "/customers#target",
    icon: FaUsers,
  },
  {
    title: "Customer Needs",
    description:
      "Challenges we solve for healthcare institutions and organizations.",
    href: "/customers#needs",
    icon: FaLightbulb,
  },
  {
    title: "Partnership Opportunities",
    description: "Explore collaborations, investments, and joint ventures.",
    href: "/customers#partnerships",
    icon: FaHandshake,
  },
  {
    title: "Geographical Coverage",
    description: "Regions and markets where Finex is making an impact.",
    href: "/customers#regions",
    icon: FaMapMarkedAlt,
  },
];

import {
  FaEyeSlash,
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaHeartbeat,
} from "react-icons/fa";
import { JSX } from "react";

export interface CustomerNeed {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const customerNeedsData: CustomerNeed[] = [
  {
    id: 1,
    icon: FaEyeSlash,
    title: "Lack of Insight",
    description:
      "Healthcare teams struggle to unify data, leading to blind spots in patient care and planning.",
    image: "/images/vision-insight.jpg",
    color: "bg-purple-50",
  },
  {
    id: 2,
    icon: FaBalanceScale,
    title: "Compliance Risks",
    description:
      "Complex laws like HIPAA and GDPR create legal risks when data isn’t secured or properly managed.",
    image: "/images/hipaa.jpg",
    color: "bg-stone-50",
  },
  {
    id: 3,
    icon: FaMoneyCheckAlt,
    title: "Payment Inefficiencies",
    description:
      "Manual billing, fraud, and revenue leakage affect financial sustainability in care delivery.",
    image: "/images/payment-issues.jpg",
    color: "bg-indigo-100",
  },
  {
    id: 4,
    icon: FaHeartbeat,
    title: "Care Quality Gaps",
    description:
      "Without real-time analytics, it’s difficult to track treatment outcomes and deliver personalized care.",
    image: "/images/care-gap.jpg",
    color: "bg-sky-50",
  },
];

export interface partnershipOpportunity {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const partnershipOpportunities: partnershipOpportunity[] = [
  {
    id: 1,
    title: "NGO Collaborations",
    icon: FaHandsHelping,
    description: "Partner on health education and outreach",
  },
  {
    id: 2,
    title: "Investor Partnerships",
    icon: FaChartLine,
    description: "Join our journey in digital health innovation",
  },
  {
    id: 3,
    title: "Gov/Agency Deals",
    icon: FaUniversity,
    description: "Public sector partnerships for health systems",
  },
];

export interface RegionsItem {
  icon: JSX.Element;
  titleStat: number;
  titleHeading: string;
  description: string;
}
export const regionsData: RegionsItem[] = [
  {
    icon: <FaGlobeAfrica className="h-6 w-6 text-main" />,
    titleStat: 3,
    titleHeading: "Continents",
    description: "Africa, North America & SE Asia",
  },
  {
    icon: <FaUsers className="h-6 w-6 text-main" />,
    titleStat: 20,
    titleHeading: "Healthcare Clients",
    description: "Projected in 3 years",
  },
  {
    icon: <FaRobot className="h-6 w-6 text-main" />,
    titleStat: 15,
    titleHeading: "Smart Solutions",
    description: "AI, fraud detection, e-health tools",
  },
  {
    icon: <FaShieldAlt className="h-6 w-6 text-main" />,
    titleStat: 100,
    titleHeading: "% Compliance",
    description: "GDPR, HIPAA & PCI-ready systems",
  },
];
