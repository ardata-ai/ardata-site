import type { ReactNode } from "react";
import type { Lang } from "../i18n/types";
import { Copy } from "./Copy";
import { BrowserFrame } from "./VisualFrames";

type ExpertiseCardProps = {
  title: string;
  description: string;
  outcomeLabel: string;
  outcome: string;
  tags: string[];
  caption: string;
  visual: ReactNode;
  glow?: string;
  href: string;
  cta: string;
  lang: Lang;
};

export default function ExpertiseCard({
  title,
  description,
  outcomeLabel,
  outcome,
  tags,
  caption,
  visual,
  glow = "from-cyan-500/20 via-purple-500/15 to-transparent",
  href,
  cta,
  lang,
}: ExpertiseCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-0 h-48 w-[88%] -translate-x-1/2 ${lang === "he" ? "bg-gradient-to-tl" : "bg-gradient-to-tr"} ${glow} blur-2xl`}
      />
      <BrowserFrame caption={caption}>{visual}</BrowserFrame>
      <div className="relative flex flex-1 flex-col p-7 md:p-8">
        <h3 className={lang === "he" ? "text-xl font-bold leading-snug text-main" : "text-xl font-bold tracking-tight text-main"}>
          <Copy lang={lang} text={title} />
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          <Copy lang={lang} text={description} />
        </p>
        <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-main">
          <span className={lang === "he" ? "mb-1 block text-xs font-bold text-brand-cyan" : "mb-1 block text-xs font-bold uppercase tracking-widest text-brand-cyan"}>
            <Copy lang={lang} text={outcomeLabel} />
          </span>
          <Copy lang={lang} text={outcome} />
        </p>
        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-main"
              >
                <Copy lang={lang} text={tag} />
              </li>
            ))}
          </ul>
          <a href={href} className="mt-5 inline-flex text-sm font-bold text-brand-cyan hover:underline">
            <Copy lang={lang} text={cta} />
          </a>
        </div>
      </div>
    </article>
  );
}
