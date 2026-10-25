import Link from "next/link";
import type { Dictionary, Lang } from "../i18n/types";
import { Copy } from "./Copy";

export default function Footer({
  brand,
  nav,
  copyright,
  lang,
}: {
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  copyright: string;
  lang: Lang;
}) {
  return (
    <footer className="border-t border-white/10 bg-soft px-6 py-16 text-center md:px-12 md:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 md:flex-row">
        <Link href={nav.homeHref} dir="ltr" className="rounded-sm text-2xl font-bold tracking-tight text-main">
          {brand.name}<span className="text-brand-cyan">{brand.suffix}</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted md:gap-12">
          {nav.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="rounded-sm transition-colors duration-200 hover:text-brand-cyan">
                <Copy lang={lang} text={item.label} />
              </Link>
            </li>
          ))}
        </ul>
        <p className={lang === "he" ? "text-xs font-medium text-muted" : "text-xs font-medium uppercase tracking-widest text-muted"}>
          <Copy lang={lang} text={copyright} />
        </p>
      </div>
    </footer>
  );
}
