import { Link } from "@tanstack/react-router";
import { Award, Leaf, HeartHandshake, Stethoscope, ArrowUpRight } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const pillars = [
  { icon: Stethoscope, title: "Homeopathy", text: "Constitutional remedies tailored to you." },
  { icon: Leaf, title: "Yoga Guidance", text: "Movement & breath for body-mind balance." },
  { icon: HeartHandshake, title: "Diet Support", text: "Personalised nutrition that heals." },
  { icon: Award, title: "Patient-Centered", text: "Care that listens before it treats." },
];

export function AboutSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-copper/15 to-olive/15 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-copper/20 shadow-elegant">
            <img
              src={doctorImage}
              alt="Dr. Soundarya, B.H.M.S, D.Y.T — founder of Rudhra Homoeopathy Clinic"
              width={896}
              height={1152}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 bottom-6 hidden glass-card rounded-2xl px-5 py-4 shadow-soft md:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-copper">Founder</p>
            <p className="font-serif text-xl text-brown">Dr. Soundarya</p>
            <p className="text-xs text-muted-foreground">B.H.M.S | D.Y.T</p>
          </div>
        </div>

        <div>
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">About Doctor</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Meet Dr. Soundarya — your partner in holistic healing.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A qualified homoeopath and certified yoga therapist, Dr. Soundarya blends classical
            homoeopathy with yoga and nutritional science to address the root cause of illness.
            Every treatment plan is built around <em>you</em> — your constitution, lifestyle,
            history and goals.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="group flex gap-3 rounded-2xl border border-border bg-card/70 p-4 hover-lift"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-serif text-lg text-brown">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper"
          >
            Read full doctor profile
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
