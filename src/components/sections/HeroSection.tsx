import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";
import { whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";
import { LotusMark } from "@/components/LotusMark";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden lotus-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-ivory/60 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Holistic Wellness Since Day One
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-brown text-balance md:text-6xl lg:text-7xl">
            Rudhra
            <span className="block bg-gradient-to-r from-copper to-brown bg-clip-text text-transparent">
              Homoeopathy Clinic
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-2xl italic text-olive md:text-3xl">
            Personalised Healing Through Homoeopathy, Yoga &amp; Diet.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Individualised, holistic and constitutional treatment for acute and chronic
            illnesses — guided by <span className="text-brown font-medium">Dr. Soundarya, B.H.M.S, D.Y.T</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-copper px-7 py-3.5 text-sm font-medium text-ivory shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-olive/40 bg-ivory/70 px-7 py-3.5 text-sm font-medium text-olive backdrop-blur transition-colors hover:bg-olive hover:text-ivory"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Consultation
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-copper/15 pt-6">
            {[
              { k: "10+", v: "Years of Care" },
              { k: "5k+", v: "Patients Healed" },
              { k: "12+", v: "Conditions" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-3xl text-copper">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-warm blur-2xl opacity-70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-copper/20 shadow-elegant">
            <img
              src={heroImage}
              alt="Soft botanical wellness composition with lotus motifs in copper and olive tones"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden glass-card rounded-2xl p-4 shadow-soft md:flex items-center gap-3 animate-float">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-copper/10 text-copper">
              <LotusMark className="h-6 w-6" />
            </span>
            <div>
              <p className="font-serif text-sm text-brown">Constitutional Treatment</p>
              <p className="text-[11px] text-muted-foreground">Gentle · Safe · Lasting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
