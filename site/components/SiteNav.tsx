"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-config";
import SocialIcons from "@/components/SocialIcons";

const links = [
  { href: "/wedding-packages", label: "Packages" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function SiteNav() {
  const pathname = usePathname();

  // The Home page carries its own wordmark and navigation inside the hero
  // itself (per brief: Home stays a single, uncluttered screen), so the
  // persistent bar only appears once you're on an inner page.
  if (pathname === "/") return null;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/70 to-transparent" />
      <nav className="relative mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-10 sm:py-7">
        <Link
          href="/"
          className="pointer-events-auto font-display text-[0.95rem] tracking-wide text-paper transition-colors duration-300 hover:text-brass-soft sm:text-base"
        >
          {site.brandName}
        </Link>
        <ul className="pointer-events-auto flex items-center gap-5 sm:gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-sans text-[0.8rem] font-light tracking-wide transition-colors duration-300 sm:text-sm ${
                    active
                      ? "text-brass-soft"
                      : "text-paper/85 hover:text-brass-soft"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="hidden sm:block">
            <span className="mx-1 text-paper/25">|</span>
          </li>
          <li className="hidden sm:block">
            <SocialIcons />
          </li>
        </ul>
      </nav>
    </header>
  );
}
