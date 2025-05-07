// hooks/useScrollOnLoad.ts
"use client";

import { useEffect } from "react";

export function useScrollOnLoad() {
  useEffect(() => {
    const targetId = sessionStorage.getItem("scroll-target-id");
    if (targetId) {
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scroll-target-id");
        }
      };

      // Attempt immediately
      scrollToElement();

      // Try again after slight delay in case it's not rendered yet
      const timeout = setTimeout(scrollToElement, 300);

      return () => clearTimeout(timeout);
    }
  }, []);
}
