export interface Term {
  id: string;
  term: string;
  definition: string;
  category: "mudra" | "site" | "deity" | "architecture" | "object" | "concept";
  tags?: string[];
}

export const TERMS: Term[] = [
  {
    id: "abhaya-mudra",
    term: "Abhaya mudra",
    definition: "Gesture of freedom from fear.",
    category: "mudra",
    tags: ["gesture", "hand", "buddhist", "hindu"],
  },
  {
    id: "ajanta-cave-1",
    term: "Ajanta Cave 1",
    definition:
      "Buddhist cave with elaborate wall paintings and sculptures, including Bodhisattvas like Padmapani; exemplifies Gupta-era painting style. Pointed arch motif used stylistically — not structurally integral to a cave. Pillared porch with womb chamber in the back (imitates Sanchi Temple 17). Womb chamber contains Buddha making dharmachakra mudra (wheel turning/preaching). Paintings of Bodhisattvas flank the Buddha.",
    category: "site",
    tags: ["ajanta", "cave", "vihara", "painting", "gupta", "buddhist", "padmapani", "vajrapani"],
  },
  {
    id: "avalokiteshvara",
    term: "Avalokiteshvara",
    definition: "The Bodhisattva of infinite compassion.",
    category: "deity",
    tags: ["bodhisattva", "buddhist", "compassion", "mahayana"],
  },
  {
    id: "ajanta-cave-19",
    term: "Ajanta Cave 19",
    definition:
      "Buddhist chaitya (prayer hall) with a stupa and carved façade; shows transition to more developed sculptural decoration. Combination of older stupa architecture and newer temple architecture. Standing Buddha is granting a 'boon' (answering prayer). The Buddha's hem is slashing his shin which creates a border for his body. Snail shell curls.",
    category: "site",
    tags: ["ajanta", "cave", "chaitya", "sculpture", "gupta", "buddhist", "stupa"],
  },
  {
    id: "anuradhapura",
    term: "Anuradhapura",
    definition:
      "Ancient capital city of Sri Lanka; major Buddhist center known for stupas and monastic complexes. City said to have a sapling from the original Bodhi tree at Bodhgaya.",
    category: "site",
    tags: ["sri lanka", "buddhist", "stupa", "capital"],
  },
  {
    id: "bamiyan",
    term: "Bamiyan",
    definition:
      "Massive Buddhist figures carved into an Afghan mountainside from the Gupta period. Overlap of Kushana style (heavier drapery, both shoulders covered) with Gupta-era 'pan-South Asian' style. Would have had a massive wooden facade. Face is missing. Monks came here to pray and study. Caves are also painted in Central Asian style as seen by the clothing. Destroyed by the Taliban in the early 2000s.",
    category: "site",
    tags: ["afghanistan", "buddha", "gupta", "kushana", "sculpture", "cave"],
  },
  {
    id: "bodhgaya-buddha-64",
    term: "Bodhgaya Buddha of the Year 64",
    definition:
      "Early Gupta Buddha image with soft modeling, calm expression, and refined spiritual presence. Shoulders not as broad, face more introspective — moving away from Yaksha style. Emphasis on curved lines, cheerfulness is gone, stylistic differences in hair.",
    category: "object",
    tags: ["buddha", "gupta", "sculpture", "bodhgaya", "buddhist"],
  },
  {
    id: "dharmachakra-mudra",
    term: "dharmachakra mudra",
    definition: "Gesture of preaching the law (wheel-turning gesture).",
    category: "mudra",
    tags: ["gesture", "hand", "buddhist", "teaching", "sermon"],
  },
  {
    id: "descent-river-ganges",
    term: "Descent of River Ganges",
    definition:
      "Massive 7th-century rock-cut relief in granite at Mamallapuram depicting the Ganges' descent and divine intervention. The Ganges is a raging body of water being sent to Earth. Followers of Shiva pray hard for water during a drought. The river descends too fast and will destroy the earth. They pray for Shiva to prevent destruction. Shiva lets the river fall into his hair, taming it to flow like a stream. Water is represented by serpents.",
    category: "object",
    tags: ["mamallapuram", "pallava", "relief", "granite", "shiva", "ganges", "7th century"],
  },
  {
    id: "devgarh-temple",
    term: "Devgarh Temple",
    definition:
      "5th-century Gupta-era northern temple, Lalitpur district, UP Province. Early Gupta Hindu temple with narrative reliefs; key example of early structural temple architecture. On a raised platform with lots of repetition; mini shrines surround the main shrine. Doorway contains Yaksha/Yakshi guardians in contrapposto framing the entrance to an unembellished dark interior. Tower has collapsed and been poorly reconstructed. Dedicated to Vishnu with three 'blind windows' containing reliefs. Vishnu is shown sleeping on a cosmic serpent on the cosmic ocean (primordial waters). Brahma emerges from a lotus stalk from Vishnu's navel — the moment before the world comes into existence. Facade is very decorative; inside is empty — representing the invisible inner reality (atman: God's presence latently sleeping within us).",
    category: "site",
    tags: ["gupta", "vishnu", "nagara", "temple", "5th century", "north india"],
  },
  {
    id: "elephanta",
    term: "Elephanta",
    definition:
      "Late-6th-century Gupta-era rock-cut cave temple on an island near Mumbai; dedicated to Shiva, famous for large sculptural panels including the Three-headed Shiva. Island became a large temple complex. Reliefs were damaged by Portuguese artillery fire — the site was used for cannon practice.",
    category: "site",
    tags: ["shiva", "cave", "gupta", "mumbai", "trimurti", "6th century"],
  },
  {
    id: "five-rathas",
    term: "Five Rathas",
    definition:
      "Monolithic rock-cut temples at Mamallapuram (7th century) demonstrating different temple architectural forms. Made from local granite. Hypothesized to be an architectural teaching tool — all shrines are miniaturized and none are consecrated.",
    category: "site",
    tags: ["mamallapuram", "pallava", "rock-cut", "temple", "dravida", "7th century"],
  },
  {
    id: "ganga",
    term: "Ganga",
    definition: "The river Ganges.",
    category: "deity",
    tags: ["goddess", "river", "hindu"],
  },
  {
    id: "garbhagriha",
    term: "garbhagriha",
    definition:
      "Womb-chamber. A windowless room that represents the inner mystery of divinity that is beyond expression.",
    category: "architecture",
    tags: ["temple", "sanctuary", "hindu", "architecture"],
  },
  {
    id: "gal-vihara",
    term: "Golvihara, Polonnaruwa",
    definition:
      "Sri Lankan site with large rock-cut Buddha statues, including a reclining Buddha in parinirvana.",
    category: "site",
    tags: ["sri lanka", "buddhist", "rock-cut", "buddha", "parinirvana"],
  },
  {
    id: "govindhnagar-buddha",
    term: "Govindhnagar Buddha",
    definition:
      "Kushana-period Buddha from Mathura; shows regional style and early anthropomorphic Buddha form.",
    category: "object",
    tags: ["buddha", "mathura", "kushana", "sculpture", "early"],
  },
  {
    id: "kailash",
    term: "Kailash",
    definition:
      "The mountain which is Shiva's home. Sacred mountain believed to be Shiva's abode; symbolic in Hindu and Buddhist cosmology.",
    category: "concept",
    tags: ["shiva", "mountain", "sacred", "hindu"],
  },
  {
    id: "khandariya-mahadeva",
    term: "Khandirya Mahadev Temple",
    definition:
      "At the Khajuraho temple complex, 11th century, northern India. Temple dedicated to Shiva; known for complex architecture and erotic sculptures.",
    category: "site",
    tags: ["khajuraho", "nagara", "shiva", "north india", "11th century"],
  },
  {
    id: "linga",
    term: "linga",
    definition: "Aniconic form of Shiva.",
    category: "object",
    tags: ["shiva", "aniconic", "symbol", "hindu"],
  },
  {
    id: "mamallapuram",
    term: "Mamallapuram/Mahabalipuram",
    definition:
      "South Indian Pallava site (7th century) known for rock-cut architecture and large reliefs like the Ganges descent.",
    category: "site",
    tags: ["pallava", "tamil nadu", "south india", "dravida", "7th century"],
  },
  {
    id: "mandapa",
    term: "mandapa",
    definition: "Temple pavilion.",
    category: "architecture",
    tags: ["temple", "hall", "architecture", "hindu"],
  },
  {
    id: "moonstone",
    term: "Moonstone",
    definition:
      "Decorated semi-circular stone at the entrances of Sri Lankan temples, symbolizing the cycle of life.",
    category: "object",
    tags: ["sri lanka", "buddhist", "threshold", "decorative"],
  },
  {
    id: "mukteshvara-temple",
    term: "Mukteshvara Temple",
    definition:
      "In Bhubaneswar, Orissa, 10th century, northern India. Known for ornate carvings and a refined torana (gateway).",
    category: "site",
    tags: ["bhubaneswar", "odisha", "nagara", "shiva", "north india", "10th century"],
  },
  {
    id: "nagarjunakonda-buddha",
    term: "Nagarjunakonda Buddha",
    definition:
      "Southern-style Buddha with elongated form and regional stylistic features.",
    category: "object",
    tags: ["buddha", "south india", "sculpture"],
  },
  {
    id: "nandi",
    term: "Nandi",
    definition: "The bull vehicle of Shiva.",
    category: "deity",
    tags: ["shiva", "bull", "vahana", "hindu"],
  },
  {
    id: "padmapani",
    term: "Padmapani",
    definition:
      "The one who holds the lotus. Form of Avalokiteshvara; Bodhisattva holding a lotus, symbolizing purity and compassion.",
    category: "deity",
    tags: ["bodhisattva", "avalokiteshvara", "ajanta", "cave 1", "painting", "lotus"],
  },
  {
    id: "parinirvana",
    term: "parinirvana",
    definition: "Nirvana after death. Release from the cycle of rebirth.",
    category: "concept",
    tags: ["buddhist", "death", "nirvana", "reclining buddha"],
  },
  {
    id: "ratha",
    term: "ratha",
    definition: "Chariot. Also a temple form or shrine.",
    category: "architecture",
    tags: ["chariot", "temple", "pallava", "south india"],
  },
  {
    id: "shore-temple",
    term: "Shore temple",
    definition:
      "8th-century temple with two sanctuaries, southern India. Temple at Mamallapuram; one of the earliest stone temples in South India.",
    category: "site",
    tags: ["mamallapuram", "pallava", "dravida", "shiva", "vishnu", "south india", "8th century"],
  },
  {
    id: "shiva-ardhanari",
    term: "Shiva Ardhanari",
    definition:
      "Shiva in the form of half-male and half-female, symbolizing the unity of masculine and feminine principles.",
    category: "deity",
    tags: ["shiva", "parvati", "composite", "elephanta", "hindu"],
  },
  {
    id: "sigiriya",
    term: "Sigirya",
    definition:
      "Sri Lankan rock fortress with fresco paintings and royal architecture.",
    category: "site",
    tags: ["sri lanka", "fresco", "palace", "rock"],
  },
  {
    id: "tara",
    term: "Tara",
    definition:
      "Female Buddhist deity; associated with compassion, protection, and salvation.",
    category: "deity",
    tags: ["bodhisattva", "female", "buddhist", "compassion"],
  },
  {
    id: "three-headed-shiva",
    term: "Three-headed Shiva",
    definition:
      "Icon from Elephanta showing Shiva's three aspects: creation, preservation, and destruction.",
    category: "deity",
    tags: ["shiva", "elephanta", "trimurti", "three-headed"],
  },
  {
    id: "torana",
    term: "torana",
    definition: "Gateway.",
    category: "architecture",
    tags: ["gateway", "arch", "buddhist", "hindu"],
  },
  {
    id: "trishula",
    term: "trishula",
    definition:
      "Trident. Shiva's trident, symbolizing his power and three cosmic functions.",
    category: "object",
    tags: ["shiva", "weapon", "trident", "symbol"],
  },
  {
    id: "vajrapani",
    term: "Vajrapani",
    definition:
      "One who holds the lightning bolt. Symbolizes strength and power.",
    category: "deity",
    tags: ["bodhisattva", "ajanta", "cave 1", "painting", "thunderbolt", "protector"],
  },
];

export const CATEGORIES = [
  { id: "mudra", label: "Mudras (Gestures)" },
  { id: "site", label: "Sites & Caves" },
  { id: "deity", label: "Deities & Figures" },
  { id: "architecture", label: "Architecture Terms" },
  { id: "object", label: "Objects & Artworks" },
  { id: "concept", label: "Concepts" },
] as const;
