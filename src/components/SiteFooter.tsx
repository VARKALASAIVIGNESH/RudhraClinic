import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock, MessageCircle, Phone, ShieldCheck, AlertTriangle } from "lucide-react";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

const cols = [
  {
    title: "Explore",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Doctor" },
      { to: "/treatments", label: "Care Protocols" },
      { to: "/blog", label: "Health Articles" },
    ],
  },
  {
    title: "Care",
    links: [
      { to: "/appointment", label: "Book Appointment" },
      { to: "/online-consultation", label: "Online Consultation" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-copper/20 bg-gradient-warm lotus-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-14 w-14 rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-stone-200/70 dark:ring-stone-700/60 overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Rudhra Homoeopathy Clinic Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-foreground leading-tight">
                  Rudhra <span className="text-copper">Homoeopathy</span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Dr. Soundarya (B.H.M.S)
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {clinic.tagline}
            </p>

            {/* Doctor Verification Badge */}
            <div className="mt-5 rounded-2xl border border-copper/20 bg-card/60 p-3.5 backdrop-blur text-xs space-y-1">
              <div className="flex items-center gap-2 font-semibold text-copper">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Medical Practice</span>
              </div>
              <p className="text-foreground/90 font-medium">{clinic.doctor}, {clinic.qualifications}</p>
              <p className="text-muted-foreground text-[11px]">{clinic.registration}</p>
              <p className="text-muted-foreground text-[10px]">{clinic.council}</p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base font-bold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-copper hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-base font-bold text-foreground">Visit & Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3 items-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <span>{clinic.hours}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-copper" />
                <a href={`tel:${clinic.phone}`} className="hover:text-copper transition-colors">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 shrink-0 text-copper" />
                <a href={`mailto:${clinic.email}`} className="hover:text-copper break-all">
                  {clinic.email}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Instagram className="h-4 w-4 shrink-0 text-copper" />
                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper"
                >
                  {clinic.instagram}
                </a>
              </li>
            </ul>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Emergency Medical Disclaimer Banner */}
        <div className="mt-12 rounded-2xl border border-amber-500/25 bg-amber-500/5 dark:bg-amber-500/10 p-4 sm:p-5 flex items-start gap-3.5 text-xs leading-relaxed text-muted-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-foreground block mb-0.5">
              Emergency Healthcare Disclaimer
            </span>
            {clinic.disclaimer}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Rudhra Homoeopathy Clinic. All rights reserved.</p>
          <p className="text-[11px]">
            Holistic Constitutional Homoeopathy, Yoga Therapy & Personalized Nutrition.
          </p>
        </div>
      </div>
    </footer>
  );
}
