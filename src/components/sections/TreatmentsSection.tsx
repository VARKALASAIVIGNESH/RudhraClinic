import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Treatment {
  image: string;
  name: string;
  benefits: string[];
  rudhraCare: string;
}

const treatments: Treatment[] = [
  {
    image: "/treatments/asthma.png",
    name: "Asthma",
    benefits: [
      "Reduces frequency & severity of attacks",
      "Relieves breathlessness & wheezing",
      "Improves lung function naturally"
    ],
    rudhraCare: "Individualized constitutional treatment aimed at improving respiratory health and immunity."
  },
  {
    image: "/treatments/allergic-rhinitis.png",
    name: "Allergic Rhinitis",
    benefits: [
      "Reduces sneezing, itching & runny nose",
      "Relieves nasal congestion naturally",
      "Reduces dependency on antihistamines"
    ],
    rudhraCare: "Detailed allergy assessment with personalized remedies for long-term relief."
  },
  {
    image: "/treatments/arthritis.png",
    name: "Arthritis",
    benefits: [
      "Relieves joint pain, swelling & stiffness",
      "Improves mobility & flexibility",
      "Reduces inflammation naturally"
    ],
    rudhraCare: "Compassionate care focused on reducing pain and improving daily function."
  },
  {
    image: "/treatments/kidney-stones.png",
    name: "Kidney Stones",
    benefits: [
      "Helps in pain relief & stone expulsion",
      "Reduces recurrence of stone formation",
      "Supports healthy kidney function"
    ],
    rudhraCare: "Individualized treatment with dietary guidance and regular follow-up support."
  },
  {
    image: "/treatments/pcod.png",
    name: "PCOD",
    benefits: [
      "Regulates hormonal imbalance naturally",
      "Improves menstrual irregularities",
      "Reduces acne, weight gain & hair fall"
    ],
    rudhraCare: "Holistic management addressing hormonal balance, lifestyle, and emotional well-being."
  },
  {
    image: "/treatments/skin-hair-problems.png",
    name: "Skin & Hair Problems",
    benefits: [
      "Helps manage acne, eczema & recurrent skin complaints",
      "Reduces itching, redness & inflammation",
      "Improves skin health naturally"
    ],
    rudhraCare: "Personalized constitutional treatment focusing on the root cause of skin concerns."
  },
  {
    image: "/treatments/infertility.png",
    name: "Infertility",
    benefits: [
      "Supports reproductive health naturally",
      "Helps regulate ovulation & hormonal balance",
      "Enhances overall reproductive wellness"
    ],
    rudhraCare: "Sensitive, confidential, and compassionate care for couples on their fertility journey."
  },
  {
    image: "/treatments/thyroid.png",
    name: "Thyroid Disorders",
    benefits: [
      "Supports healthy thyroid function",
      "Helps manage fatigue & weight fluctuations",
      "Improves overall metabolism"
    ],
    rudhraCare: "Individualized treatment plans with continuous monitoring and guidance."
  },
  {
    image: "/treatments/htn.png",
    name: "Hypertension (HTN)",
    benefits: [
      "Supports healthy blood pressure regulation",
      "Helps reduce stress-related symptoms",
      "Improves cardiovascular wellness"
    ],
    rudhraCare: "Holistic care combining lifestyle counseling and constitutional treatment."
  },
  {
    image: "/treatments/diabetes.png",
    name: "Diabetes",
    benefits: [
      "Supports overall metabolic health",
      "Helps improve energy levels",
      "Promotes better general well-being"
    ],
    rudhraCare: "Personalized treatment with emphasis on long-term health and quality of life."
  },
  {
    image: "/treatments/cervical-spondylosis.png",
    name: "Cervical Spondylosis",
    benefits: [
      "Helps reduce neck pain & stiffness",
      "Relieves muscle tension and discomfort",
      "Improves neck mobility"
    ],
    rudhraCare: "Gentle, patient-centered care aimed at improving mobility and daily comfort."
  },
  {
    image: "/treatments/sciatica.png",
    name: "Sciatica",
    benefits: [
      "Helps reduce radiating leg pain",
      "Relieves tingling & numbness",
      "Improves mobility and flexibility"
    ],
    rudhraCare: "Individualized treatment focusing on pain relief and functional recovery."
  },
  {
    image: "/treatments/anxiety.png",
    name: "Anxiety",
    benefits: [
      "Helps reduce nervousness & restlessness",
      "Promotes emotional balance",
      "Improves stress coping ability"
    ],
    rudhraCare: "Compassionate listening and individualized remedies tailored to emotional health."
  },
  {
    image: "/treatments/sleep-apnea.png",
    name: "Sleep Apnea / Sleep Disorders",
    benefits: [
      "Supports better sleep quality",
      "Helps reduce sleep disturbances",
      "Promotes daytime freshness and energy"
    ],
    rudhraCare: "Holistic assessment of sleep patterns with personalized treatment support."
  },
  {
    image: "/treatments/immunity-boosting.png",
    name: "Immunity Boosting",
    benefits: [
      "Supports the body's natural defense mechanisms",
      "Helps reduce frequency of recurrent illnesses",
      "Promotes overall vitality and wellness"
    ],
    rudhraCare: "Constitutional treatment designed to strengthen long-term health and resilience."
  }
];

export function TreatmentsSection() {
  return (
    <section className="relative bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ornament-divider text-[10px] uppercase tracking-[0.3em]">Treatments</p>
          <h2 className="mt-4 font-serif text-4xl text-brown md:text-5xl">
            Conditions we care for
          </h2>
          <p className="mt-4 text-muted-foreground">
            Classical homoeopathy paired with yoga and diet — addressing acute symptoms while
            healing the root cause for lasting wellness.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card hover-lift"
            >
              {/* Header with image overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-serif text-2xl text-brown">{t.name}</h3>
              </div>

              {/* Benefits list */}
              <div className="flex-grow px-6 py-5">
                <ul className="space-y-2.5">
                  {t.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rudhra Care highlighted footer */}
              <div className="border-t border-border bg-olive/5 px-6 py-5">
                <div className="rounded-xl border-l-2 border-copper bg-card/60 p-3.5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-copper">
                    Rudhra Care
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/90">
                    {t.rudhraCare}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    to="/treatments"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-copper hover:text-copper/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

