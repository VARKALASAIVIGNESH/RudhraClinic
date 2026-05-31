import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BlogSection } from "@/components/sections/BlogSection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Articles & Blog — Rudhra Homoeopathy Clinic" },
      { name: "description", content: "Doctor-written articles on women's health, homoeopathy, nutrition, yoga and chronic disease care." },
      { property: "og:title", content: "Health Articles & Blog — Rudhra Homoeopathy Clinic" },
      { property: "og:description", content: "Practical wellness insights from Dr. Soundarya." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Health Articles"
        title="Wellness, written with care."
        description="Thoughtful reading across homoeopathy, yoga, nutrition and lifestyle."
      />
      <BlogSection />
    </>
  ),
});
