// constants/footerData.ts
import { IconType } from "react-icons";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export const footerNavLinks: FooterCategory[] = [
  {
    title: "Home",
    links: [
      { title: "Testimonials", href: "/#testimonials" },
      { title: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/company#company" },
      { title: "Mission & Vision", href: "/company#mission-vision" },
      { title: "Competitive Edge", href: "/company#competitive-edge" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Healthcare Analytics", href: "/services#analytics" },
      { title: "Cybersecurity", href: "/services#cybersecurity" },
      { title: "E-Payment & Fintech", href: "/services#fintech" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Regions We Serve", href: "/customers#regions" },
      { title: "Partnerships", href: "/milestones#partnerships" },
      { title: "Leadership", href: "/milestones#brand" },
    ],
  },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/fi",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/fi",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/c/fi",
    icon: FaYoutube,
  },
];

export const companySlogan =
  "Empowering better healthcare decisions through data, clarity, and insight.";
