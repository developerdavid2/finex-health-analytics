"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Hook that provides scroll-to-section functionality for any component
 * @param {string} targetId - ID of the target section
 * @param {string} targetPath - Path of the target page (default: current page)
 * @returns {Function} - Click handler function
 */
export function useScrollTo(
  targetId: string,
  targetPath?: string,
): (e?: React.MouseEvent) => void {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.preventDefault();

      // Default targetPath to current path if not provided
      const path = targetPath || pathname;

      // If we're already on the correct page, scroll to the section
      if (pathname === path) {
        // Find the element and scroll to it
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to the page with the hash
        router.push(`${path}#${targetId}`);
      }
    },
    [targetId, targetPath, pathname, router],
  );
}
