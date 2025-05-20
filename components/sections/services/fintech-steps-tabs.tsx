// components/FintechStepsTabs.tsx
"use client";

import { Fragment, useState } from "react";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { clsx } from "clsx";
import { IconType } from "react-icons";
import Image from "next/image";

interface FintechStep {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  image: string;
  altText: string;
}

export default function FintechStepsTabs({ tabs }: { tabs: FintechStep[] }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
      <div className="flex flex-col gap-8 lg:flex-row md:gap-10 ">
        {/* Tab Buttons */}
        <div className="md:flex-[55%]">
          <TabList className="flex flex-col gap-4 rounded-3xl p-4 border-black/10 backdrop-blur-lg bg-pink-200/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden w-fit mx-auto">
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <div
                    className={clsx(
                      "relative rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition duration-200 hover:bg-indigo-100/10",
                      selected && "bg-indigo-200/20 shadow-md",
                    )}
                  >
                    {/* Icon */}
                    <div className="bg-indigo-400/20 rounded-full p-4 text-main text-xl">
                      <tab.icon />
                    </div>

                    {/* Title & Desc */}
                    <div className="text-start">
                      <h4
                        className={clsx(
                          "font-semibold text-base text-black/70 md:text-xl",
                          selected && "text-indigo-900",
                        )}
                      >
                        {tab.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                )}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab Panels */}
        <TabPanels className="md:flex-[45%] overflow-hidden">
          <div className="relative w-full overflow-hidden">
            {tabs.map((tab, index) => (
              <TabPanel key={index} as={Fragment} static>
                <Transition show={selectedTab === index}>
                  <article className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md drop-shadow-xl p-6 border border-white/40 w-full items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 min-[480px]:flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-12">
                    <figure className="w-full h-full flex items-center justify-center">
                      <Image
                        src={tab.image}
                        alt={tab.altText}
                        width={300}
                        height={300}
                        className="rounded-lg max-h-[400px] object-contain w-full"
                      />
                    </figure>
                  </article>
                </Transition>
              </TabPanel>
            ))}
          </div>
        </TabPanels>
      </div>
    </TabGroup>
  );
}
