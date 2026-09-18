import { useState } from "react";
import {
  CalendarClock,
  MessageCircle,
  Building2,
  Video,
  CheckCircle2,
  CalendarPlus,
  ShieldCheck,
  User,
  Phone,
  Stethoscope,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { clinic, whatsappLink } from "@/lib/clinic";

const morningSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];
const eveningSlots = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

export function AppointmentSection() {
  const [consultType, setConsultType] = useState<"in-clinic" | "online">("in-clinic");

  // Next 10 days rolling
  const availableDates = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      dateStr: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      dateFormatted: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
  });

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].dateStr);
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    concern: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RHH-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const dateObj = availableDates.find((d) => d.dateStr === selectedDate);
    const dateDisplay = dateObj ? `${dateObj.dayName}, ${dateObj.dateFormatted}` : selectedDate;

    const msg =
      `Hello Dr. Soundarya,\n\n` +
      `I would like to confirm my consultation appointment at ${clinic.name}.\n\n` +
      `• Ref ID: ${bookingRef}\n` +
      `• Mode: ${consultType === "in-clinic" ? "In-Clinic Visit (Shadnagar)" : "Online Video Consultation"}\n` +
      `• Patient Name: ${form.name}\n` +
      `• Phone: ${form.phone}\n` +
      `• Concern: ${form.concern}\n` +
      `• Preferred Date: ${dateDisplay}\n` +
      `• Preferred Slot: ${selectedTime}\n` +
      (form.notes ? `• Patient Notes: ${form.notes}\n\n` : `\n`) +
      `Thank you!`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  // Generate .ics calendar download
  const handleDownloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Rudhra Homoeopathy Clinic//Appointment//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Doctor Consultation - Rudhra Homoeopathy Clinic`,
      `DESCRIPTION:Appointment with Dr. Soundarya (B.H.M.S, D.Y.T) for ${form.concern || "Holistic Consultation"}. Ref: ${bookingRef}`,
      `LOCATION:${consultType === "in-clinic" ? clinic.address : "Virtual Video Consultation"}`,
      `STATUS:CONFIRMED`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Appointment-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="appointment" className="relative py-16 lg:py-20 section-alt overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, oklch(0.585 0.118 52 / 0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          {/* Left Column: Context & Assurances */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/25 bg-copper/8 px-4 py-1.5 text-xs font-bold tracking-widest text-copper uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Easy Schedule Booking</span>
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight text-balance leading-[1.12]">
              Schedule Your{" "}
              <span className="gradient-text-copper">Consultation</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Select your preferred date, time slot, and consultation mode. Receive instant confirmation and easily connect directly with Dr. Soundarya.
            </p>

            {/* Quick Highlights */}
            <div className="mt-8 space-y-4">
              <div className="elevated-card flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper border border-copper/20 shrink-0">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">In-Clinic Visit</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {clinic.address} · Walk-ins & appointments welcome.
                  </p>
                </div>
              </div>

              <div className="elevated-card flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-olive/10 text-olive border border-olive/20 shrink-0">
                  <Video className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">Virtual Video Consultation</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    For patients across India and worldwide. Formulated medicines dispatched to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="h-4 w-4 text-copper" />
                <span>100% Confidential · Direct Doctor Case Evaluation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="elevated-card rounded-3xl p-6 sm:p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Mode of Consultation */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    1. Consultation Type
                  </label>
                  <div className="mt-2.5 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setConsultType("in-clinic")}
                      className={`flex items-center justify-center gap-2 rounded-2xl border p-3.5 text-xs font-semibold tracking-wide transition-all ${
                        consultType === "in-clinic"
                          ? "border-copper bg-copper/10 text-copper shadow-sm"
                          : "border-border bg-card/60 text-muted-foreground hover:border-copper/30"
                      }`}
                    >
                      <Building2 className="h-4 w-4" />
                      In-Clinic (Shadnagar)
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultType("online")}
                      className={`flex items-center justify-center gap-2 rounded-2xl border p-3.5 text-xs font-semibold tracking-wide transition-all ${
                        consultType === "online"
                          ? "border-copper bg-copper/10 text-copper shadow-sm"
                          : "border-border bg-card/60 text-muted-foreground hover:border-copper/30"
                      }`}
                    >
                      <Video className="h-4 w-4" />
                      Online Video Call
                    </button>
                  </div>
                </div>

                {/* Step 2: Date Selector (Horizontal Scroll) */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                    <span>2. Select Date</span>
                    <span className="text-[11px] text-copper">Next Available Days</span>
                  </label>
                  <div className="mt-2.5 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          type="button"
                          onClick={() => setSelectedDate(item.dateStr)}
                          className={`flex min-w-[72px] flex-col items-center rounded-2xl border py-2.5 px-2 text-center transition-all ${
                            isSelected
                              ? "border-copper bg-gradient-copper text-ivory shadow-glow"
                              : "border-border/70 bg-card/60 text-foreground/80 hover:border-copper/40"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-semibold opacity-80">
                            {item.dayName}
                          </span>
                          <span className="text-sm font-bold mt-0.5">{item.dateFormatted}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Time Slot Selector */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    3. Select Preferred Time Slot
                  </label>
                  <div className="mt-2.5 space-y-3">
                    {/* Morning */}
                    <div>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium mb-1.5">
                        <Clock className="h-3 w-3 text-copper" /> Morning Session (10 AM – 2 PM)
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {morningSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-xl border py-2 text-xs font-medium transition-all ${
                              selectedTime === time
                                ? "border-copper bg-copper/15 text-copper font-bold shadow-sm"
                                : "border-border bg-card/50 text-foreground/70 hover:border-copper/30"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Evening */}
                    <div>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium mb-1.5">
                        <Clock className="h-3 w-3 text-olive" /> Evening Session (4 PM – 7:30 PM)
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {eveningSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-xl border py-2 text-xs font-medium transition-all ${
                              selectedTime === time
                                ? "border-copper bg-copper/15 text-copper font-bold shadow-sm"
                                : "border-border bg-card/50 text-foreground/70 hover:border-copper/30"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Patient Details */}
                <div className="space-y-3 pt-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    4. Patient Information
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full rounded-2xl border border-border bg-card/70 py-2.5 pl-10 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-copper focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="WhatsApp Phone Number"
                        className="w-full rounded-2xl border border-border bg-card/70 py-2.5 pl-10 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-copper focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Stethoscope className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      required
                      value={form.concern}
                      onChange={(e) => setForm({ ...form, concern: e.target.value })}
                      placeholder="Primary Health Concern (e.g. PCOD, Asthma, Thyroid, Skin, Joint Pain)"
                      className="w-full rounded-2xl border border-border bg-card/70 py-2.5 pl-10 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-copper focus:outline-none"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Optional notes: symptoms duration, existing medications, or lab test results..."
                    className="w-full rounded-2xl border border-border bg-card/70 p-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-copper focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory shadow-glow transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <CalendarClock className="h-4 w-4" />
                  Reserve Selected Consultation Slot
                </button>
              </form>
            ) : (
              /* Step 5: Booking Confirmation Card */
              <div className="text-center py-4 space-y-6 animate-fade-up">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div>
                  <span className="text-xs font-semibold text-copper">
                    Reservation Prepared
                  </span>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Appointment Slot Reserved!
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Booking Reference: <span className="font-mono font-bold text-foreground">{bookingRef}</span>
                  </p>
                </div>

                {/* Summary Card */}
                <div className="rounded-2xl border border-border/80 bg-card/70 p-5 text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground">Patient:</span>
                    <span className="font-semibold text-foreground">{form.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground">Consultation Type:</span>
                    <span className="font-semibold text-foreground">
                      {consultType === "in-clinic" ? "In-Clinic (Shadnagar)" : "Virtual Video Consultation"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground">Date & Slot:</span>
                    <span className="font-semibold text-copper">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Health Concern:</span>
                    <span className="font-semibold text-foreground">{form.concern}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory shadow-glow transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Confirm & Send to Dr. Soundarya on WhatsApp
                  </button>

                  <button
                    onClick={handleDownloadICS}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-xs font-semibold text-foreground hover:bg-card hover:border-copper/40 transition-all"
                  >
                    <CalendarPlus className="h-4 w-4 text-copper" />
                    Download Calendar Invite (.ics)
                  </button>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-muted-foreground hover:text-copper hover:underline transition-colors"
                >
                  ← Book another slot or edit details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
