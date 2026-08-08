import React from 'react';
import { FEE_STRUCTURE_DATA, FEE_STRUCTURE_NOTES } from '../data/academyData';
import { Clock, Users, Calendar, Sparkles, CheckCircle2, User, UserCheck } from 'lucide-react';

interface FeeStructureSectionProps {
  onOpenBooking: (courseName?: string) => void;
}

export const FeeStructureSection: React.FC<FeeStructureSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="fee-structure" className="py-20 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Transparent & Structured
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            Tuition Fee Structure & <span className="text-[#0A2342]">Schedule</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            All sessions are conducted in small batches (max 6 students) or personalized 1-on-1 sessions.
          </p>
        </div>

        {/* Schedule & Batch Cards Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEE_STRUCTURE_DATA.map((item) => {
            const isOneOnOne = item.format === 'One-to-One';
            return (
              <div
                key={item.id}
                className={`luxury-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isOneOnOne
                    ? 'border-[#C89B3C] bg-gradient-to-b from-white to-[#C89B3C]/5 shadow-md'
                    : 'border-[#C89B3C]/20 bg-white'
                }`}
              >
                <div className="space-y-4">
                  {/* Format Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                        isOneOnOne
                          ? 'bg-[#C89B3C] text-white'
                          : 'bg-[#0A2342]/5 text-[#0A2342] border border-[#C89B3C]/20'
                      }`}
                    >
                      {isOneOnOne ? <UserCheck className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5 text-[#C89B3C]" />}
                      {item.format} Format
                    </span>

                    <span className="text-xs font-semibold text-[#C89B3C] bg-[#C89B3C]/10 px-2.5 py-1 rounded-full border border-[#C89B3C]/20">
                      {item.batchSize}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-[20px] font-bold text-[#0A2342]">
                    {item.course}
                  </h3>

                  {/* Schedule Details Box */}
                  <div className="p-4 rounded-xl bg-[#FAFBFC] border border-[#C89B3C]/15 space-y-2">
                    <div className="flex items-center gap-2 text-[15px] font-semibold text-[#0A2342]">
                      <Calendar className="w-4 h-4 text-[#C89B3C] shrink-0" />
                      <span>{item.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                      <span>{item.details}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <button
                    onClick={() => onOpenBooking(item.course)}
                    className="btn-gold-primary w-full py-3 rounded-xl text-white font-medium text-[14px] tracking-[0.02em] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Inquire for {item.course}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Fee Notes Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-white border border-[#C89B3C]/30 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4 text-[#0A2342] font-bold text-[18px]">
            <Sparkles className="w-5 h-5 text-[#C89B3C]" />
            <span>Important Terms & Notes Regarding Fee Structure</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FEE_STRUCTURE_NOTES.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FAFBFC] border border-slate-100 text-[14px] text-[#4B5563]">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="leading-snug">{note}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
