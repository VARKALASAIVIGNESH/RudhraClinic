import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Homoeopathy Treatments in Shadnagar | Infertility, Asthma, Skin, Arthritis — Rudhra Clinic" },
      {
        name: "description",
        content:
          "Personalized homoeopathic treatments by Dr. Soundarya in Shadnagar. Specialists in Infertility & Gynaec, Asthma, Allergic Rhinitis, PCOD, Thyroid, Sciatica & Chronic Skin Diseases.",
      },
      {
        name: "keywords",
        content:
          "Infertility treatment Shadnagar, Asthma homoeopathy Shadnagar, PCOD treatment Shadnagar, Skin disease homoeopathy, Arthritis cure Shadnagar, Rudhra Clinic",
      },
      { property: "og:title", content: "Homoeopathy Treatments in Shadnagar — Rudhra Clinic" },
      {
        property: "og:description",
        content: "Root-cause homoeopathic care for 15+ acute and chronic conditions by Dr. Soundarya.",
      },
      { property: "og:url", content: "https://a-clinic.vercel.app/treatments" },
      { property: "og:image", content: "https://a-clinic.vercel.app/doctor-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://a-clinic.vercel.app/treatments" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Care that meets every condition."
        description="From everyday acute ailments to long-standing chronic illness — gentle, individualised treatment plans."
      />
      <TreatmentsSection />
      <AppointmentSection />
    </>
  ),
});
