import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  Activity,
  HeartHandshake,
  Utensils,
  CalendarCheck,
  HeartPulse,
  Wind,
  Flower2,
  Moon,
  Bone,
  Brain,
  Droplet,
  ShieldCheck,
  Pill,
} from "lucide-react";
import { treatmentsData, type TreatmentDetail } from "@/lib/treatments-data";
import { Link } from "@tanstack/react-router";

// Medical Specialty Icon mapping for ultra-clean modern clinical cards
const conditionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  pcod: Flower2,
  asthma: Wind,
  "allergic-rhinitis": Wind,
  thyroid: Activity,
  "skin-hair": Sparkles,
  arthritis: Bone,
  "cervical-spondylosis": Bone,
  sciatica: Activity,
  "kidney-stones": Droplet,
  diabetes: HeartPulse,
  htn: HeartPulse,
  infertility: Flower2,
  anxiety: Brain,
  "sleep-apnea": Moon,
  "immunity-boosting": ShieldCheck,
};

// Split treatments into two balanced sets for two rotating marquee rows
const row1 = treatmentsData.slice(0, 8);
const row2 = treatmentsData.slice(8);
const row1Repeated = [...row1, ...row1, ...row1, ...row1];
const row2Repeated = [...row2, ...row2, ...row2, ...row2];

export function TreatmentsSection() {
  const [activeModal, setActiveModal] = useState<TreatmentDetail | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "homeopathy" | "yoga" | "diet">("overview");

  const renderCard = (t: TreatmentDetail, key: string) => {
    const Icon = conditionIcons[t.id] || Pill;
    const imageSrc = t.image;

    return (
      <article
        key={key}
        onClick={() => {
          setActiveModal(t);
          setActiveTab("overview");
        }}
        className="group relative cursor-pointer w-[220px] sm:w-[250px] shrink-0 overflow-hidden rounded-2xl flex flex-col justify-between bg-card border border-border shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-deep hover:border-copper/35 select-none"
      >
        {/* Card Image with floating badges */}
        <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-muted">
          <img
            src={imageSrc}
            alt={t.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = t.image;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent" />

          {/* Category Pill */}
          <span className="absolute top-2 left-2 rounded-md bg-stone-900/80 backdrop-blur-md border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-copper">
            {t.category}
          </span>

          {/* Specialty Icon */}
          <div className="absolute top-2 right-2 grid h-6 w-6 place-items-center rounded-lg bg-stone-900/80 backdrop-blur-md border border-white/10 text-ivory group-hover:bg-copper group-hover:text-ivory transition-colors">
            <Icon className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-display text-sm sm:text-[15px] font-bold text-foreground transition-colors duration-200 group-hover:text-copper leading-snug line-clamp-1">
              {t.name}
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
              {t.shortDesc}
            </p>
          </div>

          {/* Footer Link */}
          <div className="mt-2.5 pt-2 flex items-center justify-between border-t border-border/50 text-[11px] font-bold text-copper">
            <span>View Protocol</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="treatments" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, oklch(0.52 0.06 115 / 0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
            Conditions Treated at{" "}
            <span className="gradient-text-copper">Rudhra Clinic</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Targeting the internal root cause with classical constitutional homoeopathy, personalized yoga postures, and metabolic dietary advice.
          </p>
        </div>
      </div>

      {/* Dual Rotating Marquee Rows */}
      <div className="relative w-full mt-8 sm:mt-10 overflow-hidden space-y-4 sm:space-y-5">
        {/* Soft edge fade masks on sides across both rows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-20" />

        {/* Row 1: Left to Right */}
        <div className="marquee-track overflow-hidden">
          <div className="flex animate-marquee-ltr gap-4 sm:gap-5 items-stretch py-1">
            {row1Repeated.map((t, idx) => renderCard(t, `r1-${t.id}-${idx}`))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-track overflow-hidden">
          <div className="flex animate-marquee-rtl gap-4 sm:gap-5 items-stretch py-1">
            {row2Repeated.map((t, idx) => renderCard(t, `r2-${t.id}-${idx}`))}
          </div>
        </div>
      </div>

      {/* Interactive Condition Deep-Dive Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-up">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-elegant p-6 sm:p-8 text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={activeModal.image}
                  alt={activeModal.name}
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl object-cover border border-border/80 shrink-0 shadow-soft"
                />
                <div>
                  <span className="rounded-md bg-olive/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-olive dark:text-olive-soft">
                    {activeModal.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-foreground">
                    {activeModal.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="rounded-full border border-border p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="mt-5 flex flex-wrap gap-1.5 border-b border-border/40 pb-3">
              {[
                { id: "overview", label: "Symptoms & Root Cause", icon: Activity },
                { id: "homeopathy", label: "Homoeopathy Protocol", icon: HeartHandshake },
                { id: "yoga", label: "Yoga & Breathwork", icon: Sparkles },
                { id: "diet", label: "Diet Guidelines", icon: Utensils },
              ].map((tab) => {
                const active = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? "bg-copper text-ivory"
                        : "border border-border bg-muted/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Modal Tab Content */}
            <div className="mt-6 space-y-5 text-sm leading-relaxed">
              {activeTab === "overview" && (
                <div className="space-y-5 animate-fade-up">
                  <div>
                    <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-copper" />
                      Key Symptoms & Clinical Signs
                    </h4>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                      {activeModal.symptoms.map((sym, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-2.5 text-xs"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-copper shrink-0" />
                          <span className="text-muted-foreground">{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-muted/20 p-4">
                    <h4 className="font-display text-sm font-bold text-copper flex items-center gap-1.5">
                      <Activity className="h-4 w-4" />
                      Root Pathological Trigger
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeModal.rootCause}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "homeopathy" && (
                <div className="space-y-4 animate-fade-up">
                  <div className="rounded-2xl border border-olive/20 bg-olive/5 dark:bg-olive/10 p-4">
                    <h4 className="font-display text-base font-bold text-olive dark:text-olive-soft flex items-center gap-2">
                      <HeartHandshake className="h-4 w-4" />
                      Constitutional Homoeopathic Care
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeModal.homeopathyCare}
                    </p>
                  </div>
                  <p className="text-[11px] text-muted-foreground italic">
                    *Prescriptions are strictly individualized following Dr. Soundarya's clinical case-taking and evaluation.
                  </p>
                </div>
              )}

              {activeTab === "yoga" && (
                <div className="space-y-4 animate-fade-up">
                  <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-copper" />
                    Doctor-Prescribed Therapeutic Asanas & Breathwork
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeModal.yogaProtocol.map((yoga, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3 text-xs"
                      >
                        <span className="grid h-6 w-6 place-items-center rounded-md bg-copper/10 text-copper font-bold text-[11px]">
                          {i + 1}
                        </span>
                        <span className="font-medium text-foreground">{yoga}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "diet" && (
                <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <h4 className="font-display text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      Foods to Incorporate
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {activeModal.dietGuidelines.recommended.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <h4 className="font-display text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4" />
                      Foods to Avoid
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {activeModal.dietGuidelines.avoid.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="text-rose-600 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4">
              <span className="text-xs text-muted-foreground">
                Dr. Soundarya, B.H.M.S, D.Y.T · Shadnagar & Online
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModal(null)}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
                <Link
                  to="/appointment"
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2 text-xs font-semibold text-ivory shadow-sm transition-all hover:opacity-90"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Consult for {activeModal.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
