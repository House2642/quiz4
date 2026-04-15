export interface CompareQuestion {
  id: string;
  question: string;
  itemA: string;
  itemB: string;
  hints: string[];
  answer: string;
}

export interface ConnectionQuestion {
  id: string;
  prompt: string;
  answer: string;
  relatedTermIds: string[];
}

export const COMPARE_QUESTIONS: CompareQuestion[] = [
  {
    id: "cave1-vs-cave19",
    question: "How do Ajanta Cave 1 and Ajanta Cave 19 differ in function, form, and content?",
    itemA: "Ajanta Cave 1",
    itemB: "Ajanta Cave 19",
    hints: [
      "Think about the PURPOSE of each cave — one is for living/meditating, one is for communal worship",
      "One contains famous paintings; the other is known more for its sculptural facade",
      "What architectural types do they represent? (vihara vs. chaitya)",
    ],
    answer:
      "Cave 1 is a VIHARA (monastery hall): a rectangular hall with monk cells around the walls, used for monastic living and private devotion. It is celebrated for its PAINTINGS — including Padmapani and Vajrapani flanking the main shrine. Cave 19 is a CHAITYA GRIHA (prayer/worship hall): an apsidal hall with a stupa at the far end, used for communal worship. It has an elaborate SCULPTURAL FACADE with a large horseshoe window (chandrasala) that floods the interior with light. Cave 1 → paintings, monastery life. Cave 19 → sculpture, communal prayer, stupa.",
  },
  {
    id: "padmapani-vs-vajrapani",
    question: "Compare and contrast Padmapani and Vajrapani as depicted in Ajanta Cave 1.",
    itemA: "Padmapani",
    itemB: "Vajrapani",
    hints: [
      "What object does each hold? That's their defining attribute and what their name means",
      "Think about mood/emotion: one is gentle and compassionate, the other is powerful and protective",
      "Both are Bodhisattvas, but they represent opposite qualities",
    ],
    answer:
      "Both appear as large painted figures flanking the shrine in Cave 1. PADMAPANI ('lotus-bearer') holds a blue lotus, has a gentle, contemplative expression, and embodies COMPASSION — he is a form of Avalokiteshvara. His posture is relaxed with a slight tribhanga (triple-flexion). VAJRAPANI ('thunderbolt-bearer') holds a vajra (thunderbolt), appears darker and more muscular, and embodies POWER and PROTECTION. He is the wrathful guardian aspect. Together they represent the duality of Buddhist virtue: gentle compassion vs. fierce protection.",
  },
  {
    id: "nagara-vs-dravida",
    question:
      "What are the key differences between northern (Nagara) and southern (Dravida) Indian temple styles? Give examples.",
    itemA: "Nagara style (Northern)",
    itemB: "Dravida style (Southern)",
    hints: [
      "Focus on the tower shape — one is curved and beehive-like, the other is stepped and pyramidal",
      "What sits on top of each tower?",
      "Think about the examples: Khajuraho, Devgarh, Mukteshvara vs. Mamallapuram, Shore Temple",
    ],
    answer:
      "NAGARA (North): The tower (shikhara) is curvilinear/beehive-shaped, tapering to a point capped by an amalaka (ribbed stone disc) and a pot-finial. The entire tower curves smoothly. Examples: Devgarh (5th c.), Mukteshvara Temple (10th c.), Khandariya Mahadeva at Khajuraho (11th c.). DRAVIDA (South): The tower (vimana/gopuram) is pyramidal with horizontal tiers, getting smaller toward the top, crowned by a barrel-vaulted capstone (shikhara). Examples: Five Rathas, Shore Temple, Descent of Ganges site (all Pallava, Mamallapuram). Key mnemonic: Nagara = curvy North; Dravida = tiered/stepped South.",
  },
  {
    id: "abhaya-vs-dharmachakra",
    question: "Distinguish between the Abhaya mudra and the Dharmachakra mudra.",
    itemA: "Abhaya mudra",
    itemB: "Dharmachakra mudra",
    hints: [
      "Both are Buddhist hand gestures, but one is about protection and one is about teaching",
      "Where is the hand/are the hands positioned? What direction does the palm face?",
      "Which one relates to the Buddha's first sermon?",
    ],
    answer:
      "ABHAYA MUDRA: One hand (usually right) raised to shoulder height with palm facing OUTWARD. Meaning: 'fear not' — a gesture of protection, blessing, and reassurance. Used across both Buddhist and Hindu iconography. DHARMACHAKRA MUDRA: Both hands held at CHEST level, thumbs and forefingers touching to form wheel shapes. Meaning: 'turning the wheel of Dharma' — represents the Buddha's FIRST SERMON at Sarnath. Specific to the moment of teaching. The dharmachakra mudra shows active teaching; the abhaya mudra shows protective blessing.",
  },
  {
    id: "elephanta-vs-mamallapuram",
    question: "How do Elephanta and Mamallapuram compare as Gupta/post-Gupta era sites?",
    itemA: "Elephanta",
    itemB: "Mamallapuram",
    hints: [
      "One is dedicated primarily to Shiva; the other has multiple deities and temple types",
      "Think about the medium — both are rock-cut, but one also has free-standing structures",
      "One is in western India (near Mumbai), the other is in Tamil Nadu on the coast",
    ],
    answer:
      "ELEPHANTA (late 6th c., near Mumbai): A CAVE temple complex dedicated primarily to SHIVA. Famous for the monumental three-headed Shiva (Maheshmurti/Trimurti), Shiva Ardhanari, and Shiva Nataraja. All rock-cut, no free-standing structures. Late Gupta/post-Gupta western India style. MAMALLAPURAM (7th–8th c., Tamil Nadu): A COASTAL Pallava site combining rock-cut reliefs (Descent of the Ganges), monolithic rock-cut rathas (Five Rathas), and a free-standing structural temple (Shore Temple). Involves both Shaiva and Vaishnava iconography. Represents the Dravida (southern) tradition. Key contrast: Elephanta = single-deity cave program; Mamallapuram = diverse program with multiple building types.",
  },
  {
    id: "linga-vs-murti",
    question: "What is the significance of the linga as an aniconic form, and how does it contrast with figural (murti) representations of Shiva?",
    itemA: "linga (aniconic)",
    itemB: "Figural Shiva (Three-headed, Ardhanari, Nataraja)",
    hints: [
      "Aniconic means non-representational — no human or animal form",
      "The linga is abstract; the figural forms each tell a specific story or embody a specific aspect",
      "Think about where you find each: garbhagriha vs. outer walls",
    ],
    answer:
      "The LINGA is an ANICONIC symbol — a smooth cylindrical form (often set in a yoni base) that represents Shiva's transcendent, cosmic, formless energy. It resides in the GARBHAGRIHA (inner sanctuary) as the primary cult object — the heart of Shaiva worship. FIGURAL forms (murti) of Shiva — the three-headed Trimurti (Elephanta), Ardhanari (half-male/half-female), Nataraja (Lord of Dance) — appear on OUTER WALLS and in antechambers. They narrate Shiva's aspects and powers through iconographic attributes (trishula, nandi, multiple arms). The contrast is abstract/universal (linga) vs. specific/narrative (murti).",
  },
  {
    id: "anuradhapura-vs-polonnaruwa",
    question:
      "Compare the Buddhist sites of Anuradhapura and Polonnaruwa (Gal Vihara) in Sri Lanka.",
    itemA: "Anuradhapura",
    itemB: "Gal Vihara, Polonnaruwa",
    hints: [
      "One is an ancient capital with massive stupas; the other is a later capital with rock-cut Buddhas",
      "Think about time period — one is much older",
      "What is the most distinctive feature of each?",
    ],
    answer:
      "ANURADHAPURA: Ancient capital of Sri Lanka (c. 4th century BCE – 10th century CE). Known for massive DAGOBAS (stupas) such as the Ruwanwelisaya, and the sacred Sri Maha Bodhi (fig tree). Represents early Theravada Buddhist architecture. POLONNARUWA / GAL VIHARA: Later capital (10th–13th century CE). Known for the 12th-century Gal Vihara, a rock-cut shrine with colossal Buddha figures carved from a single granite face: seated meditating Buddha (in dhyana mudra), standing Buddha, and a 15-meter reclining Buddha in PARINIRVANA. Polonnaruwa shows a mature, monumental rock-cut tradition in contrast to Anuradhapura's stupa-centered program.",
  },
];

