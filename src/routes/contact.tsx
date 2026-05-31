import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Rudhra Homoeopathy Clinic, Shadnagar" },
      { name: "description", content: "Visit Rudhra Homoeopathy Clinic at NH44, Opp Bus Stop, Shadnagar – 509216. Open 10AM–2PM & 4PM–7:30PM." },
      { property: "og:title", content: "Contact Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Find us in Shadnagar or reach out via WhatsApp, email and Instagram." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
