import clinicBg from "@/assets/hero-slides/clinic-1.jpg";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-12 sm:py-16 lg:py-18 bg-stone-900 text-white">
      {/* Real background image with luxury dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={clinicBg}
          alt="Rudhra Clinic Sanctuary"
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-stone-950/40 backdrop-blur-[0.5px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8 relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-300 uppercase mb-4 backdrop-blur-md">
          {eyebrow}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance drop-shadow-sm">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-stone-200 font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
