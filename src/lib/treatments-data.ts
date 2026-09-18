export interface TreatmentDetail {
  id: string;
  name: string;
  category: "Women's Health" | "Respiratory" | "Pain & Joint" | "Metabolic & Lifestyle" | "Skin & Hair" | "Mind & Sleep";
  image: string;
  shortDesc: string;
  symptoms: string[];
  rootCause: string;
  homeopathyCare: string;
  yogaProtocol: string[];
  dietGuidelines: {
    recommended: string[];
    avoid: string[];
  };
}

export const treatmentsData: TreatmentDetail[] = [
  {
    id: "pcod",
    name: "PCOD / PCOS",
    category: "Women's Health",
    image: "/treatments/pcod.png",
    shortDesc: "Regulates hormonal imbalances naturally, addressing irregular cycles, weight gain, and emotional well-being.",
    symptoms: ["Irregular or absent menstrual cycles", "Sudden weight gain & stubborn belly fat", "Acne, facial hair (hirsutism), thinning hair", "Mood swings & pelvic discomfort"],
    rootCause: "Endocrine imbalance driven by insulin resistance, chronic stress, hypothalamic-pituitary-ovarian axis dysregulation, and metabolic inflammation.",
    homeopathyCare: "Constitutional remedies like Pulsatilla, Sepia, and Calcarea Carb stimulate ovaries to naturally restore ovulatory cycles without synthetic hormone pills or birth control side effects.",
    yogaProtocol: ["Baddha Konasana (Bound Angle Pose)", "Supta Baddha Konasana (Reclined Butterfly)", "Bhujangasana (Cobra Pose)", "Nadi Shodhana Pranayama (Alternate Nostril Breathing)"],
    dietGuidelines: {
      recommended: ["Low glycemic index foods (millets, lentils)", "Seeds cycling (flax, pumpkin, sesame)", "Fresh leafy greens & spearmint tea", "Anti-inflammatory spices like turmeric & cinnamon"],
      avoid: ["Refined sugars & packaged sweets", "Processed dairy & skim milk", "Fried fast foods & refined seed oils", "High-caffeine energy drinks"],
    },
  },
  {
    id: "asthma",
    name: "Asthma & Bronchitis",
    category: "Respiratory",
    image: "/treatments/asthma.png",
    shortDesc: "Reduces frequency and severity of attacks, relieves breathlessness, and naturally improves lung function.",
    symptoms: ["Wheezing and dry cough, worse at night or early morning", "Shortness of breath with chest tightness", "Sensitivity to cold air, dust, pollen", "Dependence on emergency rescue inhalers"],
    rootCause: "Chronic bronchial hyper-responsiveness and hypersensitivity of airway smooth muscle triggered by environmental allergens and cold.",
    homeopathyCare: "Constitutional remedies such as Arsenicum Album, Blatta Orientalis, and Antimonium Tart strengthen airway resilience, reducing mucosal spasms and gradual dependence on steroid inhalers.",
    yogaProtocol: ["Ustrasana (Camel Pose)", "Bhujangasana (Gentle Chest Expander)", "Anulom Vilom (Balancing Pranayama)", "Bhramari Pranayama (Humming Bee Breath)"],
    dietGuidelines: {
      recommended: ["Warm herbal teas with ginger and holy basil (Tulsi)", "Easily digestible soups and broths", "Vitamin C rich fresh citrus (room temperature)", "Raw organic honey with black pepper"],
      avoid: ["Ice-cold beverages and ice creams", "Fermented refrigerated leftovers", "Mucus-producing heavy curds at night", "Artificial food preservatives (sulfites)"],
    },
  },
  {
    id: "allergic-rhinitis",
    name: "Allergic Rhinitis / Sinusitis",
    category: "Respiratory",
    image: "/treatments/allergic-rhinitis.png",
    shortDesc: "Reduces sneezing, itching, and runny nose, providing long-term relief from nasal congestion naturally.",
    symptoms: ["Violent morning bouts of sneezing (15-20 sneezes)", "Watery eyes, itching of palate and ears", "Sinus frontal headaches and nasal blockage", "Post-nasal drip triggering throat clearing"],
    rootCause: "Overactive immune reaction producing excess Histamine and IgE antibodies upon exposure to dust mites, pollen, pet dander, or sudden weather shifts.",
    homeopathyCare: "Allium Cepa, Sabadilla, and Natrum Mur desensitize the respiratory tract from allergen triggers at an epigenetic level, curing recurring allergic vulnerability.",
    yogaProtocol: ["Jala Neti (under guided supervision)", "Surya Namaskar (Gentle Pace)", "Kapalabhati (Mild breath clearing)", "Matsyasana (Fish Pose)"],
    dietGuidelines: {
      recommended: ["Warm water throughout the day", "Turmeric milk (Golden milk) with pinch of black pepper", "Immunity broths with garlic and cloves", "Steamed vegetables"],
      avoid: ["Chilled drinks and direct AC air drafts", "Deep-fried snacks", "Bananas or heavy curd during morning", "Excessive sour fermented foods"],
    },
  },
  {
    id: "thyroid",
    name: "Thyroid Disorders",
    category: "Metabolic & Lifestyle",
    image: "/treatments/thyroid.png",
    shortDesc: "Supports healthy thyroid function, improves metabolism, and helps manage fatigue and weight fluctuations.",
    symptoms: ["Unexplained fatigue and sluggishness", "Intolerance to cold, dry brittle hair and skin", "Unexplained weight gain despite regular diet", "Brain fog, memory lapses, constipation"],
    rootCause: "Autoimmune dysfunction (Hashimoto's thyroiditis), sluggish cellular conversion of T4 to active T3, and adrenal exhaustion.",
    homeopathyCare: "Thyroidinum, Iodum, and Calcarea Carb regulate the neuroendocrine axis, helping the thyroid gland resume natural hormone synthesis and relieving chronic fatigue.",
    yogaProtocol: ["Sarvangasana (Shoulder Stand) or Viparita Karani", "Matsyasana (Fish Pose)", "Ujjayi Pranayama (Ocean Breath)", "Halasana (Plow Pose)"],
    dietGuidelines: {
      recommended: ["Selenium-rich nuts (Brazil nuts, walnuts)", "Iodine balanced whole foods", "Cooked cruciferous vegetables (avoid raw)", "Fiber-rich whole pulses and moringa"],
      avoid: ["Excess raw goitrogens (raw cabbage/cauliflower/kale)", "Gluten-heavy processed bakery foods", "Soy isolates and refined soy oil", "Refined table sugar"],
    },
  },
  {
    id: "skin-hair",
    name: "Skin & Hair Problems",
    category: "Skin & Hair",
    image: "/treatments/skin-hair-problems.png",
    shortDesc: "Manages eczema, psoriasis, acne, and hair fall by targeting the root causes of systemic inflammation.",
    symptoms: ["Dry, itchy, flaky eczema or psoriasis patches", "Cystic acne on cheeks, jawline, and back", "Excessive diffuse hair shedding and scalp dandruff", "Hyper-pigmentation and allergic hives (urticaria)"],
    rootCause: "Toxic liver burden, leaky gut syndrome, systemic chronic inflammation, and hormonal imbalance surfacing through the dermis.",
    homeopathyCare: "Sulphur, Graphites, and Silicea address skin disease from inside out. Homoeopathy refuses external suppression with steroid ointments, ensuring true long-term cellular clearance.",
    yogaProtocol: ["Sarvangasana (for facial & scalp blood circulation)", "Shashankasana (Hare Pose - stress release)", "Sheetali / Sheetkari Pranayama (Cooling breath)", "Adho Mukha Svanasana (Downward Dog)"],
    dietGuidelines: {
      recommended: ["High-antioxidant berries, pomegranate, and amla", "Hydrating vegetables like cucumber, bottle gourd", "Omega-3 rich flax seeds and chia seeds", "Clarified butter (A2 Ghee) in moderation"],
      avoid: ["Excessively spicy, pungent, acidic foods", "Deep-fried street snacks", "Refined sugar chocolates and aerated sodas", "Stale or synthetic processed junk"],
    },
  },
  {
    id: "arthritis",
    name: "Arthritis & Joint Pain",
    category: "Pain & Joint",
    image: "/treatments/arthritis.png",
    shortDesc: "Relieves joint pain, swelling, and stiffness to restore flexibility and improve daily functional mobility.",
    symptoms: ["Morning stiffness lasting over 30 minutes", "Swollen, tender knee, finger, or hip joints", "Cracking/popping sensations (crepitus) on movement", "Reduced range of motion and difficulty climbing stairs"],
    rootCause: "Cartilage wear-and-tear (osteoarthritis) or immune-mediated synovial inflammation (rheumatoid arthritis) aggravated by high uric acid.",
    homeopathyCare: "Rhus Tox, Bryonia, and Colchicum reduce joint inflammation, halt progressive cartilage erosion, and restore synovial lubrication without NSAID stomach toxicity.",
    yogaProtocol: ["Sukshma Vyayama (Gentle micro-joint movements)", "Tadasana (Mountain Pose)", "Veerabhadrasana (Supported Warrior Pose)", "Gentle joint mobility stretches in warm water"],
    dietGuidelines: {
      recommended: ["Anti-inflammatory turmeric with ginger", "Calcium & magnesium rich sesame seeds", "Soaked almonds and walnuts", "Warm seasonal vegetable stews"],
      avoid: ["Nightshade excess (tomatoes/eggplant if sensitive)", "Excess red meat and organ meats (high purine)", "High-sodium salty packaged foods", "Sugary sodas"],
    },
  },
  {
    id: "cervical-spondylosis",
    name: "Cervical & Lumbar Spondylosis",
    category: "Pain & Joint",
    image: "/treatments/cervical-spondylosis.png",
    shortDesc: "Reduces neck pain, muscle tension, and stiffness to gently improve mobility and daily comfort.",
    symptoms: ["Stiff neck with pain radiating down arms or shoulders", "Occipital headaches starting from base of skull", "Numbness or tingling in fingers", "Dizziness or vertigo on sudden neck movement"],
    rootCause: "Degenerative disc changes, bone spur osteophytes, and chronic postural strain from prolonged desk work, phone use, and screen posture.",
    homeopathyCare: "Gelsemium, Actaea Racemosa, and Kalmia Latifolia relieve trapped nerve compression, ease cervical muscle spasms, and resolve associated cervicogenic vertigo.",
    yogaProtocol: ["Greeva Sanchalana (Neck mobility movements)", "Bhujangasana (Gentle Cobra - strengthens cervical spine)", "Marjariasana (Cat-Cow Pose)", "Makarasana (Crocodile Pose for spinal relaxation)"],
    dietGuidelines: {
      recommended: ["Warm milk with turmeric and nutmeg before bed", "Fresh drumstick (moringa) leaves soup", "Sesame and sunflower seeds", "Hydration with warm fluids"],
      avoid: ["Lifting heavy weights on head or shoulders", "Sleeping on excessively thick high pillows", "Inflammatory carbonated drinks", "Cold refrigerated food"],
    },
  },
  {
    id: "sciatica",
    name: "Sciatica & Back Pain",
    category: "Pain & Joint",
    image: "/treatments/sciatica.png",
    shortDesc: "Relieves radiating leg pain, tingling, and numbness, focusing on functional recovery and flexibility.",
    symptoms: ["Electric-shock or burning pain shooting down hip and leg", "Numbness, pins-and-needles in calf and foot", "Difficulty standing straight or walking long distances", "Pain aggravated by coughing, sneezing, or prolonged sitting"],
    rootCause: "Herniated or bulging lumbar disc (L4-L5, L5-S1) pressing on the sciatic nerve root with surrounding myofascial inflammation.",
    homeopathyCare: "Colocynthis, Magnesia Phos, and Hypericum act directly on injured or compressed peripheral nerve sheaths, dissolving acute neuralgic pain rapidly.",
    yogaProtocol: ["Supta Padangusthasana (Reclined Big Toe with strap)", "Pawanmuktasana (Single Leg Gas Release)", "Salabhasana (Gentle Locust Pose)", "Deep Savasana with knee bolster"],
    dietGuidelines: {
      recommended: ["Magnesium-rich foods (banana, pumpkin seeds)", "Hydrating warm soups", "Anti-inflammatory ginger decoction", "Whole grain khichdi with ghee"],
      avoid: ["Prolonged uninterrupted sitting (>45 mins)", "Sudden forward-bending with bent knees", "Heavy gas-producing lentils without cumin/hing", "Sour cold curds"],
    },
  },
  {
    id: "kidney-stones",
    name: "Kidney Stones (Renal Calculi)",
    category: "Pain & Joint",
    image: "/treatments/kidney-stones.png",
    shortDesc: "Helps in active pain relief and natural stone expulsion while supporting healthy, long-term kidney function.",
    symptoms: ["Severe, spasmodic loin-to-groin pain", "Burning sensation during urination", "Blood in urine (hematuria)", "Frequent urgency to urinate with nausea"],
    rootCause: "Supersaturation of calcium oxalate or uric acid in concentrated urine due to dehydration, metabolic acidity, and genetic tendency.",
    homeopathyCare: "Berberis Vulgaris, Lycopodium, and Sarsaparilla soften, break down, and facilitate painless urinary expulsion of stones up to 8-10mm while preventing recurrence.",
    yogaProtocol: ["Ustrasana (Camel Pose)", "Ardha Matsyendrasana (Half Spinal Twist)", "Pawanmuktasana", "Kapalabhati (Mild, after acute pain subsides)"],
    dietGuidelines: {
      recommended: ["3 to 4 liters of clean water daily", "Coconut water and barley water", "Fresh lemon water (citrate prevents crystallization)", "Horse gram (Kulthi dal) soup"],
      avoid: ["Excess oxalate-rich spinach, beetroot, chocolates", "High sodium processed canned foods", "Excess animal protein and red meat", "Commercial soda drinks with phosphoric acid"],
    },
  },
  {
    id: "diabetes",
    name: "Diabetes & Metabolic Care",
    category: "Metabolic & Lifestyle",
    image: "/treatments/diabetes.png",
    shortDesc: "Supports metabolic health, boosts energy levels, and emphasizes long-term vitality and organ protection.",
    symptoms: ["Excessive thirst and frequent urination at night", "Constant hunger and rapid post-meal fatigue", "Slow-healing cuts and tingling in feet (neuropathy)", "Recurrent skin infections and fluctuating sugar levels"],
    rootCause: "Pancreatic beta-cell exhaustion, peripheral insulin receptor resistance, visceral adiposity, and hepatic glucose overproduction.",
    homeopathyCare: "Syzygium Jambolanum, Gymnema Sylvestre, and Phosphoric Acid promote cellular glucose uptake, protect micro-vascular capillary health, and stabilize glycemic variability.",
    yogaProtocol: ["Mandukasana (Frog Pose - stimulates pancreas)", "Ardha Matsyendrasana (Spinal Twist)", "Paschimottanasana (Seated Forward Bend)", "Surya Namaskar (Daily dynamic flow)"],
    dietGuidelines: {
      recommended: ["Methi (fenugreek) soaked water in the morning", "Jamun seed powder, bitter gourd, amla", "High fiber millets (foxtail, ragi, jowar)", "Cinnamon boiled herbal tea"],
      avoid: ["White rice and refined wheat flour (maida)", "Fruit juices and sugary sodas", "Tubers like potatoes and tapioca in excess", "Midnight snacking"],
    },
  },
  {
    id: "htn",
    name: "Hypertension (High BP)",
    category: "Metabolic & Lifestyle",
    image: "/treatments/htn.png",
    shortDesc: "Promotes cardiovascular wellness and healthy blood pressure regulation with stress-relief lifestyle counseling.",
    symptoms: ["Morning occipital throbbing headaches", "Palpitations and sensation of heartbeat in ears", "Easy breathlessness during mild exertion", "High baseline systolic & diastolic readings"],
    rootCause: "Arterial stiffness, sympathetic nervous system hyperactivity, chronic emotional stress, and sodium-potassium electrolyte imbalance.",
    homeopathyCare: "Rauwolfia Serpentina, Crataegus, and Baryta Carb act as natural vasodilators, calming arterial vascular resistance without causing drug fatigue or electrolyte collapse.",
    yogaProtocol: ["Shavasana (Guided Yoga Nidra)", "Sheetali & Sheetkari Pranayama", "Bhramari Pranayama", "Gentle stretching and restorative forward bends"],
    dietGuidelines: {
      recommended: ["Potassium-rich fruits (banana, coconut water)", "Garlic cloves in morning", "Flaxseed meal and raw walnuts", "Hibiscus tea"],
      avoid: ["Excess table salt, pickles, papads", "Caffeine, energy drinks, and alcohol", "Fried salty snacks and chips", "Smoking and tobacco"],
    },
  },
  {
    id: "infertility",
    name: "Infertility & Reproductive Care",
    category: "Women's Health",
    image: "/treatments/infertility.png",
    shortDesc: "Supports natural reproductive health and hormonal balance with sensitive, compassionate constitutional care.",
    symptoms: ["Inability to conceive after 12+ months of trying", "Anovulatory cycles or poor endometrial lining", "Male factor issues: low sperm count or motility", "High emotional stress and fertility anxiety"],
    rootCause: "Hormonal dysregulation, follicular maturation defects, thin uterine endometrium, or oxidative stress impairing sperm and egg quality.",
    homeopathyCare: "Constitutional prescription (Sepia, Lycopodium, Natrum Mur) restores natural reproductive endocrine harmony, enhancing egg quality, follicular rupture, and endometrial receptivity.",
    yogaProtocol: ["Baddha Konasana (Cobbler Pose)", "Setu Bandhasana (Bridge Pose)", "Viparita Karani (Legs Up the Wall)", "Nadi Shodhana & Yoga Nidra"],
    dietGuidelines: {
      recommended: ["Nutrient-dense soaked nuts, seeds, and figs", "Sprouted legumes and green leafy vegetables", "Healthy fats: cow ghee, avocado, olive oil", "Antioxidant-rich pomegranate juice"],
      avoid: ["Processed junk foods and trans fats", "Excess plastic bottled water (endocrine disruptors)", "Excess coffee and artificial sweeteners", "High stress and irregular sleep routines"],
    },
  },
  {
    id: "anxiety",
    name: "Anxiety & Stress Management",
    category: "Mind & Sleep",
    image: "/treatments/anxiety.png",
    shortDesc: "Reduces nervousness, restlessness, and stress, promoting overall emotional balance and mental peace.",
    symptoms: ["Persistent impending doom or racing catastrophic thoughts", "Restlessness, trembling hands, and rapid heart rate", "Tightness in throat or chest (panic episodes)", "Digestive distress linked directly to emotional stress"],
    rootCause: "Vagal nerve dysregulation, cortisol & adrenaline burnout, hyperactive amygdala response, and unresolved emotional trauma.",
    homeopathyCare: "Aconite, Argentum Nitricum, and Ignatia provide rapid, non-addictive relief from panic and chronic anxiety without sedation, brain fog, or dependency.",
    yogaProtocol: ["Bhramari Pranayama (Vibrational brain calming)", "Anulom Vilom (Balancing sympathetic-parasympathetic)", "Balasana (Child's Pose)", "Guided Mindfulness Meditation (15 mins)"],
    dietGuidelines: {
      recommended: ["Chamomile and Brahmi herbal tea", "Warm spiced almond milk with nutmeg", "Magnesium-rich soaked pumpkin seeds", "Fresh seasonal fruits and warm home-cooked meals"],
      avoid: ["High caffeine coffee and energy drinks", "Refined sugar spikes and crashes", "Skipping meals causing hypoglycemic anxiety", "Late-night screen stimulation"],
    },
  },
  {
    id: "sleep-apnea",
    name: "Sleep Disorders & Insomnia",
    category: "Mind & Sleep",
    image: "/treatments/sleep-apnea.png",
    shortDesc: "Supports better sleep quality and reduces disturbances to promote daytime freshness and vitality.",
    symptoms: ["Difficulty falling asleep despite feeling exhausted", "Frequent waking up in the middle of the night", "Loud snoring, choking gasps (sleep apnea)", "Waking up unrefreshed with morning headaches"],
    rootCause: "Upper airway laxity/obstruction, disrupted circadian melatonin rhythm, evening blue light exposure, and chronic cortisol elevation.",
    homeopathyCare: "Passiflora, Coffea Cruda, and Kali Phos induce restorative slow-wave sleep naturally, stabilizing the circadian clock without pharmaceutical grogginess.",
    yogaProtocol: ["Supta Baddha Konasana with bolster", "Viparita Karani against wall before bed", "Deep diaphragmatic belly breathing", "Yoga Nidra relaxation track"],
    dietGuidelines: {
      recommended: ["Light dinner at least 2.5 hours before sleep", "Warm milk with a pinch of nutmeg and saffron", "Tart cherry juice or soaked walnuts", "Hydration during day, minimized 1 hour before bed"],
      avoid: ["Heavy, oily, or spicy late-night dinners", "Alcohol as a sleep aid (fragments REM sleep)", "Caffeine after 3:00 PM", "Eating while watching television or phone"],
    },
  },
  {
    id: "immunity-boosting",
    name: "Immunity & Preventive Care",
    category: "Respiratory",
    image: "/treatments/immunity-boosting.png",
    shortDesc: "Strengthens the body's natural defense mechanisms and resilience against recurrent illnesses.",
    symptoms: ["Catching colds, coughs, or flu with every weather change", "Long recovery time after minor infections", "Chronic fatigue, low energy, and sluggish digestion", "Recurrent mouth ulcers or enlarged cervical glands"],
    rootCause: "Depleted vital force, gut dysbiosis, chronic nutritional deficiencies, and recurring antibiotic/suppressive drug abuse.",
    homeopathyCare: "Constitutional remedies like Calcarea Carb, Silicea, and Tuberculinum elevate innate host immunity, building deep cellular resistance against viral and bacterial pathogens.",
    yogaProtocol: ["Surya Namaskar (6-12 rounds daily)", "Bhastrika Pranayama (Energizing lung cleanser)", "Matsyasana (Thymus gland stimulation)", "Dhanurasana (Bow Pose)"],
    dietGuidelines: {
      recommended: ["Daily fresh amla (Indian gooseberry) or amla juice", "Probiotic homemade fresh yogurt / buttermilk", "Ginger, black pepper, and holy basil decoction", "Colorful bell peppers, carrots, and sweet potatoes"],
      avoid: ["Excess refined sugars (suppresses white blood cells)", "Packaged processed snacks with synthetic additives", "Ice cold water and sweetened sodas", "Stale microwaved leftovers"],
    },
  },
];
