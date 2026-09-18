import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How does Classical Homoeopathy differ from conventional medicine?",
    a: "Conventional medicine primarily suppresses isolated symptoms using pharmaceuticals like antihistamines, pain-blockers, or steroid inhalers. Classical Homoeopathy evaluates your full constitutional totality — biological history, mental state, and physical sensitivities — stimulating your innate vital response to cure the root disease permanently without drug dependence.",
  },
  {
    q: "Are homoeopathic medicines safe alongside my ongoing prescriptions?",
    a: "Yes. Classical homoeopathic dilutions are micro-dosed, non-toxic, and do not chemically interfere with conventional allopathic medications like thyroid pills, insulin, or blood pressure drugs. Dr. Soundarya coordinates your treatment plan safely so you never abruptly stop critical prescribed medicines.",
  },
  {
    q: "How soon can I expect measurable improvements in chronic conditions?",
    a: "Acute flare-ups (colds, acute sinus headaches, minor skin flare) often show notable relief within 24 to 72 hours. For chronic deep-seated complaints like PCOD, asthma, or long-standing arthritis, marked clinical improvement typically occurs within 4 to 12 weeks of constitutional therapy.",
  },
  {
    q: "Why are Yoga Therapy and Diet included in every protocol?",
    a: "Health is multidimensional. While constitutional remedies correct cellular vitality, targeted Yoga asanas enhance endocrine and organ micro-circulation, Pranayama soothes autonomic hyper-reactivity, and anti-inflammatory nutrition removes metabolic toxins. The triad ensures rapid and lasting recovery.",
  },
  {
    q: "How do Online Consultations work for distant or international patients?",
    a: "Virtual consultations are conducted via high-definition video call (Google Meet or WhatsApp Video). Dr. Soundarya conducts an in-depth 45-minute case-taking session. Your customized, sealed homoeopathic remedies and detailed yoga/diet guides are then dispatched via courier directly to your doorstep with tracking.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-copper">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, transparent medical information regarding treatment timelines, safety, and consultations.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className={`modern-card rounded-2xl transition-all ${
                  isOpen ? "border-copper/40 shadow-soft" : "border-border/70"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-foreground">
                    {f.q}
                  </span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                    isOpen ? "bg-copper text-ivory" : "bg-muted text-muted-foreground"
                  }`}>
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
