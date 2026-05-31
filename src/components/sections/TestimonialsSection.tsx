import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Lakshmi P.",
    where: "Shadnagar",
    text: "After years of PCOD struggles, Dr. Soundarya's holistic plan brought my cycles back to normal in months. Gentle, patient and deeply knowledgeable.",
  },
  {
    name: "Ravi Kumar",
    where: "Hyderabad",
    text: "My son's chronic asthma improved drastically with her homoeopathic care and breathing yoga guidance. No more emergency inhalers.",
  },
  {
    name: "Anitha S.",
    where: "Online Consultation",
    text: "The online consultation felt personal and thorough. Skin condition I lived with for 8 years finally healing — and from another city.",
  },
  {
    name: "Sandeep R.",
    where: "Mahbubnagar",
    text: "Diet + yoga + homoeopathy together — my thyroid markers and energy levels have transformed. Truly root-cause medicine.",
  },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Testimonials</p>
        <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
          Stories of trust and healing
        </h2>

        <div className="relative mt-12 rounded-[2rem] border border-copper/20 bg-card/80 p-10 shadow-elegant backdrop-blur md:p-14">
          <Quote className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-gradient-copper p-3 text-ivory shadow-glow" />
          <div className="flex justify-center gap-1 text-copper">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-serif text-2xl italic leading-relaxed text-brown md:text-3xl">
            "{r.text}"
          </p>
          <p className="mt-6 text-sm font-medium text-copper">{r.name}</p>
          <p className="text-xs text-muted-foreground">{r.where}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-copper/30 text-copper transition-colors hover:bg-copper hover:text-ivory"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-copper" : "w-1.5 bg-copper/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((v) => (v + 1) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-copper/30 text-copper transition-colors hover:bg-copper hover:text-ivory"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
