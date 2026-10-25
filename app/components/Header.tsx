"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "../i18n/types";
import LanguageSwitch from "./LanguageSwitch";

const linkClass =
  "rounded-sm text-sm font-semibold text-muted transition-all duration-200 hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan";

const talkClass =
  "inline-flex h-11 items-center rounded-xl bg-brand-cyan px-6 text-base font-semibold text-ink shadow-[0_6px_18px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan";

export default function Header({
  brand,
  nav,
  a11y,
  switchTo,
}: {
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  a11y: Dictionary["header"];
  switchTo: {
    href: string;
    label: string;
    labelLang: Dictionary["switcher"]["labelLang"];
    hrefLang: Dictionary["switcher"]["hreflang"];
    ariaLabel: string;
  };
}) {
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
    <>
    <header className="fixed inset-x-0 top-0 z-[1002] h-16">
      <div
        className={`pointer-events-none absolute inset-0 backdrop-blur-md transition-colors duration-300 ${
          isScrolled ? "border-b border-white/10 bg-main/90" : "border-b border-transparent bg-main/70"
        }`}
      />
      <nav className="relative mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-6 md:px-12" aria-label={a11y.navLabel}>
        <Link
          href={nav.homeHref}
          className="rounded-sm text-2xl font-bold tracking-tight text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
        >
          {brand.name}<span className="text-brand-cyan">{brand.suffix}</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-8">
        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={nav.talkHref} className={talkClass}>
              {nav.talkLabel}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 p-2 text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? a11y.closeMenu : a11y.openMenu}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}`} />
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`} />
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"}`} />
        </button>
        <LanguageSwitch
          href={switchTo.href}
          label={switchTo.label}
          labelLang={switchTo.labelLang}
          hrefLang={switchTo.hrefLang}
          ariaLabel={switchTo.ariaLabel}
        />
        </div>
      </nav>
    </header>

      <div
        id="mobile-nav"
        inert={!isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-y-0 right-0 z-[1001] w-[280px] max-w-[85vw] transform border-l border-white/10 bg-card shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 px-10 pt-24">
          {nav.links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-sm text-lg font-medium text-main hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={nav.talkHref} onClick={() => setIsMobileMenuOpen(false)} className={talkClass}>
              {nav.talkLabel}
            </Link>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label={a11y.closeOverlay}
          className="fixed inset-0 z-[1000] bg-black/30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
