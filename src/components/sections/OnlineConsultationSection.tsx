import { MessageCircle, Video, Globe2, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/lib/clinic";

const points = [
  { icon: Globe2, t: "Anywhere in the world", d: "Consult from any city or country, in your language of comfort." },
  { icon: Video, t: "Secure video consultations", d: "Detailed case-taking just like an in-clinic visit." },
  { icon: ShieldCheck, t: "Medicines delivered", d: "Personalised remedies couriered to your doorstep." },
];

export function OnlineConsultationSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-olive p-10 text-ivory shadow-elegant md:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-ivory/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/70">
                Online Consultation
              </p>
              <h2 className="mt-3 font-serif text-4xl text-balance md:text-5xl">
                Personalised care, wherever you are.
              </h2>
              <p className="mt-5 max-w-xl text-ivory/85">
                Distance shouldn't stand between you and better health. Book a virtual session with
                Dr. Soundarya and receive a complete treatment plan — remedies, yoga and diet —
                tailored just for you.
              </p>
              <a
                href={whatsappLink("Hello Dr. Soundarya, I'd like to book an online consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-olive shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Start on WhatsApp
              </a>
            </div>

            <ul className="space-y-4">
              {points.map((p) => (
                <li
                  key={p.t}
                  className="flex gap-4 rounded-2xl border border-ivory/15 bg-ivory/5 p-5 backdrop-blur"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ivory/15">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-serif text-lg">{p.t}</p>
                    <p className="text-sm text-ivory/75">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
