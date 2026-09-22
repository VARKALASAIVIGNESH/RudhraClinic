import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Dr. Soundarya (B.H.M.S, D.Y.T) | Best Homoeopath in Shadnagar — Rudhra Clinic" },
      {
        name: "description",
        content:
          "Meet Dr. Soundarya (B.H.M.S, D.Y.T, Reg: 1972/H/2023), Lead Physician at Rudhra Homoeopathy Clinic, Shadnagar. Specialist in Infertility & Gynaec, Asthma, and Allergic Rhinitis.",
      },
      {
        name: "keywords",
        content:
          "Dr Soundarya Homoeopath, Homoeopathy Doctor Shadnagar, Infertility Specialist Shadnagar, Asthma Doctor Shadnagar, Rudhra Clinic Founder",
      },
      { property: "og:title", content: "Dr. Soundarya (B.H.M.S) — Rudhra Homoeopathy Clinic, Shadnagar" },
      {
        property: "og:description",
        content:
          "Medical Registration 1972/H/2023. Specialist in Infertility & Gynaec, Asthma, Allergic Rhinitis (Success Rate 100%).",
      },
      { property: "og:url", content: "https://a-clinic.vercel.app/about" },
      { property: "og:image", content: "https://a-clinic.vercel.app/doctor-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://a-clinic.vercel.app/about" }],
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
