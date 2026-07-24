import React, { useState } from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/academyData';
import { Video, Users, Brain, BarChart3, CheckCircle2, Sparkles, ChevronRight, Check } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenBooking: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenBooking }) => {
  const [activeTabId, setActiveTabId] = useState<string>(WHY_CHOOSE_US_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <Video className="w-5 h-5 text-[#C89B3C]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#C89B3C]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#C89B3C]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#C89B3C]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#C89B3C]" />;
    }
  };

  const activeFeature = WHY_CHOOSE_US_DATA.find(item => item.id === activeTabId) || WHY_CHOOSE_US_DATA[0];

  return (
    <section id="why-us" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (36px, weight 700, line-height 1.2, letter-spacing -0.02em) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            The Driven Mind Advantage
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            Why Choose <span className="text-[#0A2342]">Us</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            Built on clarity, individual focus, and active conceptual learning.
          </p>
        </div>

        {/* 4 Pillars Grid Cards (Card Title: 20px, 600 weight, 1.4 leading) */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const isSelected = item.id === activeTabId;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`cursor-pointer rounded-[20px] p-6 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-white border-[#C89B3C] shadow-lg -translate-y-1.5 ring-2 ring-[#C89B3C]/20'
                    : 'bg-white border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Active indicator badge */}
                {isSelected && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-[10px] font-semibold uppercase tracking-wider border border-[#C89B3C]/30 animate-scale-pop">
                    Active Stream
                  </div>
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 font-semibold border transition-transform duration-300 ${
                  isSelected 
                    ? 'bg-gradient-to-br from-[#C89B3C] to-[#E5B75E] text-white border-transparent scale-110 shadow-sm' 
                    : 'bg-[#0A2342]/5 border-[#C89B3C]/20 text-[#C89B3C]'
                }`}>
                  {isSelected ? React.cloneElement(getIcon(item.icon), { className: 'w-5 h-5 text-white' }) : getIcon(item.icon)}
                </div>

                <div className="flex items-center gap-1.5 text-[#C89B3C] text-xs font-semibold mb-1">
                  <Check className="w-3.5 h-3.5 shrink-0 text-[#C89B3C]" />
                  <span>Verified Method</span>
                </div>

                <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342] mb-2">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7]">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#C89B3C] group">
                  <span>Explore details</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="mt-8 rounded-[20px] bg-white border border-[#C89B3C]/25 p-6 sm:p-10 shadow-md relative overflow-hidden animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] text-white flex items-center justify-center shadow-md shrink-0 font-semibold animate-pulse-glow">
                {React.cloneElement(getIcon(activeFeature.icon), { className: 'w-6 h-6 text-white' })}
              </div>
              <div>
                <span className="text-xs text-[#C89B3C] font-semibold uppercase tracking-wider block">
                  {activeFeature.subtitle}
                </span>
                <h3 className="text-[20px] font-semibold leading-[1.4] text-[#0A2342]">
                  {activeFeature.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold-primary px-5 py-2.5 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] shrink-0 cursor-pointer"
            >
              Book Demo for this Stream
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
              What Students Experience in Every Batch:
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {activeFeature.bullets.map((bullet, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFBFC] border border-[#C89B3C]/15 flex items-start gap-3 hover-lift hover:border-[#C89B3C]/40 cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#0A2342] font-medium leading-[1.6]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
