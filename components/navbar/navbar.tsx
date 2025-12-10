"use client";

import NavProvider from "@/providers/nav-provider";
import MainNavigationMenu from "@/components/navbar/main-navigation-menu";
import { useBanner } from "@/contexts/banner-context";

export default function Navbar() {
  const { isBannerVisible } = useBanner();

  return (
    <main
      className={`relative flex flex-col overflow-hidden ${isBannerVisible ? "mb-16" : ""}`}
    >
      <NavProvider>
        <MainNavigationMenu />
      </NavProvider>
    </main>
  );
}
