import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
const OpenMap = dynamic(
  () => import("@/components/sections/contact/open-map-location"),
  { ssr: false },
);

//

export default function ContactLocationSection() {
  const animationRef = useRef(null);
  useInView(animationRef, { once: true, amount: 0.2 });
  // Set animation state based on view
  return (
    <section
      id="location"
      className="w-full bg-gray-400/10 rounded-[5rem] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1320px] relative">
        <div ref={animationRef} className="mb-8 md:mb-12">
          <div className="py-28 grid md:grid-cols-2 gap-16">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <OpenMap />
            </div>
            <div className="flex flex-col justify-center items-start gap-8">
              <h3 className="text-sm text-gray-500 uppercase">Our Location</h3>
              <h2 className="text-2xl md:text-4xl font-bold text-main mb-4">
                Connecting Near and Far
              </h2>
              <div className="text-base text-gray-700">
                <p className="font-semibold">Headquarters</p>
                <p>Finex Healthcare Analytics & Informatics Consult LLC.</p>
                <p>Hawthorne, USA</p>
                <p>Broadway Street, Off Hawthorne Blvd</p>
                <p>Hawthorne, CA, 90250</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
