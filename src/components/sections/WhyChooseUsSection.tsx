import { Check } from "lucide-react";

const items = [
  { t: "Personalised Treatment", d: "Every prescription is hand-tailored to your constitution and lifestyle." },
  { t: "Holistic Healing", d: "We treat the person, not just the diagnosis — mind, body and energy together." },
  { t: "Homoeopathy + Yoga + Diet", d: "Three integrated pillars working in harmony for deeper, lasting results." },
  { t: "Root Cause Focus", d: "Beyond symptom suppression — we resolve what triggers the illness." },
  { t: "Gentle & Individualised", d: "Safe, non-toxic remedies suitable for children, adults and seniors." },
  { t: "Professional Consultation", d: "Thorough case-taking, follow-ups and patient education at every step." },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Why Choose Us</p>
            <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
              A philosophy of care, refined over years of practice.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our approach honours the wisdom of classical homoeopathy while embracing the
              evidence-backed benefits of yoga and conscious eating. The result: care that feels
              calm, considered, and deeply personal.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <li
                key={i.t}
                className="group rounded-3xl border border-border bg-card p-6 hover-lift"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-olive/10 text-olive">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <p className="mt-4 font-serif text-lg text-brown">{i.t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
