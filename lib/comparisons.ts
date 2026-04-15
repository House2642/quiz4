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
    question: "How do Ajanta Cave 1 and Ajanta Cave 19 differ in function, architectural type, and content?",
    itemA: "Ajanta Cave 1",
    itemB: "Ajanta Cave 19",
    hints: [
      "One is a vihara (monastery/living space with shrine); the other is a chaitya (prayer hall). Which is which?",
      "Cave 1 is famous for its PAINTINGS. Cave 19 is famous for its SCULPTURAL FACADE and a specific Buddha pose.",
      "Cave 19 combines two traditions — what older and newer architectural elements does it blend?",
    ],
    answer:
      "CAVE 1 is a VIHARA (monastery hall): pillared porch leading to a womb chamber in the back (imitating Sanchi Temple 17). Famous for its WALL PAINTINGS — Bodhisattvas Padmapani and Vajrapani flank the central Buddha making the dharmachakra mudra. Pointed arch motifs are stylistic, not structural. CAVE 19 is a CHAITYA GRIHA (prayer hall): contains a stupa and a carved façade. Shows a transition to more developed sculptural decoration. It combines older stupa architecture with newer temple architecture. The standing Buddha grants a 'boon' (answering prayer); his hem slashes his shin, creating a border around his body, with snail-shell curls. KEY CONTRAST: Cave 1 → painting, monastery life, Bodhisattva imagery. Cave 19 → sculpture, communal worship, stupa, Buddha in boon-granting pose.",
  },
  {
    id: "gupta-vs-kushana",
    question: "How does the Gupta style (Bodhgaya Buddha of Year 64) differ from the Kushana style (Govindhnagar Buddha / Bamiyan)?",
    itemA: "Kushana Style (Govindhnagar / Bamiyan)",
    itemB: "Gupta Style (Bodhgaya Buddha of Year 64)",
    hints: [
      "Think about drapery — Kushana covers both shoulders; what does Gupta do?",
      "Think about the facial expression and body — Kushana is broad, Yaksha-like, cheerful. What shifts in Gupta?",
      "Bamiyan is a hybrid — what two styles overlap there?",
    ],
    answer:
      "KUSHANA STYLE (Govindhnagar Buddha, Bamiyan): Heavier drapery covering both shoulders. Broader shoulders, Yaksha-like physicality, cheerful expression. More assertive, physical presence. GUPTA STYLE (Bodhgaya Year 64): Moving away from Yaksha style — shoulders not as broad, face more introspective. Emphasis on curved lines, soft modeling, calm spiritual expression. Cheerfulness is gone. Stylistic differences in hair treatment. BAMIYAN is a HYBRID: Kushana-style drapery (heavier, both shoulders covered) overlapping with Gupta 'pan-South Asian' style. Would have had a wooden facade; face is missing. Painted caves show Central Asian influence in the clothing.",
  },
  {
    id: "cave1-paintings",
    question: "Compare Padmapani and Vajrapani as they appear in Ajanta Cave 1.",
    itemA: "Padmapani",
    itemB: "Vajrapani",
    hints: [
      "What does each one HOLD? Their names literally tell you.",
      "Think about mood and symbolic role — one is gentle compassion, the other is power and protection.",
      "Both flank the central Buddha — what does each represent as a pair?",
    ],
    answer:
      "Both are Bodhisattvas painted as large flanking figures beside the central Buddha shrine in Cave 1. PADMAPANI ('lotus-bearer'): holds a blue lotus, gentle and compassionate expression, embodies PURITY AND COMPASSION. He is a form of Avalokiteshvara. VAJRAPANI ('lightning bolt-bearer'): holds a vajra (thunderbolt), symbolizes STRENGTH AND POWER — a protective, forceful counterpart. TOGETHER they frame the Buddha as complementary qualities: compassionate mercy (Padmapani) and powerful protection (Vajrapani).",
  },
  {
    id: "abhaya-vs-dharmachakra",
    question: "Distinguish between the Abhaya mudra and the Dharmachakra mudra.",
    itemA: "Abhaya mudra",
    itemB: "Dharmachakra mudra",
    hints: [
      "Abhaya = freedom from FEAR. What does the hand do physically?",
      "Dharmachakra = preaching the LAW / turning the wheel. Where are both hands and what do they form?",
      "Which one is specifically associated with the Buddha's first sermon?",
    ],
    answer:
      "ABHAYA MUDRA: One hand raised, palm facing outward. Gesture of FREEDOM FROM FEAR — offering protection and reassurance. Used in both Buddhist and Hindu iconography. DHARMACHAKRA MUDRA: Both hands held at chest level, fingers forming a wheel shape. Gesture of PREACHING THE LAW — the turning of the wheel of Dharma, associated with the Buddha's first sermon. The Buddha in the garbhagriha of Ajanta Cave 1 makes the dharmachakra mudra.",
  },
  {
    id: "devgarh-vs-elephanta",
    question: "Compare Devgarh Temple and Elephanta as Gupta-era religious sites.",
    itemA: "Devgarh Temple",
    itemB: "Elephanta",
    hints: [
      "One is dedicated to Vishnu, the other to Shiva. Which is which?",
      "One is a structural (built) temple; the other is a rock-cut cave. Which is which?",
      "What is the key visual/symbolic program of each — what is the main story told?",
    ],
    answer:
      "DEVGARH (5th c.): STRUCTURAL Hindu temple, dedicated to VISHNU. On a raised platform with mini shrines surrounding the main shrine. Three 'blind windows' with narrative reliefs. Key image: Vishnu sleeping on the cosmic serpent on the primordial ocean — Brahma emerges from a lotus from Vishnu's navel, representing the moment before creation. Interior is deliberately bare (atman — the invisible divine presence within). ELEPHANTA (late 6th c.): ROCK-CUT cave temple, dedicated to SHIVA. Known for the Three-headed Shiva (creation, preservation, destruction) and Shiva Ardhanari (half male/female). Reliefs were damaged by Portuguese artillery fire. KEY CONTRAST: Devgarh = built structural temple, Vishnu, cosmic creation narrative. Elephanta = cave temple, Shiva, multiple aspects of Shiva in monumental relief.",
  },
  {
    id: "north-vs-south-temples",
    question: "Using examples from the term list, what distinguishes northern (Nagara) from southern (Dravida) Indian temple styles?",
    itemA: "Nagara / Northern Style",
    itemB: "Dravida / Southern Style",
    hints: [
      "Think about the tower shape — one is curvilinear/beehive, the other is stepped/pyramidal.",
      "Northern examples: Devgarh, Mukteshvara, Khandirya Mahadev. Southern examples: Five Rathas, Shore Temple, Mamallapuram.",
      "What is the geographic and dynastic context for each?",
    ],
    answer:
      "NAGARA (NORTH): Curvilinear shikhara tower tapering to a point. Examples: Devgarh Temple (5th c., Gupta), Mukteshvara Temple (10th c., Bhubaneswar), Khandirya Mahadev (11th c., Khajuraho). DRAVIDA (SOUTH): Pyramidal tower with stacked horizontal tiers, crowned by a barrel-vaulted top. Examples: Five Rathas (7th c., Mamallapuram, Pallava), Shore Temple (8th c., Mamallapuram), the site of the Descent of the Ganges relief. KEY MNEMONIC: Nagara = curvy North; Dravida = tiered South.",
  },
  {
    id: "linga-vs-figural-shiva",
    question: "What is the relationship between the linga (aniconic form) and figural representations of Shiva like the Three-headed Shiva and Ardhanari?",
    itemA: "Linga (aniconic)",
    itemB: "Three-headed Shiva / Shiva Ardhanari (figural)",
    hints: [
      "Aniconic = no human form. Where in the temple is the linga placed?",
      "Figural forms are on the OUTER walls — they tell specific stories. What do the Three-headed and Ardhanari forms each communicate?",
      "Think of the garbhagriha — what is the relationship between the linga inside and the carvings outside?",
    ],
    answer:
      "LINGA: Aniconic (non-figurative) form of Shiva — a smooth column placed in the GARBHAGRIHA (womb-chamber). Represents the inner mystery of divinity beyond expression; Shiva as transcendent, formless energy. FIGURAL SHIVA (Three-headed, Ardhanari): Appear on OUTER walls and in cave panels (Elephanta). THREE-HEADED SHIVA shows Shiva's three cosmic aspects: creation, preservation, destruction. SHIVA ARDHANARI shows Shiva as half-male / half-female — unity of masculine and feminine. The contrast is: linga = formless, universal, sacred interior; figural = narrative, specific, visible exterior.",
  },
];

