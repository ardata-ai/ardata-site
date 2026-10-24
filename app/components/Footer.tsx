import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-soft px-6 py-16 text-center md:px-12 md:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 md:flex-row">
        <Link href="/" className="rounded-sm text-2xl font-bold tracking-tight text-main">
          ARdata<span className="text-brand-cyan">.ai</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted md:gap-12">
          {FOOTER_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="rounded-sm transition-colors duration-200 hover:text-brand-cyan">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          © 2026 ARdata.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
