"use client";

import React from "react";
import { footerNavLinks } from "@/constants/footerData";
import { ScrollToSection } from "@/components/sections/scroll-to-section";

const FooterNavigation: React.FC = () => {
  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {footerNavLinks.map((category) => (
        <div key={category.id} className="space-y-3">
          <h3
            className="text-sm text-main font-semibold px-3 py-1.5 inline-block rounded-lg bg-gradient-to-b from-gray-100 to-gray-200"
            style={{
              boxShadow: "2px 2px 5px #d1d1d1, -2px -2px 5px #ffffff",
            }}
          >
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.links.map((link) => (
              <li key={link.id}>
                <ScrollToSection
                  href={link.href}
                  asLink
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.title}
                </ScrollToSection>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNavigation;
