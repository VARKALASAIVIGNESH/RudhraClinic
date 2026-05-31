import { useState } from "react";
import { MessageCircle, CalendarClock, Phone, User, Stethoscope } from "lucide-react";
import { whatsappLink, clinic } from "@/lib/clinic";

export function AppointmentSection() {
  const [form, setForm] = useState({ name: "", phone: "", concern: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hello Dr. Soundarya, I'd like to book an appointment at ${clinic.name}.\n\n` +
      `• Name: ${form.name}\n` +
      `• Phone: ${form.phone}\n` +
      `• Concern: ${form.concern}\n` +
      `• Preferred time: ${form.time}\n\n` +
      `Thank you.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="relative bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Book Appointment</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Begin your healing journey today.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Share a few details and we'll continue the conversation on WhatsApp — quick,
            personal, and convenient. Walk-ins welcome during clinic hours.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3 text-brown">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-copper/10 text-copper">
                <CalendarClock className="h-4 w-4" />
              </span>
              {clinic.hours}
            </p>
            <p className="flex items-center gap-3 text-brown">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-olive/10 text-olive">
                <MessageCircle className="h-4 w-4" />
              </span>
              Online consultations available worldwide
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-copper/20 bg-card/80 p-8 shadow-elegant backdrop-blur md:p-10"
        >
          <h3 className="font-serif text-2xl text-brown">Appointment details</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            On submit, your details open in WhatsApp to send to the clinic.
          </p>

          <div className="mt-6 space-y-4">
            <Field icon={User} label="Full name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-sm text-brown outline-none placeholder:text-muted-foreground/60"
                placeholder="Your name"
              />
            </Field>
            <Field icon={Phone} label="Phone number">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent text-sm text-brown outline-none placeholder:text-muted-foreground/60"
                placeholder="+91 9xxxxxxxxx"
              />
            </Field>
            <Field icon={Stethoscope} label="Concern / Condition">
              <input
                required
                value={form.concern}
                onChange={(e) => setForm({ ...form, concern: e.target.value })}
                className="w-full bg-transparent text-sm text-brown outline-none placeholder:text-muted-foreground/60"
                placeholder="e.g. PCOD, asthma, skin issue"
              />
            </Field>
            <Field icon={CalendarClock} label="Preferred time">
              <input
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-transparent text-sm text-brown outline-none placeholder:text-muted-foreground/60"
                placeholder="e.g. Saturday morning, 11 AM"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-copper px-7 py-3.5 text-sm font-medium text-ivory shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-border bg-ivory/60 px-4 py-3 focus-within:border-copper">
      <Icon className="h-4 w-4 text-copper" />
      <span className="sr-only">{label}</span>
      {children}
    </label>
  );
}
