"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const editions = [
  { id: "ebook-1", label: "E-Book-1", cover: "/ebooks/ebook-1.png" },
  { id: "ebook-2", label: "E-Book-2", cover: "/ebooks/ebook-2.jpg" },
];
export default function EbookGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedId] = useState(editions[0].id);

  const plugin = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Sync carousel → selected tab & dots
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // initial call

    return () => {
      api.off("select", onSelect);
      // ← we return NOTHING (undefined), which is allowed
    };
  }, [api]);

  // Allow clicking thumbnail → go to that slide
  const handleTabClick = (id: string) => {
    const index = editions.findIndex((e) => e.id === id);
    if (index !== -1) {
      api?.scrollTo(index);
    }
  };

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <Tabs value={selectedId} className="w-full">
        {/* MAIN CAROUSEL — AUTO SLIDES + CENTERED + PADDING */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full overflow-hidden rounded-3xl shadow-2xl"
        >
          <CarouselContent className="bg-transparent">
            {editions.map((edition, index) => (
              <CarouselItem key={edition.id}>
                {/* This div is the clean white + blur container */}
                <div className="relative flex items-center justify-center h-[300px] lg:h-[450px] border border-white/50 cursor-grab p-10 lg:p-16">
                  <div className="relative w-full h-full max-w-xs lg:max-w-md ">
                    <Image
                      src={edition.cover}
                      alt={`Naija Football Renaissance - ${edition.label}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 80vw, 500px"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DOTS — Synced with carousel */}
        <div className="flex justify-center gap-3 my-8">
          {editions.map((edition, index) => (
            <button
              key={edition.id}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-12 bg-red-600/50"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to ${edition.label}`}
            />
          ))}
        </div>

        {/* THUMBNAIL TABS — Clickable + Synced + Centered */}
        <TabsList className="hidden w-fit mx-auto lg:block lg:grid-cols-[repeat(auto-fit,minmax(110px,1fr))] space-x-6 p-4 bg-transparent">
          {editions.map((edition, index) => (
            <TabsTrigger
              key={edition.id}
              value={edition.id}
              onClick={() => handleTabClick(edition.id)}
              className={`
                relative aspect-square rounded-xl overflow-hidden cursor-pointer
                transition-all duration-300 hover:scale-105
                ${current === index ? "ring-4 ring-red-500/50" : ""}
                w-28 lg:w-32
              `}
            >
              <Image
                src={edition.cover}
                alt={edition.label}
                fill
                className="object-cover"
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
