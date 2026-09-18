import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, CalendarClock } from "lucide-react";
import clinic1 from "@/assets/hero-slides/clinic-1.jpg";
import clinic2 from "@/assets/hero-slides/clinic-2.jpg";
import clinic3 from "@/assets/hero-slides/clinic-3.jpg";
import clinic4 from "@/assets/hero-slides/clinic-4.jpg";
import clinic5 from "@/assets/hero-slides/clinic-5.jpg";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

const heroSlides = [
  { img: clinic1, caption: "Pure Homoeopathic Globules & Dilutions" },
  { img: clinic2, caption: "Classical Homoeopathic Dispensary" },
  { img: clinic3, caption: "Botanical Mother Tinctures & Globuli" },
  { img: clinic4, caption: "Individualized Constitutional Consultation" },
  { img: clinic5, caption: "Potentized Remedy Preparation" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Smooth auto-fade every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
      {/* ─── 5 Real Images Smoothly Cross-Fading in Background ─── */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.caption}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.caption}
              className={`h-full w-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Lightened, subtle overlay so real background photos are bright and clearly visible */}
        <div className="absolute inset-0 z-20 bg-stone-950/35" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/25" />
      </div>

      {/* ─── Ultra-Clean, Minimal, Authentic Hero Content ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full relative z-30 py-10 sm:py-14 text-center my-auto">

        {/* Minimal clinic badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-300 uppercase mb-6 backdrop-blur-md shadow-md">
          <span>Rudhra Homoeopathy Clinic · Shadnagar</span>
        </div>

        {/* Clean, powerful headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Root-Cause Healing. <br />
          <span className="gradient-text-copper drop-shadow-md">Pure &amp; Personalised.</span>
        </h1>

        {/* Single authentic sentence — No clutter */}
        <p className="mt-5 text-base sm:text-xl text-stone-100 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Classical constitutional homoeopathy, therapeutic yoga, and tailored clinical nutrition.
        </p>

        {/* Two clean, prominent action buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/appointment"
            className="btn-primary text-sm sm:text-base font-bold py-3.5 px-8 shadow-glow"
          >
            <CalendarClock className="h-4 w-4" />
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all active:scale-95 shadow-soft"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            WhatsApp Clinic
          </a>
        </div>

        {/* Slide navigation dots */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.caption}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-copper" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <span className="text-xs text-amber-200/80 ml-2 font-medium tracking-wide">
            {heroSlides[currentSlide].caption}
          </span>
        </div>

      </div>
    </section>
  );
}
