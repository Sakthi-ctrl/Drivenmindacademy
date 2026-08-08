import { ProgramItem, ComparisonFeature, WhyUsFeature, QuizQuestion } from '../types';

export const HERO_DATA = {
  headline: "Building Strong Concepts. Inspiring Confident Learners.",
  subheadline: "Expert online Chemistry coaching for CBSE, NEET, and JEE Main aspirants — built on clarity, not cramming.",
  motto: "Learning with Clarity, Growing with Confidence.",
  mottoSecondary: "Learn with Clarity. Practice with Discipline. Achieve with Confidence.",
  chemistryQuote: "Chemistry is not a mystery—it becomes simple when taught the right way.",
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
  leadParagraph: "At Driven Mind Academy, we believe that meaningful learning begins with understanding.",
  missionStatement: "Our mission is simple: help students build a rock-solid conceptual foundation that carries them confidently through board exams and competitive entrance tests alike.",
  summaryText: "Through small batches, personalized mentorship, and a structured teaching methodology, we transform Chemistry from a subject to be feared into one to be mastered.",
  
  founderStory: {
    title: "How It Started",
    subtitle: "Over 12 Years of Dedicated Teaching Experience",
    quote: "Learning should be a journey to enjoy, not a race to survive.",
    content: [
      "With over 12 years of teaching experience, the vision behind Driven Mind Academy was shaped by a simple yet powerful belief: learning should be a journey to enjoy, not a race to survive.",
      "Education is often reduced to ranks, marks, and competition, where only toppers are celebrated. But true success lies in progress. Every concept understood, every doubt clarified, every small improvement in confidence deserves to be cherished.",
      "Over the years, it became clear that many students preparing for competitive examinations feel overwhelmed, exhausted, and uncertain — not because they lack potential, but because they lack the right guidance and support. Academic success is not built on pressure alone; it grows through encouragement, understanding, and consistent mentoring.",
      "At Driven Mind Academy, every student is encouraged to discover their strengths, recognize areas for improvement, and develop the confidence to overcome challenges. When students truly understand what they learn and become aware of how they learn, they gain the ability to excel in any examination.",
      "The academy was founded to provide more than just coaching. It is a place where students receive personal attention, hands-on guidance, and mentorship from a teacher who understands not only the subject but also the emotions, struggles, and aspirations of every learner.",
      "What began as the desire to help a few students has steadily grown into a nurturing learning community — rooted in trust, compassion, and the belief that every student deserves the opportunity to learn, grow, and succeed at their own pace."
    ]
  },

  aboutAcademy: {
    title: "About the Academy",
    content: [
      "At Driven Mind Academy, we believe that meaningful learning begins with understanding. Every student learns at a different pace, and our goal is to create an environment where students feel comfortable asking questions, exploring concepts, and building confidence step by step.",
      "Our teaching focuses on conceptual clarity rather than memorization. We encourage students to understand the 'why' behind every concept so that they can apply their knowledge effectively in examinations and beyond. A strong foundation not only improves academic performance but also develops logical thinking and problem-solving skills.",
      "We maintain small batch sizes to ensure that every student receives individual attention. Regular interaction allows us to identify learning gaps, clarify doubts, and provide timely guidance. Through continuous practice, periodic assessments, and constructive feedback, students are encouraged to improve steadily and develop confidence in their abilities.",
      "At Driven Mind Academy, discipline, consistency, and sincerity are valued as much as academic achievement. We believe that progress comes from regular effort, not shortcuts. Our role is to guide, support, and motivate students throughout their learning journey while encouraging them to take responsibility for their own growth.",
      "Chemistry is taught with a strong emphasis on fundamentals, making even challenging topics easier to understand. Whether preparing for CBSE Board examinations, NEET, or JEE, students are guided through a structured learning process that balances theory, application, and examination practice. The objective is not only to complete the syllabus but to ensure that students truly understand what they learn.",
      "We also recognize the importance of working together with parents. Regular communication and honest feedback help create a supportive environment where students can stay focused and motivated.",
      "Driven Mind Academy is committed to providing quality education with integrity, patience, and dedication. We do not promise instant success or unrealistic results. Instead, we promise sincere teaching, personal attention, and a learning environment that encourages students to improve with every class."
    ]
  },

  pillars: [
    {
      title: "Small Batches",
      desc: "Maximum 6 students per batch to ensure every single doubt gets addressed live in real time."
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

export interface FeeStructureItem {
  id: string;
  course: string;
  format: 'Group' | 'One-to-One';
  schedule: string;
  details: string;
  batchSize: string;
}

export const FEE_STRUCTURE_DATA: FeeStructureItem[] = [
  {
    id: "foundation-group",
    course: "Foundation (NCERT)",
    format: "Group",
    schedule: "3 Classes / Week",
    details: "1 Hour Each Session",
    batchSize: "Max. 6 Students"
  },
  {
    id: "class11-group",
    course: "Class 11 Chemistry",
    format: "Group",
    schedule: "3 Classes / Week",
    details: "1 Hour Each Session",
    batchSize: "Max. 6 Students"
  },
  {
    id: "class12-group",
    course: "Class 12 Chemistry (Boards)",
    format: "Group",
    schedule: "3 Classes / Week",
    details: "1 Hour Each Session",
    batchSize: "Max. 6 Students"
  },
  {
    id: "foundation-1on1",
    course: "Foundation",
    format: "One-to-One",
    schedule: "2 Classes / Week",
    details: "1 Hour Each Session",
    batchSize: "Personalized (1-on-1)"
  },
  {
    id: "class11-1on1",
    course: "Class 11 Chemistry",
    format: "One-to-One",
    schedule: "2 Classes / Week",
    details: "1 Hour Each Session",
    batchSize: "Personalized (1-on-1)"
  }
];

export const FEE_STRUCTURE_NOTES = [
  "Maximum 6 students per group batch. Small batch size ensures individual attention.",
  "One-to-one classes are personalized and tailored to the student's learning pace.",
  "Monthly fees are payable in advance.",
  "Hourly rates are applicable only for trial or extra individual classes."
];

export interface TermConditionItem {
  number: number;
  title: string;
  summary: string;
  description: string;
  tag?: string;
}

export const TERMS_AND_CONDITIONS_DATA: TermConditionItem[] = [
  {
    number: 1,
    title: "Minimum Enrolment (6 Months)",
    summary: "Strong foundations take consistency and regular practice.",
    description: "Building a strong foundation in Chemistry takes time, consistency, and regular practice. Students are therefore encouraged to continue the tuition for a minimum of 6 months, allowing sufficient time to strengthen concepts, develop problem-solving skills, and observe meaningful academic improvement.",
    tag: "Encouraged 6 Months"
  },
  {
    number: 2,
    title: "Monthly Fee Payment",
    summary: "Due on or before the 5th of every month.",
    description: "To ensure the smooth planning and uninterrupted conduct of classes, monthly tuition fees are to be paid on or before the 5th of every month. Timely payment helps us maintain batch schedules and provide consistent academic support.",
    tag: "Due by 5th"
  },
  {
    number: 3,
    title: "Fee Policy",
    summary: "Non-refundable and non-transferable.",
    description: "The monthly fee secures a student's place in a limited-size batch and supports the planning of classes and learning resources. Therefore, fees once paid are non-refundable and non-transferable.",
    tag: "Non-refundable"
  },
  {
    number: 4,
    title: "Continuity of Learning",
    summary: "1 month prior notice requested for discontinuation.",
    description: "To help students benefit fully from the structured learning plan, we encourage them to continue the course for at least 6 months. If, for any reason, a student wishes to discontinue after this period, we kindly request one month's prior notice so that the batch schedule and learning plan can be managed smoothly.",
    tag: "1 Month Notice"
  },
  {
    number: 5,
    title: "Regular Attendance",
    summary: "Consistent attendance avoids critical learning gaps.",
    description: "Each class is carefully planned and builds upon concepts covered in previous sessions. Regular attendance ensures continuity in learning, better understanding of concepts, and sustained academic progress. Frequent absences may create learning gaps that are difficult to bridge later.",
    tag: "Mandatory Regularity"
  },
  {
    number: 6,
    title: "Practice Tests & Assignments",
    summary: "Essential homework & assessments for exam confidence.",
    description: "Consistent practice is essential for mastering Chemistry. Assignments, worksheets, and practice tests are designed not only to assess performance but also to reinforce learning, identify areas that need improvement, and build confidence for school examinations and competitive exams. Students are expected to complete them sincerely and within the given time.",
    tag: "Sincere Effort"
  }
];

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
    description: "Every student gets individual attention. Small batch sizes ensure doubt clarification and personalized feedback.",
    icon: "Users",
    bullets: [
      "Strictly capped at max 6 students per group batch",
      "Direct instructor attention and continuous monitoring",
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
      "Understanding the 'why' behind every concept",
      "Connecting physical, organic, and inorganic principles"
    ]
  },
  {
    id: "regular-tests",
    title: "Regular Tests & Assessments",
    subtitle: "Continuous Assessment & Feedback",
    description: "Class notes, curated practice questions, and regular assessments keep students exam-ready.",
    icon: "BarChart3",
    bullets: [
      "Structured NCERT-based approach for Boards, NEET, & JEE",
      "Detailed progress monitoring and effective revision strategies",
      "Regular communication and honest feedback for parents"
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
    classSchedule: "3 Classes / Week (1 Hour Each)",
    batchSize: "Group (Max 6) or One-to-One"
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
    classSchedule: "3 Classes / Week (1 Hour Each)",
    batchSize: "Group (Max 6) or One-to-One"
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
      "Speed building drills to finish Chemistry section with high accuracy"
    ],
    syllabusOverview: {
      physical: ["Atomic Structure", "Thermodynamics & Energetics", "Ionic & Chemical Equilibrium", "Kinetics"],
      organic: ["Stereochemistry", "Reaction Mechanisms (SN1, SN2, E1, E2)", "Named Reactions & Reagents"],
      inorganic: ["Chemical Bonding & Molecular Structure", "Coordination Chemistry", "Salt Analysis"]
    },
    classSchedule: "3 Classes / Week (1 Hour Each)",
    batchSize: "Group (Max 6) or One-to-One"
  }
];

export const PHILOSOPHY_DATA = {
  title: "Our Teaching Philosophy",
  intro: "Learn with Clarity. Practice with Discipline. Achieve with Confidence.",
  points: [
    {
      step: "01",
      title: "Conceptual Clarity",
      description: "Understand the 'why' behind every concept so you can apply knowledge in examinations and beyond."
    },
    {
      step: "02",
      title: "Individual Attention",
      description: "Small batch size of max 6 students ensures every doubt is addressed live in real time."
    },
    {
      step: "03",
      title: "Discipline & Consistency",
      description: "Progress comes from regular effort, continuous practice, and honest feedback — no shortcuts."
    },
    {
      step: "04",
      title: "Parent-Teacher Synergies",
      description: "Regular communication and honest feedback create a supportive environment for peak focus."
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
    drivenMind: "Concept-first (No memorization)",
    typicalCoaching: "Formula & Rote memorization",
    iconName: "BookOpen"
  },
  {
    feature: "Attention",
    drivenMind: "Personalized mentorship",
    typicalCoaching: "Generic lectures",
    iconName: "Sparkles"
  },
  {
    feature: "Progress Tracking",
    drivenMind: "Regular tests + parent feedback",
    typicalCoaching: "Occasional/None",
    iconName: "TrendingUp"
  }
];

export const CTA_DATA = {
  headline: "Ready to Learn Chemistry the Right Way?",
  body: "Join a small batch (Max 6). Get personal attention. Experience sincere teaching with zero shortcuts.",
  buttonText: "Book Your Free Demo Class Today",
  footerTagline: "Driven Mind Academy — Learning with Clarity, Growing with Confidence."
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
  "Group Batch (Max 6) - 3 Classes/Week",
  "One-to-One Personal Batch - 2 Classes/Week",
  "Weekday Evening Batch (5:00 PM - 6:30 PM)",
  "Weekend Special Batch (10:00 AM - 11:30 AM)"
];

