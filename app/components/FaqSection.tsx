"use client";

import { useState } from "react";

type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 max-w-4xl mx-auto px-6 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
        Common Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          const isOpen = activeFaq === i;

          return (
            <div
              key={faq.q}
              className="bg-[#101c2e] border border-[#3c494e]/15 rounded-xl overflow-hidden transition-all hover:border-[#00d4ff]/20"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex justify-between items-center w-full p-6 text-left text-lg font-bold text-white rounded-xl"
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                >
                  {faq.q}
                  <span
                    className={`text-[#00d4ff] text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}
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
                <p className="px-6 pb-6 text-[#bbc9cf] leading-relaxed border-t border-[#3c494e]/10 pt-4 font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
