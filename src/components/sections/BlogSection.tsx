import { useState } from "react";
import { ArrowUpRight, Clock, Sparkles, X, BookOpen, CalendarCheck, Leaf, FlaskConical, Utensils, Wind, Heart, Moon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Article {
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  content: string[];
  takeaways: string[];
  icon: React.ElementType;
  gradient: string;
  accent: string;
}

const articles: Article[] = [
  {
    cat: "Women's Health",
    title: "Understanding PCOD: A Holistic Roadmap",
    excerpt: "Why hormones go out of rhythm — and how constitutional homoeopathy, yoga and diet restore natural ovulation.",
    read: "6 min",
    icon: Heart,
    gradient: "from-rose-400/80 to-copper/70",
    accent: "bg-rose-50 dark:bg-rose-950/30 border-rose-200/60 dark:border-rose-800/40",
    content: [
      "Polycystic Ovarian Disease (PCOD) is not merely a localized gynecological problem; it is a systemic metabolic-endocrine imbalance. Modern medicine frequently relies on birth control pills to force artificial withdrawal bleeding, which often masks symptoms rather than correcting the underlying pathology.",
      "In classical homoeopathy, remedies such as Pulsatilla, Sepia, and Natrum Mur work directly with your hypothalamic-pituitary-ovarian axis. By addressing insulin resistance, emotional stress markers, and ovarian follicular maturation, cycles are gently normalized.",
      "Coupled with specific asanas like Baddha Konasana (Butterfly pose) and seed cycling, the reproductive organs receive enhanced micro-circulation, producing sustainable health without pharmaceutical dependency.",
    ],
    takeaways: [
      "Target insulin sensitivity with low-GI millets and fiber-rich vegetables.",
      "Practice 15 minutes of pelvic opening yoga daily.",
      "Avoid synthetic hormones that merely suppress root hormonal triggers.",
    ],
  },
  {
    cat: "Homoeopathy Science",
    title: "What Makes a Remedy 'Constitutional'?",
    excerpt: "A primer on classical case-taking and why one carefully selected remedy can resolve diverse symptoms.",
    read: "5 min",
    icon: FlaskConical,
    gradient: "from-copper/80 to-amber-400/70",
    accent: "bg-amber-50 dark:bg-amber-950/30 border-amber-200/60 dark:border-amber-800/40",
    content: [
      "Patients often wonder: 'Why does the doctor ask about my sleep patterns, temperature preferences, childhood illnesses, and emotional temper when I only came for asthma or skin issues?'",
      "In classical Hahnemannian homoeopathy, the human body does not produce disconnected illnesses. Your migraine, digestive acidity, and anxiety are all expressions of an unsettled vital dynamic force. A 'constitutional remedy' is one that matches the totality of your mental, emotional, and physical constitution.",
      "When the right constitutional remedy is administered, the patient's innate immune and endocrine homeostasis is stimulated, allowing multiple chronic complaints to resolve simultaneously.",
    ],
    takeaways: [
      "Constitutional medicines treat the person, not just the clinical label.",
      "Deep individualization ensures zero rebound relapses.",
      "Safe and non-toxic for infants, adults, and seniors.",
    ],
  },
  {
    cat: "Clinical Nutrition",
    title: "Eating for Hormonal & Metabolic Harmony",
    excerpt: "Fundamental dietary principles that accelerate your homoeopathic recovery and reduce inflammation.",
    read: "7 min",
    icon: Utensils,
    gradient: "from-olive/80 to-emerald-400/70",
    accent: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-800/40",
    content: [
      "Diet is not merely fuel; every meal sends biochemical instructions to your genes and gut microbiome. When undergoing constitutional homoeopathy, eliminating pro-inflammatory triggers substantially accelerates cellular rejuvenation.",
      "Modern processed foods containing refined vegetable oils, high-fructose corn syrup, and artificial emulsifiers create micro-gut permeability (leaky gut), spilling inflammatory cytokines into the bloodstream.",
      "By transitioning to whole local grains, seasonal vegetables, A2 clarified butter (ghee), and digestive spices like cumin, ginger, and turmeric, your metabolic pathways function cleanly.",
    ],
    takeaways: [
      "Replace ultra-processed seed oils with cold-pressed mustard, sesame, or pure ghee.",
      "Emphasize warm, easily digestible home-cooked meals.",
      "Eat your evening meal at least 2.5 hours before retiring to bed.",
    ],
  },
  {
    cat: "Yoga & Breathwork",
    title: "5 Pranayama Practices for Asthma & Sinusitis",
    excerpt: "Daily therapeutic breathwork routines that expand vital lung capacity and soothe hyperactive airways.",
    read: "4 min",
    icon: Wind,
    gradient: "from-sky-400/80 to-olive/70",
    accent: "bg-sky-50 dark:bg-sky-950/30 border-sky-200/60 dark:border-sky-800/40",
    content: [
      "Bronchial asthma and allergic rhinitis involve hyper-reactive airway spasms. Controlled yogic breathing (Pranayama) trains the autonomic nervous system to shift from sympathetic panic to parasympathetic repair.",
      "Practices like Nadi Shodhana (Alternate Nostril Breathing) balance the nervous system, while Bhramari (Humming Bee Breath) releases nitric oxide in the paranasal sinuses, acting as a natural anti-microbial and bronchodilator.",
      "When performed for 10-15 minutes every morning under guided supervision, airway reactivity decreases significantly, reducing emergency inhaler dependence.",
    ],
    takeaways: [
      "Nadi Shodhana balances sympathetic-parasympathetic tone.",
      "Bhramari increases nasal nitric oxide production by up to 15-fold.",
      "Always practice breathing in a well-ventilated room.",
    ],
  },
  {
    cat: "Chronic Care",
    title: "Living Well with Thyroid & Autoimmune Disorders",
    excerpt: "Strategic lifestyle anchors that stabilize metabolic energy, weight, and thyroid hormone synthesis.",
    read: "6 min",
    icon: Leaf,
    gradient: "from-teal-400/80 to-copper/60",
    accent: "bg-teal-50 dark:bg-teal-950/30 border-teal-200/60 dark:border-teal-800/40",
    content: [
      "Thyroid disorders like Hashimoto's or hypothyroidism are among the most under-addressed epidemics today. Standard care frequently stops at prescribing synthetic Levothyroxine, leaving patients still suffering from stubborn weight gain, hair loss, and brain fog.",
      "The thyroid gland is deeply vulnerable to chronic cortisol elevation and gut dysbiosis. 20% of T4 to T3 thyroid conversion takes place in the gut flora, and another 60% in the liver.",
      "Our clinic addresses thyroid disorders holistically: supporting liver phase-2 detoxification, regulating the neuro-endocrine axis with homoeopathy, and prescribing specific inverted yoga postures like Sarvangasana.",
    ],
    takeaways: [
      "Prioritize gut health and liver detoxification for optimal T3 conversion.",
      "Incorporate selenium and zinc-rich foods into daily meals.",
      "Manage emotional stress to protect adrenal-thyroid axis balance.",
    ],
  },
  {
    cat: "Mind & Rest",
    title: "Sleep, Stress & the Healing Nervous System",
    excerpt: "The overlooked biological pillars that dictate how rapidly your body repairs from illness.",
    read: "5 min",
    icon: Moon,
    gradient: "from-violet-400/80 to-indigo-400/70",
    accent: "bg-violet-50 dark:bg-violet-950/30 border-violet-200/60 dark:border-violet-800/40",
    content: [
      "You cannot heal a chronic illness in a state of perpetual physiological danger. Chronic sympathetic arousal keeps cortisol elevated, which shuts down digestive enzyme production, suppresses immune natural killer cells, and raises arterial inflammation.",
      "Slow-wave deep sleep is the exact biological window when human growth hormone surges, the brain's glymphatic system flushes metabolic waste, and immune memory is consolidated.",
      "Simple circadian hygiene — such as dimming overhead LED lights post-sunset, avoiding evening digital screens, and practicing Yoga Nidra — can cut recovery times in half.",
    ],
    takeaways: [
      "Morning sunlight exposure sets your 24-hour circadian melatonin clock.",
      "Eliminate blue light screens 60 minutes prior to sleep.",
      "Practice 10 minutes of guided diaphragmatic breathing before sleep.",
    ],
  },
];

export function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/25 bg-copper/8 px-4 py-1.5 text-xs font-bold tracking-widest text-copper uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Clinical Knowledge Hub
          </div>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.12]">
            Doctor-Authored{" "}
            <span className="gradient-text-copper">Health Insights</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Evidence-backed medical guidance on women's health, constitutional homoeopathy, therapeutic yoga, and holistic living from Dr. Soundarya.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const Icon = a.icon;
            return (
              <article
                key={a.title}
                onClick={() => setSelectedArticle(a)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-deep hover:border-copper/20 flex flex-col"
              >
                {/* Colorful visual header */}
                <div className={`relative h-28 bg-gradient-to-br ${a.gradient} flex items-end p-4`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }} />
                  {/* Icon */}
                  <div className="relative z-10 grid h-10 w-10 place-items-center rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  {/* Read time */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/20 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-white">
                    <Clock className="h-3 w-3" />
                    {a.read}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="inline-flex self-start rounded-full bg-olive/10 border border-olive/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-olive dark:text-olive-soft">
                    {a.cat}
                  </span>
                  <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-copper transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs font-bold text-copper">
                    <span>Read Full Article</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-border/60 bg-card/98 backdrop-blur-2xl shadow-deep p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color stripe at top */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${selectedArticle.gradient}`} />

            <div className="flex items-start justify-between gap-4 pt-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-olive/12 border border-olive/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-olive dark:text-olive-soft">
                    {selectedArticle.cat}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {selectedArticle.read} read
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                  {selectedArticle.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  By Dr. Soundarya, B.H.M.S, D.Y.T · Rudhra Homoeopathy Clinic
                </p>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full border border-border p-2 text-muted-foreground hover:bg-muted transition-all shrink-0"
                aria-label="Close article"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 border-t border-border/60 pt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className={`mt-5 rounded-2xl border p-4 ${selectedArticle.accent}`}>
              <h4 className="font-display text-sm font-bold text-copper flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Doctor's Clinical Takeaways
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedArticle.takeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                    <span className="text-copper font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
              <span className="text-xs text-muted-foreground">Questions about this topic?</span>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  Close
                </button>
                <Link
                  to="/appointment"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-copper px-5 py-2 text-xs font-bold text-ivory shadow-glow transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Consult Dr. Soundarya
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
