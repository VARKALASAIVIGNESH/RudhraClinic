import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Soundarya — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Meet Dr. Soundarya (B.H.M.S, D.Y.T), founder of Rudhra Homoeopathy Clinic — blending classical homoeopathy with yoga and diet." },
      { property: "og:title", content: "About Dr. Soundarya — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Holistic, patient-centered care from a qualified homoeopath and yoga therapist." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="About Doctor"
        title="Healing guided by listening."
        description="A holistic approach that brings together homoeopathy, yoga and nutrition — practiced with empathy and precision."
      />
      <AboutSection />
      <WhyChooseUsSection />
    </>
  ),
});
