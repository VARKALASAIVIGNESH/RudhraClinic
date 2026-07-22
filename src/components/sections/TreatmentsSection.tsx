

interface Treatment {
  image: string;
  name: string;
  desc: string;
}

const treatments: Treatment[] = [
  {
    image: "/treatments/asthma.png",
    name: "Asthma",
    desc: "Reduces frequency and severity of attacks, relieves breathlessness, and naturally improves lung function."
  },
  {
    image: "/treatments/allergic-rhinitis.png",
    name: "Allergic Rhinitis",
    desc: "Reduces sneezing, itching, and runny nose, providing long-term relief from nasal congestion naturally."
  },
  {
    image: "/treatments/arthritis.png",
    name: "Arthritis",
    desc: "Relieves joint pain, swelling, and stiffness to restore flexibility and improve daily functional mobility."
  },
  {
    image: "/treatments/kidney-stones.png",
    name: "Kidney Stones",
    desc: "Helps in active pain relief and stone expulsion while supporting healthy, long-term kidney function."
  },
  {
    image: "/treatments/pcod.png",
    name: "PCOD",
    desc: "Regulates hormonal imbalances naturally, addressing irregular cycles, weight gain, and emotional well-being."
  },
  {
    image: "/treatments/skin-hair-problems.png",
    name: "Skin & Hair Problems",
    desc: "Manages eczema, acne, and hair fall by targeting the root causes of inflammation and redness."
  },
  {
    image: "/treatments/infertility.png",
    name: "Infertility",
    desc: "Supports natural reproductive health and hormonal balance with sensitive, compassionate constitutional care."
  },
  {
    image: "/treatments/thyroid.png",
    name: "Thyroid Disorders",
    desc: "Supports healthy thyroid function, improves metabolism, and helps manage fatigue and weight fluctuations."
  },
  {
    image: "/treatments/htn.png",
    name: "Hypertension (HTN)",
    desc: "Promotes cardiovascular wellness and healthy blood pressure regulation with stress-relief lifestyle counseling."
  },
  {
    image: "/treatments/diabetes.png",
    name: "Diabetes",
    desc: "Supports metabolic health, boosts energy levels, and emphasizes long-term vitality and quality of life."
  },
  {
    image: "/treatments/cervical-spondylosis.png",
    name: "Cervical Spondylosis",
    desc: "Reduces neck pain, muscle tension, and stiffness to gently improve mobility and daily comfort."
  },
  {
    image: "/treatments/sciatica.png",
    name: "Sciatica",
    desc: "Relieves radiating leg pain, tingling, and numbness, focusing on functional recovery and flexibility."
  },
  {
    image: "/treatments/anxiety.png",
    name: "Anxiety",
    desc: "Reduces nervousness, restlessness, and stress, promoting overall emotional balance and mental peace."
  },
  {
    image: "/treatments/sleep-apnea.png",
    name: "Sleep Apnea / Sleep Disorders",
    desc: "Supports better sleep quality and reduces disturbances to promote daytime freshness and vitality."
  },
  {
    image: "/treatments/immunity-boosting.png",
    name: "Immunity Boosting",
    desc: "Strengthens the body's natural defense mechanisms and resilience against recurrent illnesses."
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col items-center text-center p-6 rounded-[2rem] border border-copper/10 bg-card/40 hover:bg-card hover:border-copper/30 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-350"
            >
              {/* Circular Image Container with hover glow */}
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 rounded-full bg-copper/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-copper/30 bg-ivory shadow-soft transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-serif text-xl font-semibold text-brown group-hover:text-copper transition-colors duration-350">{t.name}</h3>

              {/* Description (2 lines definition) */}
              <p className="mt-3.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

