"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DefaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function OpenMap() {
  const position: [number, number] = [33.9164, -118.351];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set Leaflet default icon only on client-side
    L.Marker.prototype.options.icon = DefaultIcon;
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        style={{ height: "400px", width: "100%" }}
        className="bg-gray-100 flex items-center justify-center text-gray-500 relative z-10"
      >
        Loading map...
      </div>
    );
  }

  return (
    <div style={{ height: "400px", width: "100%" }} className="relative z-10">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%", zIndex: 10 }}
        zoomControl={true}
      >
        <TileLayer
          url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> & contributors'
        />
        <Marker position={position}>
          <Popup>
            <motion.div className="flex flex-col gap-4 ">
              <motion.div className="flex justify-start items-center rounded-xl gap-2">
                <Image
                  src="/images/logo-nav.png"
                  className="h-6 w-6"
                  width={100}
                  height={100}
                  alt="Logo"
                />
                <span className="text-sm font-semibold text-main">
                  Finex Healthcare Inc
                </span>
              </motion.div>
              {/**/}
              <motion.div className="flex flex-col justify-center items-start">
                <span className="text-sm font-semibold text-main">
                  Hawthore, USA
                </span>
                <span className="text-xs font-light text-main">
                  Broadway Street, Off Hawthorne Blvd
                </span>
              </motion.div>
              <motion.div className="flex flex-col justify-center items-start">
                <Link
                  className="text-sm font-semibold text-main"
                  href="https://www.google.com/maps/search/?api=1&query=Broadway+Street%2C+Off+Hawthorne+Blvd%2C+Hawthorne%2C+CA%2C+90250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google Maps
                </Link>
              </motion.div>
            </motion.div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Additional CSS to ensure map stays below navbar */}
      <style jsx global>{`
        .leaflet-container {
          z-index: 10 !important;
        }
        .leaflet-control-container {
          z-index: 15 !important;
        }
        .leaflet-popup {
          z-index: 20 !important;
        }
      `}</style>
    </div>
  );
}
