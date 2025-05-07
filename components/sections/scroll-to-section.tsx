"use client";

import React, { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollToSectionBaseProps = {
  href: string; // <-- Now required
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
};

// Button variant
type ScrollToSectionButtonProps = ScrollToSectionBaseProps & {
  asLink?: false;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> &
  VariantProps<typeof buttonVariants>;

// Anchor/link variant
type ScrollToSectionLinkProps = ScrollToSectionBaseProps & {
  asLink: true;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onClick">;

type ScrollToSectionProps =
  | ScrollToSectionButtonProps
  | ScrollToSectionLinkProps;

export function ScrollToSection(props: ScrollToSectionProps) {
  const { href, asLink = false, children, className, ...rest } = props;

  const router = useRouter();
  const pathname = usePathname();

  const [targetPath, hash] = href.split("#");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const navigateAndScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

      if (pathname === targetPath || targetPath === "") {
        navigateAndScroll();
      } else {
        router.push(href);
        setTimeout(() => {
          navigateAndScroll();
        }, 200); // slight delay to wait for DOM render
      }
    },
    [href, pathname, router, hash, targetPath],
  );

  if (asLink) {
    return (
      <a
        href={href}
        className={cn("inline-block", className)}
        onClick={handleClick}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const {
    variant = "default",
    size = "default",
    ...buttonProps
  } = rest as VariantProps<typeof buttonVariants> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
