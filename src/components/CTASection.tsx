import React from 'react';
import { CTA_DATA } from '../data/academyData';
import { Calendar, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="demo-booking" className="py-20 relative overflow-hidden bg-[#FAFBFC]">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Royal Navy Gradient Banner */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#0A2342] via-[#102E57] to-[#0A2342] border border-[#C89B3C]/40 p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative overflow-hidden text-white animate-fade-in-up">
          
          {/* Subtle Floating Gold Ambient Glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C89B3C]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E5B75E]/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C89B3C]/40 text-[#E5B75E] text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B75E] animate-spin" style={{ animationDuration: '7s' }} />
            <span>Small Batch Learning • Maximum 6 Students</span>
          </div>

          {/* Headline */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] max-w-3xl mx-auto text-white">
            Transform Chemistry from a Tough Subject into Your <span className="bg-gradient-to-r from-[#C89B3C] via-[#E5B75E] to-[#C89B3C] bg-clip-text text-transparent animate-pulse">Strongest Subject</span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-[16px] text-slate-200 font-normal leading-[1.8] max-w-2xl mx-auto">
            {CTA_DATA.body}
          </p>

          {/* Highlights summary */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-[14px] text-slate-200 font-medium">
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#E5B75E]" />
              Live Interactive Classes
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#E5B75E]" />
              Max 6 Students / Batch
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#E5B75E]" />
              Regular Tests & Performance Analysis
            </span>
          </div>

          {/* Button CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-gold-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              {CTA_DATA.buttonText}
            </button>
          </div>

          {/* Trust Note */}
          <p className="mt-4 text-xs text-slate-300 font-normal flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E5B75E]" />
            <span>Free 45-min demo session. No obligation or fees required.</span>
          </p>

        </div>

      </div>
    </section>
  );
};
