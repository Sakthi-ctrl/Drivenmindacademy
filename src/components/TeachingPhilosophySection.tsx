import React from 'react';
import { PHILOSOPHY_DATA } from '../data/academyData';
import { Lightbulb, HelpCircle, LineChart, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const TeachingPhilosophySection: React.FC = () => {
  const getPhilosophyIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-5 h-5 text-[#C89B3C]" />;
      case 1: return <HelpCircle className="w-5 h-5 text-[#C89B3C]" />;
      case 2: return <LineChart className="w-5 h-5 text-[#C89B3C]" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C89B3C]" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (36px, weight 700, line-height 1.2, letter-spacing -0.02em) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Core Academic Philosophy
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            Our Teaching <span className="text-[#0A2342]">Philosophy</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto italic pt-2">
            "{PHILOSOPHY_DATA.intro}"
          </p>
        </div>

        {/* 4 Pillars Flow Process Grid (Card Title: 20px, 600 weight, 1.4 leading) */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_DATA.points.map((point, idx) => (
            <div
              key={idx}
              className="luxury-card p-7 flex flex-col justify-between cursor-default group"
            >
              <div className="space-y-3 font-sans">
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] group-hover:scale-110 transition-transform">
                    {getPhilosophyIcon(idx)}
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                    {point.step}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] group-hover:text-[#C89B3C] transition-colors">
                  {point.title}
                </h3>

                <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#C89B3C]">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C89B3C]" />
                <span>Every Single Class</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-[20px] bg-white border border-[#C89B3C]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md animate-fade-in-up hover-glow">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342]">Experience our concept-first teaching methodology live</h4>
            <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">Reserve a zero-cost 45-minute interactive demo session with our lead Chemistry faculty.</p>
          </div>
          <a
            href="#demo-booking"
            className="btn-gold-primary px-6 py-3 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
          >
            Book Free Demo Class
          </a>
        </div>

      </div>
    </section>
  );
};