export const CONNECTION_QUESTIONS: ConnectionQuestion[] = [
  {
    id: "ajanta-cave1-figures",
    prompt: "Name the two Bodhisattvas flanking the Buddha in Ajanta Cave 1 and explain what each holds and represents.",
    answer:
      "PADMAPANI holds a blue lotus — symbolizes purity and compassion. He is a form of Avalokiteshvara, the Bodhisattva of infinite compassion. VAJRAPANI holds a thunderbolt (vajra) — symbolizes strength and power. Together they frame the central Buddha (in dharmachakra mudra) as complementary qualities: gentle mercy and fierce protection.",
    relatedTermIds: ["ajanta-cave-1", "padmapani", "vajrapani", "avalokiteshvara", "dharmachakra-mudra"],
  },
  {
    id: "shiva-aspects",
    prompt: "List all the forms/aspects/attributes of Shiva that appear in the term list. Where is each found?",
    answer:
      "1. LINGA — aniconic form, found in garbhagriha of any Shaiva temple. 2. THREE-HEADED SHIVA (Trimurti) — at Elephanta; creation, preservation, destruction. 3. SHIVA ARDHANARI — at Elephanta; half-male/half-female, unity of principles. 4. KAILASH — his mountain home, symbolic in cosmology. 5. NANDI — his bull vehicle, stands facing the shrine. 6. TRISHULA — his trident, symbolizes power and three cosmic functions.",
    relatedTermIds: ["linga", "three-headed-shiva", "shiva-ardhanari", "kailash", "nandi", "trishula"],
  },
  {
    id: "mamallapuram-program",
    prompt: "What monuments at Mamallapuram form a coherent Pallava artistic program? What links them?",
    answer:
      "All are 7th–8th-century PALLAVA dynasty works in Tamil Nadu: 1. DESCENT OF THE GANGES — colossal rock-cut granite relief, 7th century; Shiva catches the Ganges in his hair. 2. FIVE RATHAS — monolithic rock-cut chariot-temples, 7th century; hypothesized as an architectural teaching tool with miniaturized, unconsecrated shrines representing different temple forms. 3. SHORE TEMPLE — 8th-century free-standing structural temple; one of the earliest stone temples in South India, with two sanctuaries. They collectively show the Pallava transition from rock-cut to structural architecture and exemplify the Dravida (southern) style.",
    relatedTermIds: ["descent-river-ganges", "five-rathas", "shore-temple", "mamallapuram", "ratha"],
  },
  {
    id: "temple-path",
    prompt: "Trace the path a worshipper takes through a Hindu temple using the architectural terms from the list.",
    answer:
      "Enter through the TORANA (gateway) → pass through the MANDAPA (pillared pavilion/hall) → enter the GARBHAGRIHA (womb-chamber), the windowless inner sanctuary representing the mystery of divinity beyond expression. In a Shaiva temple, the garbhagriha contains the LINGA (aniconic form of Shiva). NANDI, Shiva's bull, typically sits facing the shrine from outside.",
    relatedTermIds: ["torana", "mandapa", "garbhagriha", "linga", "nandi"],
  },
  {
    id: "sri-lanka-sites",
    prompt: "What do Anuradhapura, Golvihara (Polonnaruwa), Sigiriya, and the Moonstone have in common, and how do they differ?",
    answer:
      "All are Sri Lankan sites. ANURADHAPURA — ancient capital; Buddhist center with massive stupas and the sacred Bodhi tree sapling from Bodhgaya. GOLVIHARA, POLONNARUWA — rock-cut Buddha statues including a reclining Buddha in parinirvana. SIGIRIYA — a royal rock fortress with fresco paintings; NOT primarily a religious site. MOONSTONE — decorative semi-circular threshold stone at temple entrances, symbolizing the cycle of life. Anuradhapura and Golvihara are Buddhist religious sites; Sigiriya is royal/secular; the Moonstone is an architectural feature found across Sri Lankan Buddhist temples.",
    relatedTermIds: ["anuradhapura", "gal-vihara", "sigiriya", "moonstone", "parinirvana"],
  },
  {
    id: "buddhist-bodhisattvas",
    prompt: "List all the Buddhist deities/figures in the term list and identify their defining attributes.",
    answer:
      "1. AVALOKITESHVARA — Bodhisattva of infinite compassion. 2. PADMAPANI — form of Avalokiteshvara, holds a blue lotus; purity and compassion. 3. VAJRAPANI — holds a thunderbolt; strength and power. 4. TARA — female Buddhist deity; compassion, protection, and salvation. All four are Mahayana Buddhist figures. Padmapani and Vajrapani are specifically depicted in Ajanta Cave 1 as flanking Bodhisattvas.",
    relatedTermIds: ["avalokiteshvara", "padmapani", "vajrapani", "tara"],
  },
];
