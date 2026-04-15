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
    definition:
      "Gesture of freedom from fear; the hand is raised with the palm facing outward, offering protection and reassurance.",
    category: "mudra",
    tags: ["gesture", "hand", "buddhist", "hindu"],
  },
  {
    id: "ajanta-cave-1",
    term: "Ajanta Cave 1",
    definition:
      "A vihara (monastery hall) at Ajanta, Maharashtra; Gupta period, 5th–6th century CE. Famous for its magnificent wall paintings including the iconic Padmapani and Vajrapani Bodhisattvas.",
    category: "site",
    tags: ["ajanta", "cave", "vihara", "painting", "gupta", "buddhist"],
  },
  {
    id: "avalokiteshvara",
    term: "Avalokiteshvara",
    definition:
      "The Bodhisattva of infinite compassion; one of the most revered Bodhisattvas in Mahayana Buddhism. Also known as Padmapani when depicted holding a lotus.",
    category: "deity",
    tags: ["bodhisattva", "buddhist", "compassion", "mahayana"],
  },
  {
    id: "ajanta-cave-19",
    term: "Ajanta Cave 19",
    definition:
      "A chaitya griha (prayer/worship hall) at Ajanta; Gupta period, 5th–6th century CE. Distinguished by its elaborate sculptural facade, a prominent horseshoe-shaped window (chandrasala), and an interior stupa. Unlike Cave 1, it is a place of worship rather than monastic living.",
    category: "site",
    tags: ["ajanta", "cave", "chaitya", "sculpture", "gupta", "buddhist", "stupa"],
  },
  {
    id: "anuradhapura",
    term: "Anuradhapura",
    definition:
      "Ancient capital of Sri Lanka and major Buddhist pilgrimage site; home to some of the world's oldest surviving stupas (dagobas) and sacred Sri Maha Bodhi tree.",
    category: "site",
    tags: ["sri lanka", "buddhist", "stupa", "capital"],
  },
  {
    id: "bamiyan",
    term: "Bamiyan",
    definition:
      "Valley in Afghanistan containing giant standing Buddha statues carved into cliffs, representing Gandharan Buddhist art. The statues (6th century CE) were destroyed by the Taliban in 2001.",
    category: "site",
    tags: ["afghanistan", "buddha", "gandhara", "sculpture"],
  },
  {
    id: "bodhgaya-buddha-64",
    term: "Bodhgaya Buddha of the Year 64",
    definition:
      "An important early Buddha image from Bodhgaya (the site of the Buddha's enlightenment), dated to the year 64 of an era; significant for the development of early Buddhist iconography.",
    category: "object",
    tags: ["buddha", "early", "sculpture", "bodhgaya", "buddhist"],
  },
  {
    id: "dharmachakra-mudra",
    term: "dharmachakra mudra",
    definition:
      "Gesture of preaching the law; both hands held at chest level with fingers forming a wheel (chakra) shape, symbolizing the Buddha's first sermon and the setting in motion of the wheel of Dharma.",
    category: "mudra",
    tags: ["gesture", "hand", "buddhist", "teaching", "sermon"],
  },
  {
    id: "descent-river-ganges",
    term: "Descent of River Ganges",
    definition:
      "A colossal rock-cut relief carved in granite at Mamallapuram, Tamil Nadu; 7th century CE, Pallava dynasty. Depicts the descent of the sacred Ganges from heaven, with hundreds of figures of gods, humans, and animals crowding around a natural rock cleft.",
    category: "object",
    tags: ["mamallapuram", "pallava", "relief", "granite", "shiva", "ganges"],
  },
  {
    id: "devgarh-temple",
    term: "Devgarh Temple",
    definition:
      "5th century Gupta-era Vishnu temple in Lalitpur district, Uttar Pradesh; one of the earliest surviving examples of the northern (Nagara) shikhara tower style. Celebrated for its three relief panels of Vishnu on the exterior walls.",
    category: "site",
    tags: ["gupta", "vishnu", "nagara", "temple", "early", "north india"],
  },
  {
    id: "elephanta",
    term: "Elephanta",
    definition:
      "A cave temple complex on an island near Mumbai; late 6th century, Gupta/post-Gupta era. Dedicated primarily to Shiva, it is famous for the monumental three-headed Shiva (Trimurti/Maheshmurti) bust.",
    category: "site",
    tags: ["shiva", "cave", "gupta", "mumbai", "trimurti"],
  },
  {
    id: "five-rathas",
    term: "Five Rathas",
    definition:
      "Five monolithic rock-cut temples at Mamallapuram, Tamil Nadu; 7th century CE, Pallava dynasty. Each ratha is carved entirely from a single boulder and represents a different regional temple typology (Dravida, Nagara, Vesara styles).",
    category: "site",
    tags: ["mamallapuram", "pallava", "rock-cut", "temple", "dravida"],
  },
  {
    id: "ganga",
    term: "Ganga",
    definition:
      "The sacred river Ganges personified as a goddess; depicted standing on her vehicle, the makara (sea creature). She appears on temple doorways and in the Descent of the Ganges relief.",
    category: "deity",
    tags: ["goddess", "river", "hindu", "relief"],
  },
  {
    id: "garbhagriha",
    term: "garbhagriha",
    definition:
      "The 'womb-chamber'; the innermost, dimly lit sanctuary of a Hindu temple where the main deity's image is enshrined. The garbhagriha is the sacred heart of the temple.",
    category: "architecture",
    tags: ["temple", "sanctuary", "hindu", "architecture"],
  },
  {
    id: "gal-vihara",
    term: "Golvihara, Polonnaruwa",
    definition:
      "Rock-cut Buddhist shrine at Polonnaruwa, Sri Lanka; 12th century CE, reign of King Parakramabahu I. Features four colossal Buddha figures carved from a single granite face: a seated meditating Buddha, a smaller seated Buddha in a shrine, a standing Buddha, and a reclining Buddha in parinirvana.",
    category: "site",
    tags: ["sri lanka", "buddhist", "rock-cut", "buddha", "parinirvana"],
  },
  {
    id: "govindhnagar-buddha",
    term: "Govindhnagar Buddha",
    definition:
      "An important early Buddha image found at Govindhnagar (near Mathura), notable for its stylistic features bridging the early Kushan-period Mathura school and later Gupta refinements.",
    category: "object",
    tags: ["buddha", "mathura", "kushan", "sculpture", "early"],
  },
  {
    id: "kailash",
    term: "Kailash",
    definition:
      "The sacred mountain (Mount Kailash, Tibet) believed to be the cosmic home and meditation seat of Shiva. Also the name of the great rock-cut Kailasanatha temple at Ellora (8th century), which replicates the mountain.",
    category: "concept",
    tags: ["shiva", "mountain", "sacred", "hindu"],
  },
  {
    id: "khandariya-mahadeva",
    term: "Khandirya Mahadev Temple",
    definition:
      "Located in the Khajuraho temple complex, Madhya Pradesh; c. 1025–1050 CE, Chandela dynasty. The tallest and most ornate temple at Khajuraho, dedicated to Shiva. Prime example of the Nagara (northern) style with a soaring curvilinear shikhara and tiers of erotic and devotional sculpture.",
    category: "site",
    tags: ["khajuraho", "chandela", "nagara", "shiva", "north india", "shikhara"],
  },
  {
    id: "linga",
    term: "linga",
    definition:
      "The aniconic (non-figurative) form of Shiva; a smooth cylindrical pillar representing his transcendent, cosmic energy. Usually set in a yoni (base representing the goddess). The most common cult object in Shaiva temples.",
    category: "object",
    tags: ["shiva", "aniconic", "symbol", "hindu"],
  },
  {
    id: "mamallapuram",
    term: "Mamallapuram/Mahabalipuram",
    definition:
      "Coastal port town in Tamil Nadu; 7th–8th century CE, Pallava dynasty. Site of major rock-cut and structural monuments including the Descent of the Ganges relief, the Five Rathas, and the Shore Temple.",
    category: "site",
    tags: ["pallava", "tamil nadu", "south india", "dravida"],
  },
  {
    id: "mandapa",
    term: "mandapa",
    definition:
      "A columned hall or pavilion in a Hindu temple complex; serves as an entrance hall or gathering space in front of the garbhagriha (inner sanctuary). Can be open or closed.",
    category: "architecture",
    tags: ["temple", "hall", "architecture", "hindu"],
  },
  {
    id: "moonstone",
    term: "Moonstone",
    definition:
      "A carved semicircular stone threshold placed at the entrance to Buddhist shrines and temples in Sri Lanka; typically depicts concentric bands of flames, geese (hamsa), vines, elephants, lions, horses, and a lotus at the center—symbolizing the journey from samsara to nirvana.",
    category: "object",
    tags: ["sri lanka", "buddhist", "threshold", "decorative"],
  },
  {
    id: "mukteshvara-temple",
    term: "Mukteshvara Temple",
    definition:
      "10th century Shaiva temple in Bhubaneswar, Odisha; often called the 'gem of Orissan architecture.' Features a mature Nagara shikhara with intricate carvings, and a distinctive torana (gateway arch) entrance.",
    category: "site",
    tags: ["bhubaneswar", "orissa", "odisha", "nagara", "shiva", "north india"],
  },
  {
    id: "nagarjunakonda-buddha",
    term: "Nagarjunakonda Buddha",
    definition:
      "Buddha images from the ancient Buddhist site of Nagarjunakonda, Andhra Pradesh; 3rd–4th century CE, Ikshvaku dynasty. Represents an important regional school of Buddhist sculpture distinct from Mathura and Gandhara.",
    category: "object",
    tags: ["buddha", "andhra pradesh", "sculpture", "early"],
  },
  {
    id: "nandi",
    term: "Nandi",
    definition:
      "The sacred white bull and divine vehicle (vahana) of Shiva; also the gatekeeper of Mount Kailash. A Nandi sculpture typically sits facing the main linga shrine in Shaiva temples.",
    category: "deity",
    tags: ["shiva", "bull", "vahana", "hindu"],
  },
  {
    id: "padmapani",
    term: "Padmapani",
    definition:
      "Literally 'the one who holds the lotus'; a manifestation of Avalokiteshvara (Bodhisattva of compassion). Famous as the subject of one of Ajanta Cave 1's most celebrated wall paintings—a serene, princely figure holding a blue lotus.",
    category: "deity",
    tags: ["bodhisattva", "avalokiteshvara", "ajanta", "cave 1", "painting", "lotus"],
  },
  {
    id: "parinirvana",
    term: "parinirvana",
    definition:
      "The final, complete nirvana; specifically the death and passing of the historical Buddha Shakyamuni (or a great teacher) into a state beyond rebirth. Represented in art by the reclining Buddha figure.",
    category: "concept",
    tags: ["buddhist", "death", "nirvana", "reclining buddha"],
  },
  {
    id: "ratha",
    term: "ratha",
    definition:
      "Literally 'chariot'; in temple architecture, refers to a processional chariot and also to a type of South Indian (Dravida-style) free-standing temple—most famously the Five Rathas at Mamallapuram.",
    category: "architecture",
    tags: ["chariot", "temple", "pallava", "south india"],
  },
  {
    id: "shore-temple",
    term: "Shore temple",
    definition:
      "8th century structural temple at Mamallapuram, Tamil Nadu; Pallava dynasty. Stands on the shore of the Bay of Bengal with two sanctuaries—one dedicated to Shiva (with linga) and one to Vishnu (reclining). One of the earliest free-standing stone temples in South India.",
    category: "site",
    tags: ["mamallapuram", "pallava", "dravida", "shiva", "vishnu", "south india"],
  },
  {
    id: "shiva-ardhanari",
    term: "Shiva Ardhanari",
    definition:
      "Shiva in the composite form of half-male (right side) and half-female (left side, = Parvati); represents the union of masculine and feminine principles, the inseparability of Shiva and Shakti. Found notably at Elephanta.",
    category: "deity",
    tags: ["shiva", "parvati", "composite", "elephanta", "hindu"],
  },
  {
    id: "sigiriya",
    term: "Sigirya",
    definition:
      "The 'Lion Rock' fortress-palace in Sri Lanka; 5th century CE, built by King Kashyapa. Remarkable for its frescoes of heavenly maidens (apsaras) painted on the rock face, and its sophisticated water gardens.",
    category: "site",
    tags: ["sri lanka", "fresco", "palace", "rock", "apsara"],
  },
  {
    id: "tara",
    term: "Tara",
    definition:
      "A female Bodhisattva revered in Mahayana and Vajrayana Buddhism; considered the female counterpart or emanation of Avalokiteshvara. Embodies compassion and protection; often shown seated with one leg extended.",
    category: "deity",
    tags: ["bodhisattva", "female", "buddhist", "compassion"],
  },
  {
    id: "three-headed-shiva",
    term: "Three-headed Shiva",
    definition:
      "The Maheshmurti (or Trimurti) at Elephanta; a colossal three-headed bust of Shiva, c. 6th century CE. The three faces represent Shiva's aspects: serene preserver (center), fierce destroyer (left/Bhairava), and feminine creator (right/Uma).",
    category: "deity",
    tags: ["shiva", "elephanta", "trimurti", "three-headed", "bust"],
  },
  {
    id: "torana",
    term: "torana",
    definition:
      "A gateway or ceremonial arch; in Buddhist architecture, the carved gateways at stupas (like Sanchi) depicting Jataka tales. In Hindu architecture, an arched gateway before a shrine entrance (notably at Mukteshvara Temple).",
    category: "architecture",
    tags: ["gateway", "arch", "buddhist", "stupa", "sanchi"],
  },
  {
    id: "trishula",
    term: "trishula",
    definition:
      "The trident; Shiva's primary weapon and symbol. The three prongs represent creation, preservation, and destruction (or the three gunas, or past-present-future). Held by Shiva and used to slay demons.",
    category: "object",
    tags: ["shiva", "weapon", "trident", "symbol"],
  },
  {
    id: "vajrapani",
    term: "Vajrapani",
    definition:
      "Literally 'one who holds the thunderbolt (vajra)'; a powerful Bodhisattva and protector of the Buddha. Depicted as a dark, muscular figure in Ajanta Cave 1's paintings, contrasting with the gentle Padmapani.",
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
