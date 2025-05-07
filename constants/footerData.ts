// constants/footerData.ts
import { IconType } from "react-icons";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export interface FooterLink {
  id: string;
  title: string;
  href: string;
}

export interface FooterCategory {
  id: string;
  title: string;
  links: FooterLink[];
}

export const footerNavLinks: FooterCategory[] = [
  {
    id: "home",
    title: "Home",
    links: [
      {
        id: "home-testimonials",
        title: "Testimonials",
        href: "/#home-testimonials",
      },
      { id: "home-faq", title: "FAQ", href: "/#home-faq" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { id: "company-about", title: "About Us", href: "/company#company" },
      {
        id: "company-mission",
        title: "Mission & Vision",
        href: "/company#mission-vision",
      },
      {
        id: "company-edge",
        title: "Competitive Edge",
        href: "/company#competitive-edge",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      {
        id: "services-analytics",
        title: "Healthcare Analytics",
        href: "/services#analytics",
      },
      {
        id: "services-cybersecurity",
        title: "Cybersecurity",
        href: "/services#cybersecurity",
      },
      {
        id: "services-fintech",
        title: "E-Payment & Fintech",
        href: "/services#fintech",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        id: "resources-regions",
        title: "Regions We Serve",
        href: "/customers#regions",
      },
      {
        id: "resources-partnerships",
        title: "Partnerships",
        href: "/milestones#partnerships",
      },
      {
        id: "resources-leadership",
        title: "Leadership",
        href: "/milestones#brand",
      },
    ],
  },
];

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: "social-twitter",
    name: "Twitter",
    href: "https://twitter.com/fi",
    icon: FaTwitter,
  },
  {
    id: "social-linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/company/fi",
    icon: FaLinkedin,
  },
  {
    id: "social-youtube",
    name: "YouTube",
    href: "https://youtube.com/c/fi",
    icon: FaYoutube,
  },
];

export const companySlogan =
  "Empowering better healthcare decisions through data, clarity, and insight.";
