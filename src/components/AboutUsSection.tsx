import React, { useState } from 'react';
import { ABOUT_US_DATA, HERO_DATA } from '../data/academyData';
import { Target, HeartHandshake, Layers, Sparkles, Quote, BookOpen, Heart, ShieldCheck, CheckCircle2, Award, Users, Compass, ArrowRight, Calendar, Check } from 'lucide-react';
import { Logo } from './Logo';

export const AboutUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'academy'>('story');

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFBFC] relative overflow-hidden">
      
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A2342]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-[#C89B3C]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Corporate Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/25 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Corporate Overview & Pedagogy
          </div>
          <h2 className="text-[30px] sm:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            About <span className="text-[#0A2342]">Driven Mind Academy</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[15px] sm:text-[17px] text-[#6B7280] font-medium italic pt-1">
            "{HERO_DATA.motto}"
          </p>
        </div>

        {/* Single Unified Executive Dual-Tone Container */}
        <div className="mt-12 max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-[#C89B3C]/30 shadow-2xl bg-white grid lg:grid-cols-12 items-stretch">
          
          {/* Left Panel (5 Cols): Luxury Dark Navy Panel */}
          <div className="lg:col-span-5 bg-[#0A2342] text-white p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C89B3C]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#E5B75E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Header Crest Row */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-[#C89B3C]/30 inline-block">
                  <Logo variant="compact" size="md" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#E5B75E] text-xs font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
                  12+ Years Excellence
                </span>
              </div>

              {/* Chemistry Vision Highlight Quote Box */}
              <div className="space-y-3 pt-1">
                <div className="p-2.5 rounded-xl bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#E5B75E] inline-block">
                  <Quote className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-white leading-snug">
                  "{HERO_DATA.chemistryQuote}"
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Building strong conceptual understanding, zero mechanical cramming, and dedicated mentorship for every student.
                </p>
              </div>

              {/* Metric Bullets */}
              <div className="space-y-2.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <Users className="w-4 h-4 text-[#E5B75E] shrink-0" />
                  <span><strong>Max 6 Students per batch</strong> for guaranteed individual focus.</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <Compass className="w-4 h-4 text-[#E5B75E] shrink-0" />
                  <span><strong>Concept-First Approach</strong> for CBSE, NEET, & JEE Main.</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#E5B75E] shrink-0" />
                  <span><strong>Sincere Teaching</strong> with patience, integrity, & zero shortcuts.</span>
                </div>
              </div>

            </div>

            {/* Bottom Panel CTA Button */}
            <div className="pt-8 relative z-10 border-t border-white/10 mt-6">
              <a
                href="#demo-booking"
                className="w-full btn-gold-primary py-3.5 px-6 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 shrink-0 ml-auto" />
              </a>
            </div>

          </div>

          {/* Right Panel (7 Cols): Pristine White Corporate Content Reader */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Tab Navigation Controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 flex-wrap gap-4">
                <div className="inline-flex p-1.5 rounded-2xl bg-[#FAFBFC] border border-[#C89B3C]/20 gap-2">
                  <button
                    onClick={() => setActiveTab('story')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      activeTab === 'story'
                        ? 'bg-[#0A2342] text-white shadow-md'
                        : 'text-[#6B7280] hover:text-[#0A2342]'
                    }`}
                  >
                    <Heart className="w-4 h-4 text-[#C89B3C]" />
                    How It Started
                  </button>

                  <button
                    onClick={() => setActiveTab('academy')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      activeTab === 'academy'
                        ? 'bg-[#0A2342] text-white shadow-md'
                        : 'text-[#6B7280] hover:text-[#0A2342]'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-[#C89B3C]" />
                    About the Academy
                  </button>
                </div>

                <span className="text-xs font-semibold text-[#C89B3C] bg-[#C89B3C]/10 px-3 py-1 rounded-full border border-[#C89B3C]/20">
                  CBSE • NEET • JEE
                </span>
              </div>

              {/* Tab 1 Content: How It Started */}
              {activeTab === 'story' && (
                <div className="pt-6 space-y-5 animate-fade-in-up">
                  <div className="p-4 rounded-2xl bg-[#FAFBFC] border-l-4 border-[#C89B3C] space-y-1">
                    <h4 className="text-[17px] font-semibold text-[#0A2342]">{ABOUT_US_DATA.founderStory.subtitle}</h4>
                    <p className="text-xs text-[#C89B3C] font-semibold italic">"{ABOUT_US_DATA.founderStory.quote}"</p>
                  </div>

                  <div className="space-y-4 text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.8]">
                    <p>
                      With over <strong className="text-[#0A2342] font-semibold">12 years of teaching experience</strong>, the vision behind Driven Mind Academy was shaped by a simple yet powerful belief: <span className="bg-[#C89B3C]/10 text-[#0A2342] px-1 py-0.5 rounded font-medium">learning should be a journey to enjoy, not a race to survive.</span>
                    </p>

                    <div className="p-4 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#0A2342] text-xs font-medium leading-relaxed italic">
                      "Education is often reduced to ranks, marks, and competition, where only toppers are celebrated. But true success lies in progress. Every concept understood, every doubt clarified, every small improvement in confidence deserves to be cherished."
                    </div>

                    <p>
                      Over the years, it became clear that many students preparing for competitive examinations feel overwhelmed and exhausted — not because they lack potential, but because they lack the right guidance and encouragement. Academic success grows through understanding and consistent mentoring.
                    </p>

                    <p>
                      At Driven Mind Academy, every student receives personal attention and mentorship from a teacher who understands not only the subject but also the emotions, struggles, and aspirations of every learner. What began as a desire to help a few students has steadily grown into a nurturing learning community rooted in trust and compassion.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2 Content: About the Academy */}
              {activeTab === 'academy' && (
                <div className="pt-6 space-y-5 animate-fade-in-up">
                  <div className="p-4 rounded-2xl bg-[#FAFBFC] border-l-4 border-[#0A2342] space-y-1">
                    <h4 className="text-[17px] font-semibold text-[#0A2342]">{ABOUT_US_DATA.aboutAcademy.title}</h4>
                    <p className="text-xs text-[#6B7280] font-semibold italic">Learn with Clarity. Practice with Discipline. Achieve with Confidence.</p>
                  </div>

                  <div className="space-y-4 text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.8]">
                    <p>
                      At Driven Mind Academy, we believe that meaningful learning begins with understanding. Our teaching focuses on <strong className="text-[#0A2342]">conceptual clarity rather than memorization</strong>, helping students understand the "why" behind every concept for CBSE, NEET, and JEE.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-[#FAFBFC] border border-slate-100 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#0A2342] font-medium leading-snug">Small batch sizes (Max 6) for live doubt resolution.</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FAFBFC] border border-slate-100 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#0A2342] font-medium leading-snug">Regular interaction & parent progress feedback.</span>
                      </div>
                    </div>

                    <p>
                      Discipline, consistency, and sincerity are valued as much as academic achievement. We do not promise instant success or unrealistic shortcuts. Instead, we promise sincere teaching, personal attention, and a supportive learning environment.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 3 Mini Feature Bullets */}
            <div className="pt-6 border-t border-slate-100 grid sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                <Check className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>Max 6 Batch Limit</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                <Check className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>Personal Mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                <Check className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>Zero Shortcuts</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Bottom Corporate Feature Cards */}
        <div className="mt-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-[#C89B3C]/20 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-bold text-[#0A2342] mb-1">Small Batches (Max 6)</h4>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">Guarantees that every doubt is addressed live in real-time without hesitation.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#C89B3C]/20 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-bold text-[#0A2342] mb-1">Conceptual Clarity</h4>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">Understanding the "why" behind every concept — zero mechanical cramming.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#C89B3C]/20 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-bold text-[#0A2342] mb-1">Personal Mentorship</h4>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">Tailored guidance that adapts to each student's learning speed and confidence.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#C89B3C]/20 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-[16px] font-bold text-[#0A2342] mb-1">Sincere Commitment</h4>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">Quality education with integrity, patience, and transparent parent updates.</p>
          </div>
        </div>

      </div>
    </section>
  );
};



