import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Read stories from patients who found lasting relief through holistic homoeopathy at Rudhra Homoeopathy Clinic." },
      { property: "og:title", content: "Patient Testimonials — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Real stories. Real healing." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trust, earned one patient at a time."
        description="Genuine experiences from those we've had the privilege of caring for."
      />
      <TestimonialsSection />
    </>
  ),
});
