import { speedEvents } from "@/constants/services-page-data/services";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const firstRow = speedEvents.slice(0, speedEvents.length / 2);
const secondRow = speedEvents.slice(speedEvents.length / 2);

const SpeedCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative min-h-[200px] min-w-[200px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        fill
        alt=""
        src={img}
        priority
      />
    </figure>
  );
};

export function SpeedMarqueeVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((event) => (
          <SpeedCard key={event.id} {...event} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((event) => (
          <SpeedCard key={event.id} {...event} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#EEF2FF]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#EEF2FF]"></div>
    </div>
  );
}
