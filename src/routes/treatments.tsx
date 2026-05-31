import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments & Conditions — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "PCOD, thyroid, asthma, arthritis, skin, hair, infertility, diabetes & more — treated holistically with homoeopathy, yoga and diet." },
      { property: "og:title", content: "Treatments & Conditions — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Twelve+ conditions cared for with personalised constitutional treatment." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
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
