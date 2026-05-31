interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden lotus-bg pb-12 pt-16 lg:pb-16 lg:pt-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="ornament-divider mx-auto max-w-xs text-[10px] uppercase tracking-[0.3em]">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-5xl text-brown text-balance md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
