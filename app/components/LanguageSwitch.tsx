"use client";

import { useEffect, useState } from "react";
import type { Lang } from "../i18n/types";

const switchClass =
  "inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg border border-white/20 px-2.5 text-sm font-semibold text-muted transition-colors duration-200 hover:border-white/40 hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan";

export default function LanguageSwitch({
  href,
  label,
  labelLang,
  hrefLang,
  ariaLabel,
}: {
  href: string;
  label: string;
  labelLang: Lang;
  hrefLang: Lang;
  ariaLabel: string;
}) {
  const [target, setTarget] = useState(href);

  useEffect(() => {
    const hash = window.location.hash;
    setTarget(hash ? `${href}${hash}` : href);
  }, [href]);

  return (
    <a href={target} hrefLang={hrefLang} aria-label={ariaLabel} className={switchClass}>
      <span lang={labelLang}>{label}</span>
    </a>
  );
}
