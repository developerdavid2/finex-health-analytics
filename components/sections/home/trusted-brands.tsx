import React from "react";
import { logos } from "@/constants/homepage-data";
import Image from "next/image";

const TrustedBrands = () => {
  return (
    <section className="bg-[#EEF2FF] -mt-32 flex justify-center items-center mx-auto">
      <div className="container relative overflow-hidden text-center flex flex-col items-center bg-[#EEF2FF]">
        <h3 className="headline-glow text-3xl font-bold text-zinc-700 leading-none pt-20 pb-10">
          Trusted by thousands across the world
        </h3>
        <ul className="flex justify-center max-lg:hidden bg-transparent">
          {logos.map(({ id, url, width, height, title }) => (
            <li key={id} className="mx-10">
              <Image src={url} width={width} height={height} alt={title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default TrustedBrands;
