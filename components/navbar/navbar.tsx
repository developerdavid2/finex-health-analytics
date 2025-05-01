"use client";

import NavProvider from "@/providers/nav-provider";
import NavigationMenu from "@/components/navbar/navigation-menu";

export default function Navbar() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <NavProvider>
        <NavigationMenu />
      </NavProvider>
    </main>
  );
}
