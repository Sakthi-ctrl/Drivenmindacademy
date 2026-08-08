import React, { useState } from 'react';
import { TERMS_AND_CONDITIONS_DATA } from '../data/academyData';
import { ShieldCheck, Calendar, CreditCard, Clock, CheckCircle2, FileText, ChevronDown, ChevronUp, AlertCircle, Info } from 'lucide-react';

export const TermsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const getTermIcon = (number: number) => {
    switch (number) {
      case 1: return <Calendar className="w-5 h-5 text-[#C89B3C]" />;
      case 2: return <CreditCard className="w-5 h-5 text-[#C89B3C]" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />;
      case 4: return <Clock className="w-5 h-5 text-[#C89B3C]" />;
      case 5: return <CheckCircle2 className="w-5 h-5 text-[#C89B3C]" />;
      case 6: return <FileText className="w-5 h-5 text-[#C89B3C]" />;
      default: return <Info className="w-5 h-5 text-[#C89B3C]" />;
    }
  };

  return (
    <section id="terms" className="py-20 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
            Academic Discipline & Guidelines
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            Chemistry Tuition — <span className="text-[#0A2342]">Terms & Conditions</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            To ensure a positive learning experience and steady academic progress, we kindly request students and parents to note the following guidelines:
          </p>
        </div>

        {/* Terms Accordion / Cards Grid */}
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {TERMS_AND_CONDITIONS_DATA.map((term, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={term.number}
                className={`bg-white rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-[#C89B3C] shadow-md ring-1 ring-[#C89B3C]/30'
                    : 'border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xs'
                }`}
              >
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center shrink-0">
                      {getTermIcon(term.number)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0A2342]">
                          {term.number}. {term.title}
                        </h3>
                        {term.tag && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-[11px] font-semibold border border-[#C89B3C]/25">
                            {term.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] sm:text-[14px] text-[#6B7280] mt-0.5 font-normal">
                        {term.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#FAFBFC] text-[#0A2342] shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#C89B3C]" /> : <ChevronDown className="w-5 h-5 text-[#6B7280]" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.8] border-t border-slate-100 bg-[#FAFBFC]/50 animate-fade-in-up">
                    <p>{term.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Parent & Student Trust Callout Banner */}
        <div className="mt-10 max-w-4xl mx-auto p-6 rounded-[20px] bg-[#0A2342] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-[#C89B3C]/30">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertCircle className="w-6 h-6 text-[#E5B75E] shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-[16px] font-semibold text-white">Dedicated to Quality Education with Integrity</h4>
              <p className="text-xs text-slate-300 font-normal">Sincere teaching, personal attention, and a positive learning environment in every session.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919150004584?text=Hi%20Driven%20Mind%20Academy%2C%20I%20have%20a%20question%20regarding%20tuition%20terms%20and%20enrolment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary px-5 py-2.5 rounded-xl text-white font-medium text-[14px] whitespace-nowrap"
          >
            Have Questions? Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};
