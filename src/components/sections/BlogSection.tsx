import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    cat: "Women's Health",
    title: "Understanding PCOD: A Holistic Roadmap",
    excerpt: "Why hormones go out of rhythm — and how homoeopathy, yoga and diet bring them back.",
    read: "6 min",
  },
  {
    cat: "Homeopathy Education",
    title: "What Makes a Remedy 'Constitutional'?",
    excerpt: "A primer on classical case-taking and why one remedy can heal many symptoms.",
    read: "5 min",
  },
  {
    cat: "Nutrition & Diet",
    title: "Eating for Your Dosha & Disease",
    excerpt: "Simple food principles that complement your homoeopathic treatment.",
    read: "7 min",
  },
  {
    cat: "Yoga Wellness",
    title: "5 Pranayama Practices for Asthma",
    excerpt: "Daily breathing routines that strengthen lung capacity gently.",
    read: "4 min",
  },
  {
    cat: "Chronic Disease Care",
    title: "Living Well with Thyroid Disorders",
    excerpt: "Lifestyle anchors that make a measurable difference alongside medicine.",
    read: "6 min",
  },
  {
    cat: "Lifestyle",
    title: "Sleep, Stress & the Healing Body",
    excerpt: "The overlooked pillars that decide how fast you actually recover.",
    read: "5 min",
  },
];

export function BlogSection() {
  return (
    <section className="relative bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Health Articles</p>
            <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
              From our journal
            </h2>
            <p className="mt-3 text-muted-foreground">
              Practical, doctor-written insights to help you live a healthier, more balanced life.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 hover-lift"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider">
                <span className="rounded-full bg-olive/10 px-3 py-1 text-olive">{a.cat}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {a.read}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-snug text-brown">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
