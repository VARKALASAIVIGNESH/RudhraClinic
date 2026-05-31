import { Link } from "@tanstack/react-router";
import {
  Wind, Flower2, Bone, Droplets, Venus, Sparkles, Scissors, Baby,
  Activity, HeartPulse, Pill, Stethoscope, ArrowRight,
} from "lucide-react";

const treatments = [
  { icon: Wind, name: "Asthma", desc: "Gentle long-term relief without dependency on inhalers." },
  { icon: Flower2, name: "Allergic Rhinitis", desc: "Restore immunity & ease seasonal triggers." },
  { icon: Bone, name: "Arthritis", desc: "Reduce pain and stiffness, restore joint mobility." },
  { icon: Droplets, name: "Kidney Stones", desc: "Dissolve, pass and prevent recurrence naturally." },
  { icon: Venus, name: "PCOD", desc: "Hormonal balance, cycle regulation & fertility care." },
  { icon: Sparkles, name: "Skin Problems", desc: "Eczema, psoriasis, acne — treated from within." },
  { icon: Scissors, name: "Hair Problems", desc: "Hair fall, dandruff & scalp issues addressed at root." },
  { icon: Baby, name: "Infertility", desc: "Constitutional support for natural conception." },
  { icon: Activity, name: "Thyroid Disorders", desc: "Restore thyroid harmony & metabolism." },
  { icon: HeartPulse, name: "Hypertension", desc: "Calm the system, support cardiovascular health." },
  { icon: Pill, name: "Diabetes", desc: "Lifestyle + remedies for sustainable sugar control." },
  { icon: Stethoscope, name: "Acute & Chronic", desc: "From everyday ailments to long-standing illness." },
];

export function TreatmentsSection() {
  return (
    <section className="relative bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Treatments</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Conditions we care for
          </h2>
          <p className="mt-4 text-muted-foreground">
            Classical homoeopathy paired with yoga and diet — addressing acute symptoms while
            healing the root cause for lasting wellness.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-copper/5 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-copper text-ivory shadow-glow">
                <t.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-serif text-xl text-brown">{t.name}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
              <Link
                to="/treatments"
                className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-copper"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
