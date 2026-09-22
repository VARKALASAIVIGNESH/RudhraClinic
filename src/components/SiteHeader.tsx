import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon, CalendarCheck, PhoneCall } from "lucide-react";
import { clinic, getClinicStatus, type ClinicStatus } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Doctor" },
  { to: "/treatments", label: "Treatments" },
  { to: "/appointment", label: "Appointment" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/online-consultation", label: "Online" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [status, setStatus] = useState<ClinicStatus>({
    isOpen: true,
    label: "Open Now",
    subLabel: "Clinic Hours Active",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("rudhra-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("rudhra-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("rudhra-theme", "light");
    }
  };

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/88 dark:bg-card/88 backdrop-blur-2xl border-b border-border/60 shadow-soft"
          : "bg-background/70 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-white p-1 shadow-sm ring-1 ring-stone-200/70 dark:ring-stone-700/60 overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Rudhra Homoeopathy Clinic Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground leading-tight group-hover:text-copper transition-colors">
              Rudhra <span className="text-copper">Homoeopathy</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              Clinic · Dr. Soundarya
            </span>
          </div>
        </Link>

        {/* Desktop Navigation — centered */}
        <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold">
          {navLinks.slice(0, 8).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-3 py-2 rounded-lg text-foreground/75 transition-all hover:text-copper hover:bg-copper/6 data-[status=active]:text-copper data-[status=active]:bg-copper/8 data-[status=active]:font-bold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Live status pill */}
          <div
            title={`Clinic Hours: ${clinic.hours}`}
            className={cn(
              "hidden lg:inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all",
              status.isOpen
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                : "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
            )}
          >
            <span className="relative flex h-2 w-2">
              {status.isOpen && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              )}
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-full",
                  status.isOpen ? "bg-emerald-500" : "bg-amber-500",
                )}
              />
            </span>
            <span>{status.label}</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground/70 transition-all hover:bg-copper/10 hover:text-copper hover:border-copper/40 active:scale-95"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Call */}
          <a
            href={`tel:${clinic.phone}`}
            aria-label="Call clinic directly"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground/70 transition-all hover:bg-olive/10 hover:text-olive hover:border-olive/40 active:scale-95"
          >
            <PhoneCall className="h-4 w-4" />
          </a>

          {/* Book CTA */}
          <Link
            to="/appointment"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-copper px-5 py-2.5 text-xs font-bold text-ivory shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-lg active:scale-95"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Book Appointment
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground transition-all hover:bg-copper/10 hover:border-copper/40"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="xl:hidden border-t border-border/50 bg-background/96 dark:bg-card/96 backdrop-blur-2xl animate-fade-up">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-5 space-y-1">
            {/* Status */}
            <div
              className={cn(
                "mb-3 flex items-center justify-between rounded-xl border p-3 text-xs font-semibold",
                status.isOpen
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  {status.isOpen && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  )}
                  <span
                    className={cn(
                      "relative inline-flex h-2 w-2 rounded-full",
                      status.isOpen ? "bg-emerald-500" : "bg-amber-500",
                    )}
                  />
                </span>
                <span>{status.label}</span>
              </div>
              <span className="text-[11px] opacity-80">{status.subLabel}</span>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-all hover:bg-copper/10 hover:text-copper data-[status=active]:bg-copper/10 data-[status=active]:text-copper"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-3">
              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <CalendarCheck className="h-4 w-4" />
                Book In-Clinic or Virtual Appointment
              </Link>
            </div>
            <p className="pt-2 text-center text-xs text-muted-foreground">
              Hours: {clinic.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
