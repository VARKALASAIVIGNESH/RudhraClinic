import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Homoeopathy?",
    a: "Homoeopathy is a 200+ year old system of medicine based on the principle of 'like cures like.' It uses highly diluted natural substances to stimulate the body's own healing response, treating the whole person — not just isolated symptoms.",
  },
  {
    q: "Is Homoeopathy safe?",
    a: "Yes. Homoeopathic remedies are non-toxic, non-addictive and safe for infants, pregnant women, the elderly and those on conventional medication. They work gently without side effects when prescribed by a qualified physician.",
  },
  {
    q: "How long does treatment take?",
    a: "Acute conditions often respond within days. Chronic illnesses typically need a few months of consistent treatment — depending on duration, severity and individual response. Dr. Soundarya will share realistic timelines during your consultation.",
  },
  {
    q: "Can chronic illnesses be managed?",
    a: "Absolutely. PCOD, thyroid, arthritis, asthma, skin and many other chronic conditions respond very well to constitutional homoeopathy combined with the yoga and diet protocols we prescribe.",
  },
  {
    q: "Do you provide online consultations?",
    a: "Yes — we offer secure online consultations for patients across India and abroad. After your case is taken, remedies and personalised protocols are couriered or shared digitally.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">FAQ</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Questions, gently answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-card transition-all ${
                  isOpen ? "border-copper/40 shadow-soft" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-brown md:text-xl">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper/10 text-copper">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
