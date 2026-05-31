import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LotusMark } from "./LotusMark";
import { clinic, whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Doctor" },
  { to: "/treatments", label: "Treatments" },
  { to: "/appointment", label: "Book Appointment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/online-consultation", label: "Online Consultation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "bg-ivory/85 backdrop-blur-md shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-copper/30 bg-ivory text-copper transition-transform group-hover:rotate-12">
            <LotusMark className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight text-brown">
              Rudhra
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-copper">
              Homoeopathy Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.slice(0, 8).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm font-medium text-brown/80 transition-colors hover:text-copper data-[status=active]:text-copper"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-copper px-5 py-2.5 text-sm font-medium text-ivory shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden grid h-10 w-10 place-items-center rounded-full border border-copper/30 text-brown"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-ivory/95 backdrop-blur-lg animate-fade-up">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-border/60 py-3 text-sm font-medium text-brown/80 data-[status=active]:text-copper"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-copper px-5 py-3 text-sm font-medium text-ivory shadow-glow"
            >
              Book Appointment via WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">{clinic.hours}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
