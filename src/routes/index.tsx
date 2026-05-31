import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { OnlineConsultationSection } from "@/components/sections/OnlineConsultationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rudhra Homoeopathy Clinic — Holistic Healing in Shadnagar" },
      {
        name: "description",
        content:
          "Personalised homoeopathy, yoga & diet by Dr. Soundarya (B.H.M.S, D.Y.T). Treating PCOD, thyroid, asthma, skin, arthritis & more. Book an appointment today.",
      },
      { property: "og:title", content: "Rudhra Homoeopathy Clinic — Holistic Healing" },
      {
        property: "og:description",
        content: "Personalised Healing Through Homoeopathy, Yoga & Diet.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <WhyChooseUsSection />
      <AppointmentSection />
      <TestimonialsSection />
      <OnlineConsultationSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
