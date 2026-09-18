import { MapPin, Clock, Mail, Instagram, MessageCircle, Phone, Navigation, Sparkles } from "lucide-react";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 lg:py-20 overflow-hidden section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="modern-badge">
            <Sparkles className="h-3 w-3" />
            Location & Accessibility
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
            Visit Rudhra Homoeopathy Clinic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Conveniently located on NH44 directly opposite the Bus Stop in Shadnagar. Walk-ins and appointments warmly welcomed during clinic hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Cohesive Clinic Info Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-soft">
            <div className="space-y-6">
              {/* Header Title */}
              <div className="border-b border-border/60 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-copper">
                  In-Clinic Visits
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                  Rudhra Homoeopathy Clinic
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Shadnagar, Telangana · Dr. Soundarya (B.H.M.S, D.Y.T)
                </p>
              </div>

              {/* Address & Hours in 2 clean rows */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Address */}
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center gap-2.5 text-copper">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Clinic Address</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mt-2 leading-relaxed">
                    {clinic.address}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Near Raghavendra Hotel · Opp Bus Stop
                  </p>
                </div>

                {/* Timings */}
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center gap-2.5 text-copper">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Consultation Hours</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-foreground mt-2 space-y-0.5">
                    <p>Morning: <strong className="font-semibold">10:00 AM – 2:00 PM</strong></p>
                    <p>Evening: <strong className="font-semibold">4:00 PM – 7:30 PM</strong></p>
                    <p className="text-[11px] text-copper font-medium pt-0.5">Sunday: Prior Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Contact Channels (Phone, Email, Instagram) */}
              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={`tel:${clinic.phone}`}
                  className="rounded-xl border border-border/60 bg-card p-3 text-center transition-all hover:border-copper/40 hover:bg-copper/5 group"
                >
                  <Phone className="h-4 w-4 text-copper mx-auto mb-1.5" />
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">Phone</p>
                  <p className="text-xs font-bold text-foreground group-hover:text-copper transition-colors truncate mt-0.5">
                    {clinic.phoneDisplay}
                  </p>
                </a>

                <a
                  href={`mailto:${clinic.email}`}
                  className="rounded-xl border border-border/60 bg-card p-3 text-center transition-all hover:border-copper/40 hover:bg-copper/5 group"
                >
                  <Mail className="h-4 w-4 text-copper mx-auto mb-1.5" />
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">Email</p>
                  <p className="text-xs font-bold text-foreground group-hover:text-copper transition-colors truncate mt-0.5">
                    Send Mail
                  </p>
                </a>

                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border/60 bg-card p-3 text-center transition-all hover:border-copper/40 hover:bg-copper/5 group"
                >
                  <Instagram className="h-4 w-4 text-copper mx-auto mb-1.5" />
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">Instagram</p>
                  <p className="text-xs font-bold text-foreground group-hover:text-copper transition-colors truncate mt-0.5">
                    Follow Clinic
                  </p>
                </a>
              </div>
            </div>

            {/* Bottom Integrated WhatsApp Action (Flush with bottom) */}
            <div className="mt-6 pt-5 border-t border-border/60">
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-gradient-copper p-4 sm:p-5 text-ivory shadow-glow transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <div className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ivory/15 text-ivory shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold">Chat on WhatsApp</h4>
                    <p className="text-[11px] text-ivory/80">Direct desk response for appointments & queries</p>
                  </div>
                </div>
                <Navigation className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Exact Equal Height) */}
          <div className="relative min-h-[420px] lg:min-h-[auto] h-full overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft">
            <div className="absolute top-4 right-4 z-10">
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card/90 px-4 py-2 text-xs font-bold text-copper shadow-soft backdrop-blur border border-copper/30 hover:bg-copper hover:text-ivory transition-all"
              >
                <Navigation className="h-3.5 w-3.5" />
                Get GPS Directions
              </a>
            </div>
            <iframe
              title="Rudhra Homoeopathy Clinic location in Shadnagar"
              src="https://www.google.com/maps?q=RUDHRA+HOMOEOPATHY+CLINIC+SHADNAGAR&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
