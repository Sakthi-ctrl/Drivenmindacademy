export type ViewState = 'home' | 'about' | 'why-us' | 'programs' | 'fees' | 'terms' | 'philosophy' | 'demo';

export interface ProgramItem {
  id: string;
  title: string;
  badge: string;
  targetAudience: string;
  description: string;
  keyHighlights: string[];
  syllabusOverview: {
    physical: string[];
    organic: string[];
    inorganic: string[];
  };
  classSchedule: string;
  batchSize: string;
}

export interface ComparisonFeature {
  feature: string;
  drivenMind: string;
  typicalCoaching: string;
  iconName: string;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface DemoBookingData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  targetProgram: 'CBSE' | 'NEET' | 'JEE';
  grade: 'Class 11' | 'Class 12' | 'Dropper/Repeater';
  preferredTimeSlot: string;
  focusArea: string;
  additionalNotes?: string;
}

export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  crammingApproach: string;
  conceptFirstApproach: string;
  explanation: string;
}

