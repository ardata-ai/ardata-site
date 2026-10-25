import Link from "next/link";
import type { Dictionary } from "../i18n/types";

export default function Footer({
  brand,
  nav,
  copyright,
}: {
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  copyright: string;
}) {
  return (
    <footer className="border-t border-white/10 bg-soft px-6 py-16 text-center md:px-12 md:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 md:flex-row">
        <Link href={nav.homeHref} className="rounded-sm text-2xl font-bold tracking-tight text-main">
          {brand.name}<span className="text-brand-cyan">{brand.suffix}</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted md:gap-12">
          {nav.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="rounded-sm transition-colors duration-200 hover:text-brand-cyan">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
