import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ExpertiseCard from "./ExpertiseCard";
import { AreaVisual, areaGlow } from "./areaVisuals";
import { Copy } from "./Copy";
import { getDictionary } from "../i18n";
import type { Lang } from "../i18n";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-brand-cyan px-8 py-4 text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)]";

function FounderFrame({
  ariaLabel,
  brand,
  role,
  photoLabel,
  mirror,
}: {
  ariaLabel: string;
  brand: string;
  role: string;
  photoLabel: string;
  mirror: boolean;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:ms-auto lg:me-0" aria-label={ariaLabel}>
      <div className={`rounded-[1.75rem] p-[2px] shadow-[0_0_36px_rgba(0,194,255,0.28)] ${mirror ? "bg-gradient-to-bl from-cyan-500 to-blue-600" : "bg-gradient-to-br from-cyan-500 to-blue-600"}`}>
        <div className="flex aspect-[4/5] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-card">
          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.22),transparent_62%)]">
            <div role="img" aria-label={photoLabel} className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-[#10182A] text-3xl font-bold text-brand-cyan">
              AR
            </div>
          </div>
          <figcaption className="border-t border-white/10 bg-[#10182A]/80 px-6 py-5 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-ink">
                AR
              </div>
              <div>
                <p dir="ltr" className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">{brand}</p>
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
      <Header
        brand={dict.brand}
        nav={dict.nav}
        a11y={dict.header}
        switchTo={{
          href: dict.switcher.aboutHref,
          label: dict.switcher.label,
          labelLang: dict.switcher.labelLang,
          hrefLang: dict.switcher.hreflang,
          ariaLabel: dict.switcher.ariaLabel,
        }}
        lang={lang}
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <section className="mb-20 grid items-center gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1
              className={
                lang === "he"
                  ? "mb-8 text-balance text-4xl font-bold leading-[1.25] text-main sm:text-5xl md:text-6xl"
                  : "mb-8 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-main sm:text-5xl md:text-7xl"
              }
            >
              <Copy lang={lang} text={about.headlineBefore} />
              <span className="text-brand-cyan">
                <Copy lang={lang} text={about.headlineAccent} />
              </span>
              <Copy lang={lang} text={about.headlineAfter} />
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl">
              <Copy lang={lang} text={about.intro} />
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              <Copy lang={lang} text={about.background} />
            </p>
          </div>
          <FounderFrame
            ariaLabel={about.founderAriaLabel}
            brand={about.founderBrand}
            role={about.founderRole}
            photoLabel={about.photoLabel}
            mirror={lang === "he"}
          />
        </section>

        <section id="how-i-work" className="mb-20 scroll-mt-24 lg:mb-32">
          <div className="mb-12 max-w-2xl">
            <h2
              className={
                lang === "he"
                  ? "text-4xl font-bold leading-snug text-main md:text-5xl"
                  : "text-4xl font-bold tracking-tight text-main md:text-5xl"
              }
            >
              <Copy lang={lang} text={about.howTitle} />
            </h2>
            <p className="mt-4 text-lg text-muted">
              <Copy lang={lang} text={about.howIntro} />
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {about.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm font-bold text-brand-cyan">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-bold text-main">
                  <Copy lang={lang} text={step.title} />
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  <Copy lang={lang} text={step.body} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="core-areas-heading">
          <div className="mb-12 max-w-2xl">
            <h2
              id="core-areas-heading"
              className={
                lang === "he"
                  ? "text-4xl font-bold leading-snug text-main md:text-5xl"
                  : "text-4xl font-bold tracking-tight text-main md:text-5xl"
              }
            >
              <Copy lang={lang} text={about.areasTitle} />
            </h2>
            <p className="mt-4 text-lg text-muted">
              <Copy lang={lang} text={about.areasIntro} />
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
                  outcomeLabel={service.outcomeLabel}
                  outcome={service.outcome}
                  tags={service.tags}
                  caption={area.caption}
                  visual={<AreaVisual id={area.id} />}
                  glow={areaGlow[area.id]}
                  href={service.ctaHref}
                  cta={service.cta}
                  lang={lang}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-card px-6 py-16 text-center shadow-glow md:mt-32 md:py-24">
          <h2
            className={
              lang === "he"
                ? "mb-8 text-4xl font-bold leading-snug text-main md:text-6xl"
                : "mb-8 text-4xl font-bold tracking-tight text-main md:text-6xl"
            }
          >
            <Copy lang={lang} text={about.ctaBefore} />
            <span className="text-brand-cyan">
              <Copy lang={lang} text={about.ctaAccent} />
            </span>
            <Copy lang={lang} text={about.ctaAfter} />
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-muted md:text-xl">
            <Copy lang={lang} text={about.ctaBody} />
          </p>
          <Link href={about.primaryHref} className={primaryButtonClass}>
            <Copy lang={lang} text={about.primaryCta} />
          </Link>
        </section>
      </div>

      <Footer brand={dict.brand} nav={dict.nav} copyright={dict.footer.copyright} lang={lang} />
    </main>
  );
}
