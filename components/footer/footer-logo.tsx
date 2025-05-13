// components/Footer/FooterLogo.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterLogo: React.FC = () => {
  return (
    <Link href="/" aria-label="FI Home">
      <div className="py-2 rounded-lg flex items-center gap-4">
        <Image
          src="/images/logo-nav.png"
          alt="Logo-footer"
          width={80}
          height={80}
          className="w-16 h-16 md:h-fit md:w-fit "
        />
        <h2 className="font-extrabold text-sm sm:text-lg md:text-xl text-main tracking-tight uppercase max-w-[300px]">
          Finex Healthcare Analytics & Informatics LLC
        </h2>
      </div>
    </Link>
  );
};

export default FooterLogo;
