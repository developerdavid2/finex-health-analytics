// components/Footer/FooterLogo.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterLogo: React.FC = () => {
  return (
    <Link href="/" aria-label="FI Home">
      <div className="py-2 px-4 rounded-lg w-fit flex items-center justify-center gap-4">
        <Image
          src="/images/logo-nav.png"
          alt="Logo-footer"
          width={50}
          height={50}
        />
        <h2 className="font-bold text-3xl tracking-tight ">Finex</h2>
      </div>
    </Link>
  );
};

export default FooterLogo;
