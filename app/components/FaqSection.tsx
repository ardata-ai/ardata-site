"use client";

import { useState } from "react";

type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ heading, faqs }: { heading: string; faqs: readonly Faq[] }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-main md:mb-16 md:text-5xl">
          {heading}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            const isOpen = activeFaq === i;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-card shadow-glow transition-all duration-200 hover:-translate-y-1"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 rounded-xl p-6 text-left text-lg font-bold text-main"
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                  >
                    {faq.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-brand-cyan transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <p className="border-t border-white/10 px-6 pb-6 pt-4 font-medium leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
