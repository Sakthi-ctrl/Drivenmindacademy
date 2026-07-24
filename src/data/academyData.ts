import { ProgramItem, ComparisonFeature, WhyUsFeature, QuizQuestion } from '../types';

export const HERO_DATA = {
  headline: "Building Strong Concepts. Inspiring Confident Learners.",
  subheadline: "Expert online Chemistry coaching for CBSE, NEET, and JEE Main aspirants — built on clarity, not cramming.",
  primaryCTA: "Book a Free Demo Class",
  secondaryCTA: "Explore Our Programs",
  stats: [
    { label: "Max Batch Size", value: "6 Students", description: "Guaranteed personal attention" },
    { label: "Teaching Method", value: "Concept-First", description: "Zero mechanical cramming" },
    { label: "Target Exams", value: "CBSE • NEET • JEE", description: "Comprehensive coverage" },
    { label: "Class Format", value: "Live Interactive", description: "Real-time query resolution" }
  ]
};

export const ABOUT_US_DATA = {
  title: "About Us",
  leadParagraph: "At Driven Mind Academy, we believe true success in Chemistry comes from understanding — not memorizing.",
  missionStatement: "Our mission is simple: help students build a rock-solid conceptual foundation that carries them confidently through board exams and competitive entrance tests alike.",
  summaryText: "Through small batches, personalized mentorship, and a structured teaching methodology, we transform Chemistry from a subject to be feared into one to be mastered.",
  pillars: [
    {
      title: "Small Batches",
      desc: "Maximum 6 students per session to ensure every voice is heard and every doubt is cleared instantly."
    },
    {
      title: "Personalized Mentorship",
      desc: "Tailored guidance adapting to each student's learning speed and conceptual strengths."
    },
    {
      title: "Structured Methodology",
      desc: "First-principles approach connecting theory, visualization, and real exam application."
    }
  ]
};

export const WHY_CHOOSE_US_DATA: WhyUsFeature[] = [
  {
    id: "live-classes",
    title: "Online Live Classes",
    subtitle: "Active Learning in Real Time",
    description: "Interactive, real-time sessions designed for active learning — not passive watching.",
    icon: "Video",
    bullets: [
      "Two-way live interactive audio & whiteboard discussion",
      "Instant doubt resolution during the class",
      "HD recordings provided for quick revision before exams"
    ]
  },
  {
    id: "small-batch",
    title: "Small Batch Learning (Max 6 Students)",
    subtitle: "Individual Focus Guarantee",
    description: "Every student gets individual attention. No one gets left behind.",
    icon: "Users",
    bullets: [
      "Direct instructor eye contact and continuous monitoring",
      "Paced according to batch understanding",
      "Friendly, encouraging environment where asking questions is celebrated"
    ]
  },
  {
    id: "concept-teaching",
    title: "Concept-Based Teaching",
    subtitle: "Understanding From First Principles",
    description: "We build understanding from first principles, so formulas make sense — not just memorized.",
    icon: "Brain",
    bullets: [
      "Visualizing molecular structures and reaction mechanisms",
      "Deriving formulas logically rather than rote memorization",
      "Connecting physical, organic, and inorganic principles"
    ]
  },
  {
    id: "regular-tests",
    title: "Regular Tests & Performance Analysis",
    subtitle: "Continuous Assessment & Feedback",
    description: "Continuous assessment and detailed feedback keep students on track and exam-ready.",
    icon: "BarChart3",
    bullets: [
      "Weekly topic-wise diagnostic tests & chapter end evaluations",
      "Detailed error analysis pointing out specific conceptual gaps",
      "Parent feedback reports & regular growth check-ins"
    ]
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "cbse-excellence",
    title: "CBSE Board Excellence",
    badge: "Classes 11 & 12",
    targetAudience: "CBSE Class 11 & 12 Chemistry Aspirants",
    description: "Comprehensive Chemistry coverage aligned to the CBSE curriculum, built to strengthen fundamentals and maximize board exam scores.",
    keyHighlights: [
      "Complete NCERT line-by-line coverage with deep conceptual insights",
      "Step-wise numerical & derivation mastery for top board marks",
      "NCERT Exemplar and Previous 10 Years Board Papers solved live",
      "Answer writing formatting practice to avoid silly mark deductions"
    ],
    syllabusOverview: {
      physical: ["Solutions", "Electrochemistry", "Chemical Kinetics"],
      organic: ["Haloalkanes & Haloarenes", "Alcohols, Phenols & Ethers", "Aldehydes, Ketones & Carboxylic Acids", "Amines", "Biomolecules"],
      inorganic: ["d and f Block Elements", "Coordination Compounds"]
    },
    classSchedule: "3 Sessions / Week (1.5 hrs each) + Weekly Test",
    batchSize: "Strictly Max 6 Students"
  },
  {
    id: "neet-mastery",
    title: "NEET Chemistry Mastery",
    badge: "Medical Entrance Focus",
    targetAudience: "NEET UG Medical Aspirants (180/180 Goal)",
    description: "Focused preparation covering Physical, Organic, and Inorganic Chemistry — designed to build speed, accuracy, and conceptual depth for NEET.",
    keyHighlights: [
      "Comprehensive mastery across Physical, Organic & Inorganic Chemistry",
      "NCERT line-by-line extraction questions & NCERT diagram traps",
      "Time-saving reaction mechanism shortcuts and elimination tactics",
      "Targeted 180/180 mock tests with negative marking strategy drills"
    ],
    syllabusOverview: {
      physical: ["Mole Concept", "Thermodynamics", "Equilibrium", "Electrochemistry"],
      organic: ["GOC & Reaction Mechanisms", "Hydrocarbons", "Functional Groups", "Reaction Intermediates"],
      inorganic: ["Periodic Table & Chemical Bonding", "p-Block & d-Block", "Coordination Chemistry"]
    },
    classSchedule: "4 Sessions / Week (1.5 hrs each) + NEET Pattern Mock",
    batchSize: "Strictly Max 6 Students"
  },
  {
    id: "jee-main-program",
    title: "JEE Main Chemistry Program",
    badge: "Engineering Entrance Focus",
    targetAudience: "JEE Main Engineering Aspirants",
    description: "Problem-solving-driven coaching that sharpens analytical thinking and application skills for JEE Main success.",
    keyHighlights: [
      "Analytical & multi-concept numerical problem-solving techniques",
      "Deconstruction of previous 15 years JEE Main NTA questions",
      "Shortcuts for complex Physical Chemistry calculations & Organic synthesis",
      "Speed building drills to finish Chemistry section under 40 minutes"
    ],
    syllabusOverview: {
      physical: ["Atomic Structure", "Thermodynamics & Energetics", "Ionic & Chemical Equilibrium", "Kinetics"],
      organic: ["Stereochemistry", "Reaction Mechanisms (SN1, SN2, E1, E2)", "Named Reactions & Reagents"],
      inorganic: ["Chemical Bonding & Molecular Structure", "Coordination Chemistry", "Salt Analysis"]
    },
    classSchedule: "4 Sessions / Week (1.5 hrs each) + PYQ Drill Session",
    batchSize: "Strictly Max 6 Students"
  }
];

