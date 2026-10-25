import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ExpertiseCard from "./ExpertiseCard";
import { AreaVisual, areaGlow } from "./areaVisuals";
import { getDictionary } from "../i18n";
import type { Lang } from "../i18n";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-brand-cyan px-8 py-4 text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-main transition-all duration-200 hover:scale-105 hover:bg-white/10";

function FounderFrame({
  ariaLabel,
  brand,
  role,
}: {
  ariaLabel: string;
  brand: string;
  role: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0" aria-label={ariaLabel}>
      <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] shadow-[0_0_36px_rgba(0,194,255,0.28)]">
      <div className="flex aspect-[4/5] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-card">
        <div className="relative min-h-0 flex-1">
          <svg viewBox="0 0 320 420" className="h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="founder-glow" cx="50%" cy="42%" r="55%">
                <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="320" height="420" fill="#131B2E" />
            <rect width="320" height="420" fill="url(#founder-glow)" />
            <g stroke="#00C2FF" strokeOpacity="0.45" strokeWidth="1.4">
              <path d="M70 150 H160 V250 H250" fill="none" />
              <path d="M160 90 V250 M110 200 H230" />
              <circle cx="160" cy="168" r="46" fill="none" strokeDasharray="3 6" />
            </g>
            <g fill="#00C2FF">
              <circle cx="70" cy="150" r="6" />
              <circle cx="160" cy="90" r="6" />
              <circle cx="160" cy="168" r="8" />
              <circle cx="160" cy="250" r="6" />
              <circle cx="250" cy="250" r="6" />
              <circle cx="230" cy="200" r="5" />
              <circle cx="110" cy="200" r="5" />
            </g>
            <g fill="#E7F8FF">
              <circle cx="160" cy="168" r="3" />
              <circle cx="250" cy="250" r="2.5" />
            </g>
          </svg>
        </div>
        <figcaption className="border-t border-white/10 bg-[#10182A]/80 px-6 py-5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-ink">
              AR
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">{brand}</p>
              <p className="text-base font-semibold text-main">{role}</p>
            </div>
          </div>
        </figcaption>
      </div>
      </div>
    </figure>
  );
}

export default function AboutPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const about = dict.about;

  return (
    <main className="min-h-screen bg-main pt-16 text-main selection:bg-brand-cyan/30">
      <Header brand={dict.brand} nav={dict.nav} a11y={dict.header} />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <section className="mb-20 grid items-center gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="mb-8 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-main sm:text-5xl md:text-7xl">
              {about.headlineBefore}<span className="text-brand-cyan">{about.headlineAccent}</span>{about.headlineAfter}
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl">
              {about.intro}
            </p>
          </div>
          <FounderFrame ariaLabel={about.founderAriaLabel} brand={about.founderBrand} role={about.founderRole} />
        </section>

        <section aria-labelledby="core-areas-heading">
          <div className="mb-12 max-w-2xl">
            <h2 id="core-areas-heading" className="text-4xl font-bold tracking-tight text-main md:text-5xl">
              {about.areasTitle}
            </h2>
            <p className="mt-4 text-lg text-muted">
              {about.areasIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {about.areas.map((area) => {
              const service = dict.services[area.id];
              return (
                <ExpertiseCard
                  key={area.id}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                  caption={area.caption}
                  visual={<AreaVisual id={area.id} />}
                  glow={areaGlow[area.id]}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-card px-6 py-16 text-center shadow-glow md:mt-32 md:py-24">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-main md:text-6xl">
            {about.ctaBefore}<span className="text-brand-cyan">{about.ctaAccent}</span>{about.ctaAfter}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-muted md:text-xl">
            {about.ctaBody}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href={about.primaryHref} className={primaryButtonClass}>
              {about.primaryCta}
            </Link>
            <Link href={about.secondaryHref} className={secondaryButtonClass}>
              {about.secondaryCta}
            </Link>
          </div>
        </section>
      </div>

      <Footer brand={dict.brand} nav={dict.nav} copyright={dict.footer.copyright} />
    </main>
  );
}