export const CONNECTION_QUESTIONS: ConnectionQuestion[] = [
  {
    id: "cave1-figures",
    prompt: "Name the two major Bodhisattvas painted in Ajanta Cave 1 and explain their symbolic contrast.",
    answer:
      "PADMAPANI (lotus-bearer = compassion) and VAJRAPANI (thunderbolt-bearer = power/protection). They flank the shrine and represent the dual qualities of the Bodhisattva ideal: gentle mercy vs. fierce guardianship.",
    relatedTermIds: ["ajanta-cave-1", "padmapani", "vajrapani", "avalokiteshvara"],
  },
  {
    id: "shiva-forms",
    prompt: "What are three different forms/aspects of Shiva found in this term list, and where is each encountered?",
    answer:
      "1. LINGA (aniconic, in garbhagriha of any Shaiva temple). 2. THREE-HEADED SHIVA / TRIMURTI (Elephanta, colossal bust showing creator/preserver/destroyer). 3. SHIVA ARDHANARI (Elephanta, half-male/half-female). Also: Shiva's attributes include NANDI (bull vehicle), TRISHULA (trident), and KAILASH (his mountain home).",
    relatedTermIds: ["linga", "three-headed-shiva", "shiva-ardhanari", "nandi", "trishula", "kailash"],
  },
  {
    id: "temple-parts",
    prompt: "Trace the path a worshipper takes through a Hindu temple, naming the architectural spaces in order.",
    answer:
      "Entry through the TORANA (gateway arch) → cross the MOONSTONE threshold (in Sri Lankan tradition) → enter the MANDAPA (pillared hall/pavilion) → proceed to the GARBHAGRIHA (womb-chamber/inner sanctuary) where the primary deity (e.g., a LINGA) resides beneath the shikhara tower.",
    relatedTermIds: ["torana", "moonstone", "mandapa", "garbhagriha", "linga"],
  },
  {
    id: "bodhisattvas",
    prompt: "List all the Bodhisattvas/Buddhist figures in the term list and identify their defining attributes.",
    answer:
      "1. AVALOKITESHVARA — Bodhisattva of infinite compassion (Mahayana). 2. PADMAPANI — form of Avalokiteshvara, holds blue LOTUS. 3. VAJRAPANI — holds THUNDERBOLT (vajra), protector. 4. TARA — female Bodhisattva, compassion, consort of Avalokiteshvara. All appear in later (Mahayana) Buddhist art at sites like Ajanta.",
    relatedTermIds: ["avalokiteshvara", "padmapani", "vajrapani", "tara"],
  },
  {
    id: "pallava-sites",
    prompt: "What monuments at Mamallapuram form a coherent Pallava artistic program? What links them?",
    answer:
      "All three are 7th–8th century PALLAVA dynasty works in Tamil Nadu: 1. DESCENT OF THE GANGES — colossal rock-cut granite relief, natural rock cleft used as Ganges. 2. FIVE RATHAS — five monolithic rock-cut chariot-temples, each in a different regional style. 3. SHORE TEMPLE — earliest free-standing structural temple in South India, two sanctuaries (Shiva + Vishnu). They collectively demonstrate the Pallava transition from rock-cut to free-standing architecture and the DRAVIDA style.",
    relatedTermIds: ["descent-river-ganges", "five-rathas", "shore-temple", "mamallapuram", "ratha"],
  },
  {
    id: "parinirvana-connection",
    prompt: "What is parinirvana, and which site in the term list depicts it? What does the artistic form look like?",
    answer:
      "PARINIRVANA is the final nirvana — the death of the historical Buddha, his passing beyond rebirth. Depicted at GAL VIHARA, Polonnaruwa: a 15-meter reclining Buddha carved in granite, lying on his right side with eyes closed, entering final release. The reclining pose is the canonical artistic representation of parinirvana across Buddhist cultures.",
    relatedTermIds: ["parinirvana", "gal-vihara"],
  },
];
