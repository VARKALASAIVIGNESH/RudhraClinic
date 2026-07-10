import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock, MessageCircle, Phone } from "lucide-react";

import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

const cols = [
  {
    title: "Explore",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Doctor" },
      { to: "/treatments", label: "Treatments" },
      { to: "/blog", label: "Health Articles" },
    ],
  },
  {
    title: "Care",
    links: [
      { to: "/appointment", label: "Book Appointment" },
      { to: "/online-consultation", label: "Online Consultation" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-copper/20 bg-gradient-warm lotus-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Rudhra Homoeopathy Clinic Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {clinic.tagline}
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-serif text-lg text-brown">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-copper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-serif text-lg text-brown">Visit & Connect</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>{clinic.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <a href={`tel:${clinic.phone}`} className="hover:text-copper transition-colors">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <a href={`mailto:${clinic.email}`} className="hover:text-copper break-all">
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
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
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-copper/20 bg-ivory/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Rudhra Homoeopathy Clinic. All rights reserved.</p>
          <p>Crafted with care for personalised healing.</p>
        </div>
      </div>
    </footer>
  );
}
