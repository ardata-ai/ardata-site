import type { ReactNode } from "react";
import { BrowserFrame } from "./VisualFrames";

type ExpertiseCardProps = {
  title: string;
  description: string;
  tags: string[];
  caption: string;
  visual: ReactNode;
  glow?: string;
  href?: string;
  cta?: string;
};

export default function ExpertiseCard({
  title,
  description,
  tags,
  caption,
  visual,
  glow = "from-cyan-500/20 via-purple-500/15 to-transparent",
  href,
  cta,
}: ExpertiseCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card shadow-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-0 h-48 w-[88%] -translate-x-1/2 bg-gradient-to-tr ${glow} blur-2xl`}
      />
      <BrowserFrame caption={caption}>{visual}</BrowserFrame>
      <div className="relative flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-xl font-bold tracking-tight text-main">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-main"
              >
                {tag}
              </li>
            ))}
          </ul>
          {href && cta ? (
            <a href={href} className="mt-5 inline-flex text-sm font-bold text-brand-cyan hover:underline">
              {cta}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
