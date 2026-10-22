"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

const linkClass =
  "text-sm font-semibold text-[#bbc9cf] hover:text-[#00d4ff] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d4ff] rounded-sm";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1000] h-16 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#071325]/90 backdrop-blur-md border-b border-[#00d4ff]/10"
          : "bg-[#071325]/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="h-full max-w-7xl mx-auto px-6 flex justify-between items-center" aria-label="Primary">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#a8e8ff] z-[1002] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d4ff] rounded-sm"
        >
          ARdata.ai
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="inline-flex items-center h-10 px-5 rounded-lg bg-[#00d4ff] text-[#071325] font-bold text-sm hover:opacity-90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden z-[1002] p-2 flex flex-col gap-1.5 items-end justify-center h-10 w-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d4ff]"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-y-0 right-0 w-[280px] bg-[#0f1e38] shadow-2xl z-[1001] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col pt-24 px-10 gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-[#00d4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d4ff] rounded-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center h-10 px-5 rounded-lg bg-[#00d4ff] text-[#071325] font-bold text-sm"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
