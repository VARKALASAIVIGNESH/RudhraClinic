import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { OnlineConsultationSection } from "@/components/sections/OnlineConsultationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rudhra Homoeopathy Clinic — Best Homoeopathy Care in Shadnagar | Dr. Soundarya" },
      {
        name: "description",
        content:
          "Rudhra Homoeopathy Clinic in Shadnagar. Dr. Soundarya (B.H.M.S, D.Y.T, Reg: 1972/H/2023) specializes in Infertility & Gynaec, Asthma, Allergic Rhinitis, PCOD, Thyroid, Skin & Arthritis. 100% root-cause healing. Book consultation now.",
      },
      {
        name: "keywords",
        content:
          "Rudhra Homoeopathy Clinic, Best Homoeopathy Clinic in Shadnagar, Homoeopathy Doctor in Shadnagar, Dr Soundarya Homoeopath, Infertility Specialist Shadnagar, Asthma Doctor Shadnagar, Allergic Rhinitis Doctor Shadnagar, PCOD Homoeopathy, Rudhra Clinic Shadnagar",
      },
      { property: "og:title", content: "Rudhra Homoeopathy Clinic — Best Homoeopathy in Shadnagar" },
      {
        property: "og:description",
        content:
          "Specialist in Infertility & Gynaec, Asthma, Allergic Rhinitis (Success Rate 100%). Personalised Classical Homoeopathy, Therapeutic Yoga & Diet in Shadnagar.",
      },
      { property: "og:url", content: "https://rudhrahomoeopathy.com" },
      { property: "og:image", content: "https://rudhrahomoeopathy.com/doctor-portrait.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rudhra Homoeopathy Clinic — Dr. Soundarya | Shadnagar" },
      {
        name: "twitter:description",
        content:
          "Top Homoeopathy Clinic in Shadnagar. Infertility, Asthma, Allergic Rhinitis, PCOD, Skin & Joint care.",
      },
      { name: "twitter:image", content: "https://rudhrahomoeopathy.com/doctor-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rudhrahomoeopathy.com" }],
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
      <OnlineConsultationSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
