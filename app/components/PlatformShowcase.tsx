import type { ReactNode } from "react";
import type { Dictionary, Lang } from "../i18n/types";
import { Copy } from "./Copy";

function OpenAiMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 4.51 2.09 6.07 6.07 0 0 0 5.77-4.16 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.74-7.1zM13.26 22.42a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.67v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zM3.6 18.17a4.47 4.47 0 0 1-.53-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.82a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.36-1.97v5.83a.78.78 0 0 0 .39.67l5.83 3.37-2.02 1.17a.07.07 0 0 1-.07 0L4 14.17A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86-5.83-3.36 2.02-1.17a.07.07 0 0 1 .06 0l4.85 2.79a4.5 4.5 0 0 1-.67 8.1v-5.83a.78.78 0 0 0-.43-.53zm2.01-3.03-.14-.09-4.78-2.76a.78.78 0 0 0-.78 0L9.4 9.25V6.92a.08.08 0 0 1 .03-.06l4.84-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86 6.29 11.7a.08.08 0 0 1-.04-.06V6.05a4.5 4.5 0 0 1 7.37-3.45l-.14.09-4.78 2.76a.78.78 0 0 0-.39.67zm1.85-1.07 2.59-1.5 2.6 1.5v2.99l-2.6 1.5-2.59-1.5z"
      />
    </svg>
  );
}

function AnthropicMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 1.5 18.4 10 27 6.8l-5.6 6.6L30.5 16 21.4 18.6 23.2 27 16 21.2 8.8 27l1.8-8.4L1.5 16l9.1-2.6L5 6.8 13.6 10z"
      />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path fill="currentColor" d="M23.5 12.27c0-.82-.07-1.6-.21-2.36H12v4.48h6.46a5.53 5.53 0 0 1-2.4 3.63v3.01h3.88c2.27-2.09 3.56-5.17 3.56-8.76z" />
      <path fill="currentColor" fillOpacity="0.72" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3.01c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.76-2.11-6.7-4.94H1.29v3.1A12 12 0 0 0 12 24z" />
      <path fill="currentColor" fillOpacity="0.5" d="M5.3 14.29A7.2 7.2 0 0 1 4.92 12c0-.79.14-1.56.38-2.29V6.61H1.29A12 12 0 0 0 0 12c0 1.94.46 3.77 1.29 5.39l4.01-3.1z" />
      <path fill="currentColor" fillOpacity="0.85" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.95 1.14 15.23 0 12 0 7.31 0 3.25 2.69 1.29 6.61l4.01 3.1C6.24 6.88 8.88 4.77 12 4.77z" />
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path fill="currentColor" d="M1 1h10.2v10.2H1z" />
      <path fill="currentColor" fillOpacity="0.82" d="M12.8 1H23v10.2H12.8z" />
      <path fill="currentColor" fillOpacity="0.64" d="M1 12.8h10.2V23H1z" />
      <path fill="currentColor" fillOpacity="0.9" d="M12.8 12.8H23V23H12.8z" />
    </svg>
  );
}

function AwsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        d="M4.2 14.2c2.2 2.6 5.2 3.8 7.8 3.8s5.6-1.2 7.8-3.8"
      />
      <path fill="currentColor" d="m18.2 12.1 2.6 2.7-3.6.9z" />
    </svg>
  );
}

function SnowflakeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.4v19.2M4.1 6.8l15.8 10.4M19.9 6.8 4.1 17.2" />
        <path d="M12 6.4 9.8 4.2M12 6.4l2.2-2.2M12 17.6 9.8 19.8M12 17.6l2.2 2.2" />
        <path d="m7.2 8.6-2.6-1M7.2 8.6 6.4 11.2M16.8 15.4l2.6 1M16.8 15.4l.8-2.6" />
        <path d="m16.8 8.6 2.6-1M16.8 8.6l.8 2.6M7.2 15.4l-2.6 1M7.2 15.4 6.4 12.8" />
      </g>
    </svg>
  );
}

const platformIcons: Record<Dictionary["platforms"]["names"][number], ReactNode> = {
  OpenAI: <OpenAiMark />,
  Anthropic: <AnthropicMark />,
  Google: <GoogleMark />,
  Microsoft: <MicrosoftMark />,
  AWS: <AwsMark />,
  Snowflake: <SnowflakeMark />,
};

export default function PlatformShowcase({
  label,
  ariaLabel,
  names,
  lang,
}: {
  label: string;
  ariaLabel: string;
  names: Dictionary["platforms"]["names"];
  lang: Lang;
}) {
  return (
    <section id="tools" className="scroll-mt-20 border-y border-white/10 bg-soft py-20 md:py-32" aria-label={ariaLabel}>
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <p
          className={
            lang === "he"
              ? "mb-10 text-center text-xs font-bold text-muted"
              : "mb-10 text-center text-xs font-bold uppercase tracking-[0.22em] text-muted"
          }
        >
          <Copy lang={lang} text={label} />
        </p>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {names.map((name) => (
            <li key={name} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-card px-4 py-6 text-white">
              <span className="flex h-10 w-10 items-center justify-center text-brand-cyan">{platformIcons[name]}</span>
              <span dir="ltr" className="text-sm font-semibold tracking-tight text-main">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
