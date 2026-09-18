import { ShieldCheck, Leaf, Stethoscope, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const distinctions = [
  {
    tag: "Individualized",
    title: "Constitutional Precision",
    desc: "Every remedy is uniquely matched to your biological, genetic, and emotional constitution.",
    icon: Stethoscope,
    accentBg: "bg-copper/10 text-copper border-copper/25",
    hoverBorder: "hover:border-copper/40",
    barColor: "bg-copper",
  },
  {
    tag: "Zero Suppression",
    title: "Permanent Root Relief",
    desc: "Eliminates the internal pathological trigger — zero steroids, hormonal drugs, or painkillers.",
    icon: ShieldCheck,
    accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
    hoverBorder: "hover:border-emerald-500/40",
    barColor: "bg-emerald-500",
  },
  {
    tag: "100% Non-Toxic",
    title: "Safe Across All Ages",
    desc: "Natural micro-doses with zero side-effects — safe for infants, pregnant mothers, and seniors.",
    icon: Leaf,
    accentBg: "bg-olive/10 text-olive dark:text-olive-soft border-olive/25",
    hoverBorder: "hover:border-olive/40",
    barColor: "bg-olive",
  },
  {
    tag: "Direct Care",
    title: "Dedicated Doctor Tracking",
    desc: "Direct WhatsApp recovery monitoring and personalized case reviews with Dr. Soundarya.",
    icon: MessageCircle,
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25",
    hoverBorder: "hover:border-amber-500/40",
    barColor: "bg-amber-500",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 40%, oklch(0.585 0.118 52 / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left: Headline & Authentic Doctor Spotlight */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight text-balance leading-[1.14]">
              A Philosophy of Care{" "}
              <span className="gradient-text-copper">Refined Over a Decade.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Targeting internal disease triggers through classical constitutional homoeopathy, therapeutic yoga postures, and metabolic dietary advice.
            </p>

            {/* Authentic Doctor Consultation Spotlight */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-300 hover:shadow-deep hover:border-copper/30">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/doctor-portrait.jpg"
                  alt="Dr. Soundarya"
                  className="h-16 w-16 rounded-2xl object-cover border-2 border-copper/30 shadow-md shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                      Dr. Soundarya
                    </h3>
                    <span className="rounded-full bg-copper/10 border border-copper/25 px-2 py-0.5 text-[10px] font-bold text-copper uppercase tracking-wider">
                      Chief Physician
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    B.H.M.S, D.Y.T · Homoeopathy & Yoga Therapy
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-[11px] font-semibold text-olive dark:text-olive-soft">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> 9+ Yrs Practice
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> 5,000+ Treated
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Shadnagar Clinic & Telehealth
                </span>
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-copper hover:text-copper/80 transition-colors"
                >
                  <span>Book Case Review</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Distinct Clinical Pillars */}
          <div className="space-y-4">
            {/* Top Tri-Fold System Banner */}
            <div className="rounded-2xl border border-border/80 bg-gradient-to-r from-card via-card to-copper/5 p-4 sm:p-5 shadow-soft">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-copper flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> The Tri-Fold Healing Protocol
                </span>
                <span className="text-[11px] text-muted-foreground font-medium">
                  Operating synchronously
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-foreground">
                <div className="rounded-xl border border-border/60 bg-muted/40 py-2 px-1">
                  🌿 Homoeopathy
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/40 py-2 px-1">
                  🧘 Yoga Asanas
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/40 py-2 px-1">
                  🥗 Medical Diet
                </div>
              </div>
            </div>

            {/* 4 Distinct Tiles */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              {distinctions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`group relative rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-deep ${item.hoverBorder}`}
                  >
                    {/* Top Accent bar */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] ${item.barColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />

                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-muted/60 border border-border/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {item.tag}
                      </span>
                      <div className={`grid h-8 w-8 place-items-center rounded-xl border ${item.accentBg}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-3.5 font-display text-sm sm:text-base font-bold text-foreground leading-snug group-hover:text-copper transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
