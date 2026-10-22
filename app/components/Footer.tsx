import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="py-20 bg-[#101c2e] border-t border-[#3c494e]/10 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#a8e8ff] rounded-sm">
          ARdata.ai
        </Link>
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12 text-[#bbc9cf] font-medium text-sm">
          {FOOTER_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-[#00d4ff] transition-colors rounded-sm">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-[#7fa8d4] text-xs font-medium uppercase tracking-widest">
          © 2026 ARdata.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
