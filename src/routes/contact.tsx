import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rudhra Homoeopathy Clinic Shadnagar | Location, Phone & Timings" },
      {
        name: "description",
        content:
          "Visit Rudhra Homoeopathy Clinic near Bus Stand, Mahabubnagar Road, Shadnagar 509216. Led by Dr. Soundarya (B.H.M.S). Open Mon-Sat 10AM-2PM & 4PM-7:30PM. Call +91 79953 18298.",
      },
      {
        name: "keywords",
        content:
          "Rudhra Homoeopathy Clinic location, Homoeopathy clinic near me Shadnagar, Dr Soundarya clinic address, Shadnagar homoeopathy phone number",
      },
      { property: "og:title", content: "Contact Rudhra Homoeopathy Clinic — Shadnagar, Telangana" },
      {
        property: "og:description",
        content: "Find directions on Google Maps, call +91 79953 18298, or message directly on WhatsApp.",
      },
      { property: "og:url", content: "https://a-clinic.vercel.app/contact" },
      { property: "og:image", content: "https://a-clinic.vercel.app/doctor-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://a-clinic.vercel.app/contact" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here, whenever you're ready."
        description="Visit the clinic, message us on WhatsApp, or reach out via email and Instagram."
      />
      <ContactSection />
    </>
  ),
});
