import React from 'react';
import { COMPARISON_DATA } from '../data/academyData';
import { Check, X, Sparkles, Users, BookOpen, Heart, TrendingUp, ShieldCheck } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenBooking }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-4 h-4 text-[#C89B3C]" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-[#C89B3C]" />;
      case 'Sparkles': return <Heart className="w-4 h-4 text-[#C89B3C]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#C89B3C]" />;
      default: return <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />;
    }
  };

  return (
    <section id="comparison" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (36px, weight 700, line-height 1.2, letter-spacing -0.02em) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Clear Advantage
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            What Sets <span className="text-[#0A2342]">Us Apart</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            Compare Driven Mind Academy's focused small-batch model against traditional high-volume coaching centers.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="mt-12 max-w-4xl mx-auto rounded-[20px] bg-white border border-[#C89B3C]/20 shadow-sm overflow-hidden">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-[#0A2342] text-white text-xs font-semibold uppercase tracking-wider p-4 sm:p-5 items-center">
            <div className="col-span-4 sm:col-span-4 text-slate-300">
              Parameter
            </div>
            
            {/* Driven Mind Column Title */}
            <div className="col-span-4 sm:col-span-4 text-center sm:text-left bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] p-2.5 rounded-xl text-white shadow-xs">
              <span className="font-semibold text-sm block text-white">
                Driven Mind Academy
              </span>
              <span className="text-[10px] text-white/90 font-medium normal-case block">Small Batch Model</span>
            </div>

            {/* Typical Coaching Column Title */}
            <div className="col-span-4 sm:col-span-4 text-center sm:text-left p-2 text-slate-300">
              <span className="font-semibold text-white text-sm block">
                Typical Coaching
              </span>
              <span className="text-[10px] text-slate-400 font-normal normal-case block">Mass Coaching Centers</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISON_DATA.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                
                {/* Feature Label */}
                <div className="col-span-4 sm:col-span-4 flex items-center gap-2.5">
                  <div className="hidden sm:flex w-8 h-8 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] items-center justify-center shrink-0 font-medium">
                    {getFeatureIcon(row.iconName)}
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A2342] text-[15px] block">{row.feature}</span>
                  </div>
                </div>

                {/* Driven Mind Academy Value (Highlighted Column) */}
                <div className="col-span-4 sm:col-span-4 bg-[#C89B3C]/10 p-2.5 rounded-xl border border-[#C89B3C]/60 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] text-white flex items-center justify-center shrink-0 font-medium shadow-xs">
                    <Check className="w-3 h-3 font-semibold" />
                  </div>
                  <span className="font-semibold text-[#0A2342] text-xs sm:text-[14px]">{row.drivenMind}</span>
                </div>

                {/* Typical Coaching Value */}
                <div className="col-span-4 sm:col-span-4 p-2.5 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-[#6B7280] text-xs sm:text-[14px] font-normal">{row.typicalCoaching}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Callout in Comparison Card */}
          <div className="p-6 bg-[#FAFBFC] border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-[#6B7280] font-normal">
              <strong className="text-[#0A2342] font-semibold">Notice the difference?</strong> Give your child the individual attention they deserve.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] hover:from-[#D4A647] hover:to-[#F0C469] text-white font-medium text-[15px] tracking-[0.02em] shadow-xs whitespace-nowrap cursor-pointer transition-all hover:scale-[1.01]"
            >
              Book Your Demo Class
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
