import { MapPin, Clock, Mail, Instagram, MessageCircle, Phone } from "lucide-react";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

export function ContactSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Contact</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Visit Rudhra Homoeopathy Clinic
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to hear from you. Drop in during clinic hours or reach us through any of
            the channels below.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Card icon={MapPin} title="Location" lines={[clinic.address]} />
            <Card icon={Clock} title="Clinic Hours" lines={[clinic.hours]} />
            <Card
              icon={Mail}
              title="Email"
              lines={[clinic.email]}
              href={`mailto:${clinic.email}`}
            />
            <Card
              icon={Instagram}
              title="Instagram"
              lines={[clinic.instagram]}
              href={clinic.instagramUrl}
            />
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-3xl bg-gradient-copper p-6 text-ivory shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ivory/15">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-serif text-lg">Chat on WhatsApp</p>
                  <p className="text-xs text-ivory/80">Fastest way to reach the clinic</p>
                </div>
              </div>
              <Phone className="h-5 w-5" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-copper/20 shadow-elegant">
            <iframe
              title="Rudhra Homoeopathy Clinic location"
              src="https://www.google.com/maps?q=Shadnagar+509216&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 hover-lift">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-copper/10 text-copper">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-copper">{title}</p>
        {lines.map((l) => (
          <p key={l} className="mt-1 text-base text-brown">{l}</p>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
