import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import FaqSection from "./FaqSection";
import ExpertiseCard from "./ExpertiseCard";
import PlatformShowcase from "./PlatformShowcase";
import { AreaVisual, areaGlow } from "./areaVisuals";
import { Copy } from "./Copy";
import { getDictionary } from "../i18n";
import type { Lang } from "../i18n";

const primaryButtonClass =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand-cyan px-8 py-4 text-center text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)] sm:w-auto";

const secondaryButtonClass =
  "inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-transparent px-8 py-4 text-center text-lg font-semibold text-main transition-all duration-200 hover:scale-105 hover:bg-white/10 sm:w-auto";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-main p-3 text-main outline-none transition-all duration-200 placeholder:text-[#64748B] focus:border-brand-cyan";

function eyebrow(lang: Lang) {
  return lang === "he"
    ? "text-xs font-bold text-muted"
    : "text-xs font-bold uppercase tracking-widest text-muted";
}

export default function HomePage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const { contact } = dict;

  return (
    <main className="relative overflow-x-hidden bg-main text-main selection:bg-brand-cyan/30 pt-16">
      <Header
        brand={dict.brand}
        nav={dict.nav}
        a11y={dict.header}
        switchTo={{
          href: dict.switcher.homeHref,
          label: dict.switcher.label,
          labelLang: dict.switcher.labelLang,
          hrefLang: dict.switcher.hreflang,
          ariaLabel: dict.switcher.ariaLabel,
        }}
        lang={lang}
      />

      <header className="relative flex items-center justify-center px-6 pb-8 pt-14 text-center md:px-12 md:pb-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.18),transparent_55%)]" />

        <div className="mx-auto w-full max-w-[1400px]">
          <h1
            className={
              lang === "he"
                ? "mb-6 text-4xl font-bold leading-[1.3] text-main md:text-6xl lg:text-7xl"
                : "mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-main md:text-6xl lg:text-7xl"
            }
          >
            {dict.hero.lines.map((line) => (
              <span key={line.text} className={line.accent ? "block text-brand-cyan" : "block"}>
                <Copy lang={lang} text={line.text} />
              </span>
            ))}
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-muted md:text-2xl">
            <Copy lang={lang} text={dict.hero.subtitle} />
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a href={dict.hero.primaryHref} className={primaryButtonClass}>
              <Copy lang={lang} text={dict.hero.primaryCta} />
            </a>
            <Link href={dict.hero.secondaryHref} className={secondaryButtonClass}>
              <Copy lang={lang} text={dict.hero.secondaryCta} />
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm font-medium text-muted">
            <Copy lang={lang} text={dict.hero.trust} />
          </p>
        </div>
      </header>

      <section id="services" className="scroll-mt-20 px-6 pb-16 pt-6 md:px-12 md:pb-24 md:pt-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2
              className={
                lang === "he"
                  ? "text-4xl font-bold leading-snug text-main md:text-6xl"
                  : "text-4xl font-bold tracking-tight text-main md:text-6xl"
              }
            >
              <Copy lang={lang} text={dict.homeServices.title} />
            </h2>
            <p className="mt-5 text-lg text-muted md:text-xl">
              <Copy lang={lang} text={dict.homeServices.subtitle} />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {dict.homeServices.areas.map((area) => {
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
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-12 max-w-2xl">
            <h2
              className={
                lang === "he"
                  ? "text-4xl font-bold leading-snug text-main md:text-5xl"
                  : "text-4xl font-bold tracking-tight text-main md:text-5xl"
              }
            >
              <Copy lang={lang} text={dict.approach.title} />
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
              <Copy lang={lang} text={dict.approach.intro} />
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {dict.approach.steps.map((step, index) => (
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
        </div>
      </section>

      <PlatformShowcase
        label={dict.platforms.label}
        ariaLabel={dict.platforms.ariaLabel}
        names={dict.platforms.names}
        lang={lang}
      />

      <FaqSection heading={dict.faq.heading} faqs={dict.faq.items} lang={lang} />

      <section id="contact" className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl border border-white/10 bg-card p-6 shadow-glow sm:p-10 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2
                className={
                  lang === "he"
                    ? "mb-6 text-4xl font-bold leading-snug text-main md:text-5xl"
                    : "mb-6 text-4xl font-bold leading-tight tracking-tight text-main md:text-5xl"
                }
              >
                <Copy lang={lang} text={contact.headline} />
              </h2>
              <p className="mb-10 text-lg font-medium text-muted md:text-xl">
                <Copy lang={lang} text={contact.intro} />
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                    @
                  </div>
                  <div>
                    <div className={`mb-1 ${eyebrow(lang)}`}>
                      <Copy lang={lang} text={contact.emailLabel} />
                    </div>
                    <a href={`mailto:${contact.emailAddress}`} dir="ltr" className="text-lg font-bold text-main transition-colors duration-200 hover:text-brand-cyan md:text-xl">
                      {contact.emailAddress}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                    #
                  </div>
                  <div>
                    <div className={`mb-1 ${eyebrow(lang)}`}>
                      <Copy lang={lang} text={contact.hqLabel} />
                    </div>
                    <div className="text-lg font-bold text-main md:text-xl">
                      <Copy lang={lang} text={contact.hqValue} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-soft p-6 sm:p-8">
              <form className="space-y-6" action="https://formspree.io/f/mpqoegpa" method="POST">
                <input type="hidden" name="language" value={lang} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className={eyebrow(lang)} htmlFor="firstName">
                      <Copy lang={lang} text={contact.firstNameLabel} />
                    </label>
                    <input id="firstName" name="firstName" type="text" placeholder={contact.firstNamePlaceholder} className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <label className={eyebrow(lang)} htmlFor="company">
                      <Copy lang={lang} text={contact.companyLabel} />
                    </label>
                    <input id="company" name="company" type="text" placeholder={contact.companyPlaceholder} className={fieldClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={eyebrow(lang)} htmlFor="email">
                    <Copy lang={lang} text={contact.emailFieldLabel} />
                  </label>
                  <input id="email" name="email" type="email" dir="ltr" placeholder={contact.emailPlaceholder} className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <label className={eyebrow(lang)} htmlFor="inquiryType">
                    <Copy lang={lang} text={contact.inquiryLabel} />
                  </label>
                  <select id="inquiryType" name="inquiryType" className={`${fieldClass} appearance-none`}>
                    {contact.inquiryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={eyebrow(lang)} htmlFor="message">
                    <Copy lang={lang} text={contact.messageLabel} />
                  </label>
                  <textarea id="message" name="message" placeholder={contact.messagePlaceholder} rows={4} className={`${fieldClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-cyan px-8 py-4 text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)]"
                >
                  <Copy lang={lang} text={contact.submit} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer brand={dict.brand} nav={dict.nav} copyright={dict.footer.copyright} lang={lang} />
    </main>
  );
}
