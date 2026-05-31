import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { OnlineConsultationSection } from "@/components/sections/OnlineConsultationSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export const Route = createFileRoute("/online-consultation")({
  head: () => ({
    meta: [
      { title: "Online Consultation — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Consult Dr. Soundarya from anywhere in the world. Personalised homoeopathy, yoga and diet plans delivered to your doorstep." },
      { property: "og:title", content: "Online Consultation — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Personalised holistic care, wherever you are." },
      { property: "og:url", content: "/online-consultation" },
    ],
    links: [{ rel: "canonical", href: "/online-consultation" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Online Consultation"
        title="Holistic care, beyond geography."
        description="Secure video consultations with personalised remedies delivered to your door."
      />
      <OnlineConsultationSection />
      <AppointmentSection />
    </>
  ),
});
