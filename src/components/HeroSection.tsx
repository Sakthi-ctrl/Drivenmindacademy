import React from 'react';
import { HERO_DATA } from '../data/academyData';
import { ShieldCheck, Sparkles, ArrowRight, Calendar, Users, Brain, CheckCircle2, Trophy, Video } from 'lucide-react';
import { Logo } from './Logo';

interface HeroSectionProps {
  onOpenBooking: (program?: string) => void;
  onExplorePrograms: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExplorePrograms }) => {
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0: return <Users className="w-5 h-5 text-[#C89B3C]" />;
      case 1: return <Brain className="w-5 h-5 text-[#C89B3C]" />;
      case 2: return <Trophy className="w-5 h-5 text-[#C89B3C]" />;
      case 3: return <Video className="w-5 h-5 text-[#C89B3C]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C89B3C]" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FAFBFC]">
      
      {/* Background Decorative Lighting Gradients with animation */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0A2342]/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#C89B3C]/12 rounded-full blur-[150px] pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-[#E5B75E]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in-up">
            
            {/* Top Pill Badge with Animated Pulse & Shine */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#C89B3C]/30 text-[#0A2342] text-xs font-semibold shadow-xs hover:border-[#C89B3C]/60 hover:shadow-sm transition-all duration-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89B3C]"></span>
              </span>
              <span>Online Chemistry Coaching • Small Batch (Max 6)</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C] animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] md:text-[46px] lg:text-[56px] font-bold tracking-[-0.03em] text-[#0A2342] leading-[1.15]">
              Building <span className="bg-gradient-to-r from-[#C89B3C] via-[#E5B75E] to-[#C89B3C] bg-clip-text text-transparent animate-pulse">Strong</span> Concepts.{' '}
              <span className="block mt-1.5 text-[#0A2342] font-bold">
                Inspiring Confident Learners.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto lg:mx-0">
              {HERO_DATA.subheadline}
            </p>

            {/* Feature Bullets in Hero with Hover Animation */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-6 text-[14px] text-[#0A2342] font-medium">
              <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default bg-white/60 px-3 py-1 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                CBSE Class 11 & 12
              </span>
              <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default bg-white/60 px-3 py-1 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                NEET Medical Prep
              </span>
              <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default bg-white/60 px-3 py-1 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                JEE Main Success
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="btn-gold-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Demo Class
              </button>

              <button
                onClick={onExplorePrograms}
                className="btn-gold-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-[15px] tracking-[0.02em] cursor-pointer shadow-xs"
              >
                Explore Our Programs
                <ArrowRight className="w-4 h-4 text-[#C89B3C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust note */}
            <p className="text-xs text-[#6B7280] pt-1 flex items-center justify-center lg:justify-start gap-1.5 font-normal">
              <ShieldCheck className="w-4 h-4 text-[#C89B3C] shrink-0" />
              <span>No credit card required. Experience live class interaction before enrolling.</span>
            </p>

          </div>

          {/* Right Column: Visual Card / Philosophy Box with Animated Border Glow */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[24px] bg-white border border-[#C89B3C]/30 shadow-xl p-6 lg:p-8 space-y-6 animate-float animate-border-glow">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2 hover:scale-102 transition-transform">
                  <Logo variant="compact" size="sm" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  100% Live Interactive
                </span>
              </div>

              {/* Philosophy Tile with Floating Sparkles */}
              <div className="bg-[#0A2342] text-white p-6 rounded-[20px] relative overflow-hidden shadow-lg border border-[#C89B3C]/40 group hover:border-[#C89B3C] transition-all duration-300">
                <div className="absolute top-2 right-2 text-[#C89B3C]/20 group-hover:text-[#C89B3C]/40 transition-colors">
                  <Sparkles className="w-16 h-16 animate-rotate-slow" />
                </div>
                <h4 className="text-[#E5B75E] text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">Philosophy</h4>
                <p className="text-[17px] font-medium leading-relaxed mb-4 italic text-slate-100">
                  "Success in Chemistry comes from understanding — not memorizing."
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-normal">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E5B75E] animate-pulse" /> Max 6 Students per batch
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E5B75E] animate-pulse" /> First-principles teaching
                  </div>
                </div>
              </div>

              {/* Key Quick Metric Tiles with Hover Lift */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-[#C89B3C]/20 text-left hover-lift hover:border-[#C89B3C]/40 cursor-default">
                  <div className="flex items-center gap-1.5 text-[#C89B3C] text-xs font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    Max Batch Size
                  </div>
                  <p className="text-[20px] font-semibold text-[#0A2342]">6 Students</p>
                  <p className="text-[12px] text-[#6B7280] font-normal">Individual focus</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-[#C89B3C]/20 text-left hover-lift hover:border-[#C89B3C]/40 cursor-default">
                  <div className="flex items-center gap-1.5 text-[#C89B3C] text-xs font-semibold mb-1">
                    <Brain className="w-3.5 h-3.5" />
                    Methodology
                  </div>
                  <p className="text-[20px] font-semibold text-[#0A2342]">Concept-First</p>
                  <p className="text-[12px] text-[#6B7280] font-normal">Zero cramming</p>
                </div>
              </div>

              {/* Live Batch Alert Footer */}
              <div className="p-3.5 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/30 flex items-center justify-between text-xs hover:bg-[#0A2342]/10 transition-colors">
                <span className="text-[#0A2342] font-medium">Upcoming Batch: <strong className="text-[#0A2342] font-semibold">CBSE / NEET / JEE</strong></span>
                <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] text-white font-medium text-[11px] animate-pulse">
                  2 Spots Left
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Premium Corporate Metric Cards with Hover Scale & Glow */}
        <div className="mt-16 pt-10 border-t border-[#C89B3C]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_DATA.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="luxury-card p-6 flex flex-col justify-between cursor-default"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] group-hover:scale-110 transition-transform">
                    {getStatIcon(idx)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#C89B3C] uppercase tracking-wider bg-[#C89B3C]/10 px-2.5 py-1 rounded-full border border-[#C89B3C]/20">
                    {stat.label}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0A2342] pt-1 leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                  {stat.value}
                </h3>
              </div>

              <p className="text-[13px] text-[#6B7280] font-normal pt-2 border-t border-slate-100 mt-4">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
