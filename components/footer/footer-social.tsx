// components/Footer/FooterSocial.tsx
import React from "react";
import { socialLinks } from "@/constants/footerData";

const FooterSocial: React.FC = () => {
  return (
    <div className="mt-8 lg:mt-0">
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
            aria-label={`${social.name} profile`}
          >
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-100 to-gray-200"
              style={{
                boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
              }}
            >
              <social.icon className="w-5 h-5" aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
