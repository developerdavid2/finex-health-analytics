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
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Demo", href: "/demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Trading", href: "/services/trading" },
      { title: "Analysis", href: "/services/analysis" },
      { title: "Automation", href: "/services/automation" },
      { title: "API", href: "/services/api" },
    ],
  },
  {
    title: "Customers",
    links: [
      { title: "Testimonials", href: "/customers/testimonials" },
      { title: "Case Studies", href: "/customers/case-studies" },
      { title: "Support", href: "/customers/support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Documentation", href: "/resources/docs" },
      { title: "FAQ", href: "/resources/faq" },
      { title: "Support", href: "/resources/support" },
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

export const companySlogan = "Improve your healthcare with our solutions";
