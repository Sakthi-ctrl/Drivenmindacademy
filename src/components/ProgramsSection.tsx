import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/academyData';
import { ProgramItem } from '../types';
import { BookOpen, GraduationCap, Trophy, CheckCircle2, Calendar, Sparkles, X, Clock, Users } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenBooking: (programTitle?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenBooking }) => {
  const [selectedSyllabusModal, setSelectedSyllabusModal] = useState<ProgramItem | null>(null);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'cbse-excellence':
        return <GraduationCap className="w-5 h-5 text-[#C89B3C] shrink-0" />;
      case 'neet-mastery':
        return <Trophy className="w-5 h-5 text-[#C89B3C] shrink-0" />;
      case 'jee-main-program':
        return <BookOpen className="w-5 h-5 text-[#C89B3C] shrink-0" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#C89B3C] shrink-0" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            Curriculum Tailored For Results
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2342]">
            Our <span className="text-[#0A2342]">Programs</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] mx-auto rounded-full" />
          <p className="text-[16px] text-[#6B7280] font-normal leading-[1.8] max-w-2xl mx-auto pt-2">
            Specialized coaching modules for Class 11, Class 12, CBSE Boards, NEET, and JEE Main.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((program) => (
            <div
              key={program.id}
              className="luxury-card flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Top Card Header */}
                <div className="p-6 sm:p-7 bg-[#FAFBFC] border-b border-slate-100 space-y-4">
                  {/* Badge & Batch Size Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 animate-pulse">
                      {program.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] font-medium whitespace-nowrap shrink-0">
                      <Users className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                      {program.batchSize}
                    </span>
                  </div>

                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-3.5 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      {getProgramIcon(program.id)}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold leading-[1.3] text-[#0A2342] group-hover:text-[#C89B3C] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-[13px] text-[#6B7280] font-normal mt-1">{program.targetAudience}</p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-6">
                  {/* Description */}
                  <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7] min-h-[70px]">
                    {program.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-[#0A2342] uppercase tracking-wider">Key Program Features:</p>
                    {program.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#0A2342] font-normal hover:translate-x-1 transition-transform cursor-default">
                        <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span className="leading-[1.5]">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule */}
                  <div className="p-3.5 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 flex items-center gap-2.5 text-xs text-[#0A2342] font-normal">
                    <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                    <span><strong>Schedule:</strong> {program.classSchedule}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-3">
                <button
                  onClick={() => setSelectedSyllabusModal(program)}
                  className="btn-gold-secondary w-full py-2.5 rounded-xl font-medium text-[14px] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                  View Chapter Breakdown
                </button>

                <button
                  onClick={() => onOpenBooking(program.title)}
                  className="btn-gold-primary w-full py-3 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  Book Free Demo for {program.title.split(' ')[0]}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Chapter Breakdown Modal */}
      {selectedSyllabusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A2342]/60 backdrop-blur-md p-4 animate-fade-in-up">
          <div className="bg-white border border-[#C89B3C]/30 rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#0A2342] animate-scale-pop">
            
            <button
              onClick={() => setSelectedSyllabusModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer hover:rotate-90 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#0A2342]/5 border border-[#C89B3C]/20 text-[#C89B3C]">
                <BookOpen className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <div>
                <span className="text-xs text-[#C89B3C] font-semibold uppercase">{selectedSyllabusModal.badge}</span>
                <h3 className="text-[20px] font-semibold text-[#0A2342] leading-[1.4]">{selectedSyllabusModal.title}</h3>
              </div>
            </div>

            <p className="text-[14px] text-[#6B7280] font-normal leading-[1.7] mb-6">{selectedSyllabusModal.description}</p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAFBFC] border border-[#C89B3C]/15 hover-lift">
                <h4 className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mb-2">Physical Chemistry</h4>
                <ul className="list-disc list-inside text-[14px] text-[#6B7280] space-y-1 font-normal">
                  {selectedSyllabusModal.syllabusOverview.physical.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFBFC] border border-[#C89B3C]/15 hover-lift">
                <h4 className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mb-2">Organic Chemistry</h4>
                <ul className="list-disc list-inside text-[14px] text-[#6B7280] space-y-1 font-normal">
                  {selectedSyllabusModal.syllabusOverview.organic.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFBFC] border border-[#C89B3C]/15 hover-lift">
                <h4 className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mb-2">Inorganic Chemistry</h4>
                <ul className="list-disc list-inside text-[14px] text-[#6B7280] space-y-1 font-normal">
                  {selectedSyllabusModal.syllabusOverview.inorganic.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-[#6B7280] font-normal">Batch size strictly capped at 6 students</span>
              <button
                onClick={() => {
                  const title = selectedSyllabusModal.title;
                  setSelectedSyllabusModal(null);
                  onOpenBooking(title);
                }}
                className="btn-gold-primary px-5 py-2.5 rounded-xl text-white font-medium text-[15px] tracking-[0.02em]"
              >
                Book Free Demo Class
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
