import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaMapMarkedAlt,
} from "react-icons/fa";

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
