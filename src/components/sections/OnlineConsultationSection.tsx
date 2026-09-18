import { MessageCircle, Video, Globe2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/clinic";
import { Link } from "@tanstack/react-router";

const points = [
  {
    icon: Globe2,
    t: "Worldwide Patient Reach",
    d: "Consult comfortably from any city or country across USA, UK, UAE, Australia, and all Indian states.",
  },
  {
    icon: Video,
    t: "HD Virtual Consultation",
    d: "Comprehensive 45-minute video case-taking with Dr. Soundarya, assessing your complete history.",
  },
  {
    icon: ShieldCheck,
    t: "Doorstep Medicine Courier",
    d: "Individually prepared homoeopathic dilutions and potencies securely packaged and dispatched to your home.",
  },
];

export function OnlineConsultationSection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-olive p-8 sm:p-12 lg:p-16 text-ivory shadow-elegant">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-copper/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-ivory/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-ivory/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-ivory backdrop-blur">
                <Sparkles className="h-3 w-3" />
                Global Virtual Clinic
              </span>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Compassionate Holistic Care, Wherever You Live.
              </h2>

              <p className="mt-5 max-w-xl text-base sm:text-lg text-ivory/90 leading-relaxed">
                Geographic distance should never compromise your path to recovery. Receive an in-depth constitutional assessment, targeted yoga therapy routines, and customized homoeopathic medicine packs delivered straight to your door.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-olive shadow-glow transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Schedule Video Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink("Hello Dr. Soundarya, I would like to enquire about an online video consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-ivory backdrop-blur hover:bg-ivory/20 transition-all active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.t}
                    className="flex gap-4 rounded-2xl border border-ivory/20 bg-ivory/10 p-5 backdrop-blur transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ivory/15 text-ivory">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-ivory">{p.t}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-ivory/80 leading-relaxed">{p.d}</p>
                    </div>
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
