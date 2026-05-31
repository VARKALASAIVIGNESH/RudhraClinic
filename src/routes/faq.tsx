import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Answers about homoeopathy, treatment duration, safety, chronic illness management, and online consultations." },
      { property: "og:title", content: "FAQ — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Common questions about homoeopathy, gently answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you wanted to know."
        description="Clarity before commitment — the most common questions, answered openly."
      />
      <FAQSection />
    </>
  ),
});
