import React, { useState } from 'react';
import { SAMPLE_QUIZ_QUESTIONS } from '../data/academyData';
import { Brain, Sparkles, AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react';

export const ConceptPreviewQuiz: React.FC = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);

  const currentQ = SAMPLE_QUIZ_QUESTIONS[selectedQuestionIndex];

  return (
    <section id="concept-demo" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (36px, weight 700, line-height 1.2, letter-spacing -0.02em) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5 text-[#C89B3C]" />
            Interactive Concept Spotlight
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            See How We Teach <span className="text-[#0A2342]">Differently</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            Compare mechanical formula memorization against our first-principles conceptual breakdown.
          </p>
        </div>

        {/* Question Selector Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SAMPLE_QUIZ_QUESTIONS.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setSelectedQuestionIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 cursor-pointer ${
                selectedQuestionIndex === idx
                  ? 'btn-gold-primary text-white shadow-md scale-105'
                  : 'bg-white text-[#0A2342] hover:bg-slate-50 border border-[#C89B3C]/25 shadow-2xs hover:border-[#C89B3C]/50'
              }`}
            >
              Question {idx + 1}: {q.topic.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Main Quiz Comparison Card (Card Title: 20px, 600 weight, 1.4 leading) */}
        <div key={selectedQuestionIndex} className="mt-8 max-w-4xl mx-auto rounded-[24px] bg-white border border-[#C89B3C]/30 p-6 sm:p-10 shadow-lg space-y-6 animate-scale-pop">
          
          {/* Question Title */}
          <div className="p-5 rounded-2xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-[#C89B3C] font-semibold uppercase tracking-wide">{currentQ.topic}</span>
              <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] mt-1">{currentQ.question}</h3>
            </div>
          </div>

          {/* Dual Comparison Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Typical Cramming Approach */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-3 hover-lift">
              <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Typical Coaching Rote Method</span>
              </div>
              <p className="text-[14px] text-slate-700 leading-[1.7] font-mono bg-white p-3.5 rounded-lg border border-rose-100 shadow-2xs">
                {currentQ.crammingApproach}
              </p>
              <p className="text-xs text-rose-800 italic font-normal">
                ⚠️ Danger: Fails when tricky or modified numerical questions are asked in NEET / JEE.
              </p>
            </div>

            {/* Driven Mind Concept-First Approach */}
            <div className="p-6 rounded-2xl bg-[#0A2342]/5 border border-[#C89B3C]/40 space-y-3 hover-lift shadow-sm">
              <div className="flex items-center gap-2 text-[#0A2342] font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C89B3C]" />
                <span>Driven Mind Concept-First Method</span>
              </div>
              <p className="text-[14px] text-[#0A2342] leading-[1.7] bg-white p-3.5 rounded-lg border border-[#C89B3C]/30 font-medium shadow-2xs">
                {currentQ.conceptFirstApproach}
              </p>
              <p className="text-xs text-[#C89B3C] font-semibold">
                ✅ Clarity: Builds permanent understanding & confidence under exam stress.
              </p>
            </div>

          </div>

          {/* Detailed Conceptual Explanation */}
          <div className="p-5 rounded-2xl bg-[#FAFBFC] border border-[#C89B3C]/20 shadow-xs hover-glow">
            <div className="flex items-center gap-2 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#C89B3C] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Why This Matters for Board & Competitive Success:</span>
            </div>
            <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
              {currentQ.explanation}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