export const PHILOSOPHY_DATA = {
  title: "Our Teaching Philosophy",
  intro: "We don't teach to the test — we teach to understand. Every class is designed to:",
  points: [
    {
      step: "01",
      title: "Simplify Complex Topics",
      description: "Break down complex topics into simple, memorable concepts using intuitive physical analogies."
    },
    {
      step: "02",
      title: "Encourage Active Questioning",
      description: "Encourage active questioning and problem-solving, creating a curiosity-led classroom environment."
    },
    {
      step: "03",
      title: "Track Individual Progress",
      description: "Track individual progress through regular assessments, pinpointing exact areas for improvement."
    },
    {
      step: "04",
      title: "Build Exam Confidence",
      description: "Build the confidence students need to perform calmly and accurately under exam pressure."
    }
  ]
};

export const COMPARISON_DATA: ComparisonFeature[] = [
  {
    feature: "Batch Size",
    drivenMind: "Max 6 students",
    typicalCoaching: "30–100+ students",
    iconName: "Users"
  },
  {
    feature: "Teaching Style",
    drivenMind: "Concept-first",
    typicalCoaching: "Formula-first",
    iconName: "BookOpen"
  },
  {
    feature: "Attention",
    drivenMind: "Personalized",
    typicalCoaching: "Generic",
    iconName: "Sparkles"
  },
  {
    feature: "Progress Tracking",
    drivenMind: "Regular tests + analysis",
    typicalCoaching: "Occasional/None",
    iconName: "TrendingUp"
  }
];

export const CTA_DATA = {
  headline: "Ready to Build a Stronger Foundation in Chemistry?",
  body: "Join a small batch. Get personal attention. Learn concepts that stay with you for life.",
  buttonText: "Book Your Free Demo Class Today",
  footerTagline: "Driven Mind Academy — Building Strong Concepts. Inspiring Confident Learners."
};

export const SAMPLE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topic: "Organic Chemistry: SN1 vs SN2 Mechanisms",
    question: "Why does 3° Alkyl Halide prefer SN1 mechanism over SN2?",
    crammingApproach: "Formula/Rote: Just memorize '3° is always SN1, 1° is always SN2' without knowing carbocation stability.",
    conceptFirstApproach: "Concept First: 3° alkyl halide has steric hindrance blocking rear-attack for SN2. However, it forms a hyperconjugation & inductive-stabilized 3° carbocation intermediate, making SN1 extremely favorable!",
    explanation: "Understanding steric hindrance and electron-donating alkyl groups reveals *why* the reaction pathway shifts, so you never get confused when non-standard substrates appear in JEE/NEET."
  },
  {
    id: 2,
    topic: "Physical Chemistry: Le Chatelier's Principle",
    question: "How does adding inert gas at constant volume affect chemical equilibrium?",
    crammingApproach: "Formula/Rote: Memorize 'Inert gas shifts to side with more moles' (frequently mistaken during exams!).",
    conceptFirstApproach: "Concept First: At constant volume, inert gas increases total pressure, BUT partial pressures of reactant & product gases remain UNCHANGED. Hence, zero shift in equilibrium!",
    explanation: "Focusing on partial pressure definitions eliminates exam confusion instantly."
  }
];

export const TIME_SLOTS = [
  "Weekday Batch - Evening (5:00 PM - 6:30 PM)",
  "Weekday Batch - Evening (7:00 PM - 8:30 PM)",
  "Weekend Special Batch - Morning (10:00 AM - 11:30 AM)",
  "Weekend Special Batch - Afternoon (2:00 PM - 3:30 PM)"
];
