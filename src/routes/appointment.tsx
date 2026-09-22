import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Consultation with Dr. Soundarya | Homoeopathy Clinic Shadnagar" },
      {
        name: "description",
        content:
          "Book your clinical or online consultation with Dr. Soundarya (B.H.M.S, Reg: 1972/H/2023) at Rudhra Homoeopathy Clinic, Shadnagar. Instant WhatsApp confirmation.",
      },
      {
        name: "keywords",
        content:
          "Book homoeopathy appointment Shadnagar, Dr Soundarya consultation, Rudhra clinic booking, homoeopath appointment Telangana",
      },
      { property: "og:title", content: "Book Consultation with Dr. Soundarya — Rudhra Clinic" },
      {
        property: "og:description",
        content: "Quick, hassle-free appointment booking for in-person or virtual homoeopathic consultation.",
      },
      { property: "og:url", content: "https://rudhrahomoeopathy.com/appointment" },
      { property: "og:image", content: "https://rudhrahomoeopathy.com/doctor-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rudhrahomoeopathy.com/appointment" }],
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
