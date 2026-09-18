import { Star, ArrowRight, ShieldCheck, MapPin, MessageCircle } from "lucide-react";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 lg:py-20 overflow-hidden section-alt">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, oklch(0.585 0.118 52 / 0.07) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.14]">
          Verified Patient Experiences on{" "}
          <span className="gradient-text-copper">Google Reviews</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Honest, transparent, and unedited patient ratings directly from our verified Google Business profile in Shadnagar.
        </p>

        {/* Central Authentic Google Rating Showcase Card */}
        <div className="mt-10 rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-soft text-center">
          {/* Google 5.0 Star Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-foreground">5.0</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                / 5.0 on Google Maps
              </span>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Clinic Profile · Shadnagar, Telangana</span>
          </div>

          {/* Genuine Transparency Statement */}
          <div className="mt-6 rounded-2xl border border-border/60 bg-muted/20 p-5 max-w-2xl mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              In accordance with homoeopathic medical ethics and patient confidentiality, we do not publish promotional testimonials. We invite all patients and families to read authentic, unedited reviews directly on our Google Business listing.
            </p>
          </div>

          {/* Action CTAs: Direct Google Review Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={clinic.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MapPin className="h-4 w-4" />
              Read Reviews on Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              Consult Dr. Soundarya
            </a>
          </div>

          {/* Clinic Address Mention */}
          <p className="mt-6 text-xs text-muted-foreground">
            {clinic.name} · {clinic.address}
          </p>
        </div>
      </div>
    </section>
  );
}
