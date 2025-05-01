"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { mainNavigation } from "@/constants/navbarData";
import {
  NavigationContent,
  SpecialContent,
  StandardContent,
} from "@/types/navbarTypes";

export default function MainNavigationMenu() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  // Handle scroll events
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle section navigation
  const handleSectionNavigation = (path: string, section: string) => {
    // If we're already on the correct page, just scroll to the section
    if (pathname === path) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise, navigation will happen via the Link component
  };

  // Type guard function to check if content has specialLayout and sections
  const hasSpecialLayout = (
    content: NavigationContent | undefined,
  ): content is SpecialContent => {
    return content?.specialLayout === true && Array.isArray(content?.sections);
  };

  const hasStandardLayout = (
    content: NavigationContent | undefined,
  ): content is StandardContent => {
    return content?.specialLayout !== true && Array.isArray(content?.menuItems);
  };

  return (
    <header className="fixed top-0 w-full z-30 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "max-w-5xl mx-auto px-4 sm:px-6 mt-6" : "p-4"
        }`}
      >
        <div
          className={`flex h-14 w-full items-center justify-between gap-3 transition-all duration-300
          ${
            isScrolled
              ? "rounded-full shadow-2xl backdrop-blur-2xl border border-gray-300/50 px-3 shadow-black/[0.04]"
              : "px-3 rounded-full"
          }
        `}
        >
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-nav.png"
                alt="Finex Health Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              {mainNavigation.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  {navItem.hasDropdown ? (
                    <>
                      <Link href={navItem.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <NavigationMenuTrigger className="bg-pink-200/10">
                            {navItem.title}
                          </NavigationMenuTrigger>
                        </NavigationMenuLink>
                      </Link>
                      <NavigationMenuContent>
                        {hasSpecialLayout(navItem.content) ? (
                          // Special layout for Resources (with sections)
                          <div className="w-[95vw] max-w-screen-xl flex justify-between p-6 50 bg-purple-100/10">
                            <div className="grid grid-cols-2 gap-6">
                              {navItem.content.sections.map((section, idx) => (
                                <div key={idx} className="col-span-1">
                                  <div className="mb-3 text-lg font-medium">
                                    {section.title}
                                  </div>
                                  <div
                                    className={`grid grid-cols-${section.columns} gap-2`}
                                  >
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => {
                                          const [path, sectionId] =
                                            item.href.split("#");
                                          if (sectionId) {
                                            handleSectionNavigation(
                                              path,
                                              sectionId,
                                            );
                                          }
                                        }}
                                        className="flex items-center gap-2 rounded-md p-2 hover:bg-muted transition-colors"
                                      >
                                        <item.icon className="h-4 w-4" />
                                        <span className="text-sm">
                                          {item.title}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="border-l pl-6">
                              <div className="mb-3 text-lg font-medium">
                                {navItem.content.sidebarTitle}
                              </div>
                              <p className="mb-4 text-sm text-muted-foreground">
                                {navItem.content.sidebarDescription}
                              </p>
                              <Link
                                href={navItem.content.sidebarButtonLink || "#"}
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                              >
                                {navItem.content.sidebarButtonText}
                              </Link>
                            </div>
                          </div>
                        ) : hasStandardLayout(navItem.content) ? (
                          // Standard layout for other dropdowns (with menuItems)
                          <div className="w-[95vw] max-w-screen-xl flex justify-between p-6 inset-0 bg-white/10">
                            <div
                              className={`grid grid-cols-${navItem.content.gridColumns} gap-6 w-3/4`}
                            >
                              {navItem.content.menuItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => {
                                    const [path, section] =
                                      item.href.split("#");
                                    if (section) {
                                      handleSectionNavigation(path, section);
                                    }
                                  }}
                                  className="group flex h-full w-full flex-col justify-between rounded-md border p-4 hover:bg-purple-100/10 transition-colors"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                                      <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <div className="text-md font-medium mb-2">
                                        {item.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="w-1/4 pl-6">
                              <div className="mb-3 text-lg font-medium">
                                {navItem.content.sidebarTitle}
                              </div>
                              <p className="mb-4 text-sm text-muted-foreground">
                                {navItem.content.sidebarDescription}
                              </p>
                              <Link
                                href={navItem.content.sidebarButtonLink || "#"}
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                              >
                                {navItem.content.sidebarButtonText}
                              </Link>
                            </div>
                          </div>
                        ) : (
                          // Fallback in case content structure is unexpected
                          <div className="p-4">
                            <p>Menu content unavailable</p>
                          </div>
                        )}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    // Simple link without dropdown
                    <Link href={navItem.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {navItem.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex flex-1 items-center justify-end">
            <Link
              className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 inline-flex justify-center whitespace-nowrap rounded-full bg-gray-500 px-3 py-1.5 text-sm font-medium text-white shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
