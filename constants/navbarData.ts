import { companyMenu } from "@/constants/company-page-data/company";
import { servicesMenu } from "@/constants/services-page-data/services";
import { customersMenu } from "@/constants/customers-page-data/customers";
import { trendsMenu } from "@/constants/trends-page-data/trends";
import { milestonesMenu } from "@/constants/milestones-page-data/milestones";
import { NavigationItem } from "@/types/navbarTypes";
import { ebooksMenu } from "./resources-page-data/ebooks-menu";

export const mainNavigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    title: "Company",
    href: "/company",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: companyMenu,
      sidebarTitle: "About Finex Health",
      sidebarDescription:
        "Discover how Finex is transforming healthcare analytics to improve patient outcomes and operational efficiency.",
      sidebarButtonText: "Learn More",
      sidebarButtonLink: "/company",
      gridColumns: 3,
    },
  },
  {
    title: "Services",
    href: "/services",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: servicesMenu,
      sidebarTitle: "Our Services",
      sidebarDescription:
        "Comprehensive healthcare analytics and digital solutions designed to transform your operations and improve outcomes.",
      sidebarButtonText: "View All Services",
      sidebarButtonLink: "/services",
      gridColumns: 3,
    },
  },
  {
    title: "Customers",
    href: "/customers",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: customersMenu,
      sidebarTitle: "Who We Serve",
      sidebarDescription:
        "From healthcare providers to fintech companies, we deliver tailored solutions for organizations of all sizes.",
      sidebarButtonText: "Our Customers",
      sidebarButtonLink: "/customers",
      gridColumns: 2,
    },
  },
  {
    title: "Resources",
    href: "/resources",
    hasDropdown: true,
    content: {
      specialLayout: true,
      sections: [
        {
          title: "Milestones",
          items: milestonesMenu.slice(0, 4),
          columns: 2,
        },
        {
          title: "Industry Trends",
          items: trendsMenu,
          columns: 1,
        },
        {
          title: "E-Books",
          items: ebooksMenu,
          columns: 1,
        },
      ],
      sidebarTitle: "Resources Center",
      sidebarDescription:
        "Access case studies, white papers, and industry insights to better understand healthcare analytics.",
      sidebarButtonText: "Explore Resources",
      sidebarButtonLink: "/resources",
    },
  },
];
