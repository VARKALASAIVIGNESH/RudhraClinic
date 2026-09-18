import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  CalendarClock,
} from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

export function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, oklch(0.585 0.118 52 / 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%, oklch(0.52 0.06 115 / 0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          {/* ─── LEFT: Image of Doctor Soundarya with overlapping badge ─── */}
          <div className="lg:col-span-5 relative animate-slide-right">
            {/* Soft ambient glow behind image */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, oklch(0.585 0.118 52 / 0.18) 0%, transparent 70%)",
                filter: "blur(25px)",
              }}
            />

            {/* Doctor Portrait Card */}
            <div className="relative elevated-card rounded-[2rem] overflow-hidden border border-border/80 shadow-deep">
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={doctorPortrait}
                  alt="Dr. Soundarya (B.H.M.S, D.Y.T) — Lead Homoeopathic Physician"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Verified badge overlaid on top */}
                <div className="absolute top-4 right-4">
                  <div className="glass-card rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-xs font-bold text-copper shadow-soft">
                    <ShieldCheck className="h-4 w-4 text-copper" />
                    <span>Board Certified</span>
                  </div>
                </div>

                {/* Doctor credentials overlaid at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    Lead Homoeopathic Physician
                  </p>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-0.5">
                    {clinic.doctor}
                  </h3>
                  <p className="text-xs text-stone-200 mt-0.5 font-medium">
                    {clinic.qualifications}
                  </p>
                  <p className="text-[11px] text-amber-200/90 font-mono mt-0.5">
                    Reg. {clinic.registration.replace(/^Reg\.\s*No\.\s*/i, "")} · {clinic.council}
                  </p>
                </div>
              </div>

              {/* Bottom Quick-Bar */}
              <div className="p-3.5 bg-card flex items-center justify-between text-xs text-muted-foreground border-t border-border/60">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Accepting Patients
                </span>
                <span className="font-medium">Shadnagar Clinic &amp; Online</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Authentic Doctor Profile Matter (Clean, No Clutter) ─── */}
          <div className="lg:col-span-7 animate-fade-up">

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.12]">
              Healing guided by listening,{" "}
              <span className="gradient-text-copper">empathy &amp; clinical precision.</span>
            </h2>

            {/* Authentic, concise bio */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              A qualified homoeopath and certified yoga therapist with over 9 years of clinical experience,{" "}
              <strong className="text-foreground font-semibold">Dr.&nbsp;Soundarya (B.H.M.S, D.Y.T)</strong>{" "}
              specializes in treating chronic and acute conditions by targeting internal root causes rather than masking symptoms with temporary chemicals.
            </p>

            {/* 3 Key Trust Highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-copper/20 bg-copper/5 p-3.5 text-center">
                <p className="font-display text-2xl font-bold text-copper">9+ Yrs</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">Clinical Practice</p>
              </div>
              <div className="rounded-2xl border border-olive/25 bg-olive/5 p-3.5 text-center">
                <p className="font-display text-2xl font-bold text-olive dark:text-olive-soft">5,000+</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">Patients Healed</p>
              </div>
              <div className="rounded-2xl border border-copper/20 bg-copper/5 p-3.5 text-center">
                <p className="font-display text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">Non-Toxic &amp; Safe</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link to="/appointment" className="btn-primary">
                <CalendarClock className="h-4 w-4" />
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                WhatsApp Dr. Soundarya
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
