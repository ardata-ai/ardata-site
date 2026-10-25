import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { Copy } from "./Copy";
import { getDictionary } from "../i18n";
import type { Lang } from "../i18n";

function headingClass(lang: Lang) {
  return lang === "he"
    ? "text-3xl font-bold leading-snug text-main md:text-4xl"
    : "text-3xl font-bold tracking-tight text-main md:text-4xl";
}

function BulletList({ lang, items }: { lang: Lang; items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-muted md:text-lg">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
          <span>
            <Copy lang={lang} text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function UseCasePage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const page = dict.useCase;

  return (
    <main className="min-h-screen bg-main pt-16 text-main selection:bg-brand-cyan/30">
      <Header
        brand={dict.brand}
        nav={dict.nav}
        a11y={dict.header}
        switchTo={{
          href: dict.switcher.useCaseHref,
          label: dict.switcher.label,
          labelLang: dict.switcher.labelLang,
          hrefLang: dict.switcher.hreflang,
          ariaLabel: dict.switcher.ariaLabel,
        }}
        lang={lang}
      />

      <article className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-3xl">
          <Link href={page.backHref} className="text-sm font-semibold text-brand-cyan hover:underline">
            <Copy lang={lang} text={page.backLabel} />
          </Link>

          <p dir="ltr" className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
            {page.eyebrow}
          </p>
          <h1
            className={
              lang === "he"
                ? "mt-4 text-balance text-4xl font-bold leading-[1.25] text-main sm:text-5xl"
                : "mt-4 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-main sm:text-5xl md:text-6xl"
            }
          >
            <Copy lang={lang} text={page.title} />
          </h1>

          <section className="mt-14">
            <h2 className={headingClass(lang)}>
              <Copy lang={lang} text={page.backgroundTitle} />
            </h2>
            {page.background.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                <Copy lang={lang} text={paragraph} />
              </p>
            ))}
          </section>

          <section className="mt-14">
            <h2 className={headingClass(lang)}>
              <Copy lang={lang} text={page.challengesTitle} />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              <Copy lang={lang} text={page.challengesIntro} />
            </p>
            <BulletList lang={lang} items={page.challenges} />
          </section>

          <section className="mt-14">
            <h2 className={headingClass(lang)}>
              <Copy lang={lang} text={page.solutionTitle} />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              <Copy lang={lang} text={page.solutionIntro} />
            </p>
            <h3 className="mt-8 text-xl font-bold text-main">
              <Copy lang={lang} text={page.techTitle} />
            </h3>
            <BulletList lang={lang} items={page.tech} />
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              <Copy lang={lang} text={page.refinementsTitle} />
            </p>
            <BulletList lang={lang} items={page.refinements} />
          </section>

          <section className="mt-14">
            <h2 className={headingClass(lang)}>
              <Copy lang={lang} text={page.deliveredTitle} />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              <Copy lang={lang} text={page.deliveredIntro} />
            </p>
            <BulletList lang={lang} items={page.delivered} />
          </section>

          <section className="mt-14">
            <h2 className={headingClass(lang)}>
              <Copy lang={lang} text={page.outcomeTitle} />
            </h2>
            {page.outcome.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                <Copy lang={lang} text={paragraph} />
              </p>
            ))}
          </section>

          <Link href={page.backHref} className="mt-14 inline-flex text-sm font-semibold text-brand-cyan hover:underline">
            <Copy lang={lang} text={page.backLabel} />
          </Link>
        </div>
      </article>

      <Footer brand={dict.brand} nav={dict.nav} copyright={dict.footer.copyright} lang={lang} />
    </main>
  );
}
