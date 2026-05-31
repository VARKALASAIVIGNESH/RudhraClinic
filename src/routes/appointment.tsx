import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Book a consultation with Dr. Soundarya at Rudhra Homoeopathy Clinic, Shadnagar. Form submission opens WhatsApp with your details prefilled." },
      { property: "og:title", content: "Book Appointment — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Personalised consultation, quick to book via WhatsApp." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="A simple first step toward feeling better."
        description="Share your details. We'll continue the conversation on WhatsApp and confirm a time that works for you."
      />
      <AppointmentSection />
      <ContactSection />
    </>
  ),
});
