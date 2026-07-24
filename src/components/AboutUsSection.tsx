import React from 'react';
import { ABOUT_US_DATA } from '../data/academyData';
import { Target, HeartHandshake, Layers, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (36px, weight 700, line-height 1.2, letter-spacing -0.02em) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Who We Are
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            About <span className="text-[#0A2342]">Driven Mind Academy</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
        </div>

        {/* Main Content Box */}
        <div className="mt-12 bg-white rounded-[24px] p-8 sm:p-12 border border-[#C89B3C]/20 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Logo Crest Showcase */}
          <div className="mb-8 flex justify-center border-b border-slate-100 pb-6">
            <div className="p-3.5 rounded-2xl bg-white border border-[#C89B3C]/20 shadow-xs">
              <Logo variant="full" size="xl" showTagline={true} />
            </div>
          </div>

          {/* Lead Text (16px, weight 400, line-height 1.8, #6B7280, max-w-2xl) */}
          <div className="space-y-6 text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto relative z-10">
            <p className="font-medium text-[#0A2342] text-[18px] border-l-4 border-[#C89B3C] pl-4 py-0.5 leading-[1.6]">
              At <strong className="text-[#0A2342] font-semibold">Driven Mind Academy</strong>, we believe true success in Chemistry comes from understanding — <span className="bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] bg-clip-text text-transparent font-semibold underline decoration-[#C89B3C]/30 underline-offset-4">not memorizing</span>.
            </p>

            <p>
              {ABOUT_US_DATA.missionStatement}
            </p>

            <p>
              {ABOUT_US_DATA.summaryText}
            </p>
          </div>

          {/* Three Core Pillars Cards (Card Title: 20px, 600 weight, 1.4 leading) */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid sm:grid-cols-3 gap-6 relative z-10">
            
            <div className="p-6 rounded-[20px] bg-white border border-[#C89B3C]/20 shadow-xs hover:border-[#C89B3C]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 text-[#C89B3C] flex items-center justify-center mb-3 font-semibold border border-[#C89B3C]/20">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] mb-1.5">Small Batches</h3>
              <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
                Max 6 students per batch to ensure every single doubt gets addressed live in real time.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-[#C89B3C]/20 shadow-xs hover:border-[#C89B3C]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 text-[#C89B3C] flex items-center justify-center mb-3 font-semibold border border-[#C89B3C]/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] mb-1.5">Personalized Mentorship</h3>
              <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
                Tailored progress tracking that adapts to individual student learning paces.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-[#C89B3C]/20 shadow-xs hover:border-[#C89B3C]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 text-[#C89B3C] flex items-center justify-center mb-3 font-semibold border border-[#C89B3C]/20">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] mb-1.5">Structured Method</h3>
              <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
                Step-by-step conceptual scaffolding connecting basic atomic theory to complex problems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
