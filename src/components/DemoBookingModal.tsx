import React, { useState } from 'react';
import { TIME_SLOTS } from '../data/academyData';
import { DemoBookingData } from '../types';
import { X, Calendar, Sparkles, CheckCircle2, User, Mail, Phone, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram = 'CBSE'
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<DemoBookingData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    targetProgram: preselectedProgram.includes('NEET') 
      ? 'NEET' 
      : preselectedProgram.includes('JEE') 
        ? 'JEE' 
        : 'CBSE',
    grade: 'Class 11',
    preferredTimeSlot: TIME_SLOTS[0],
    focusArea: 'Organic Chemistry',
    additionalNotes: ''
  });

  if (!isOpen) return null;

  const getWhatsAppMessage = () => {
    return `*Demo Class Booking Request - Driven Mind Academy*\n\n` +
      `👤 *Student Name:* ${formData.studentName}\n` +
      (formData.parentName ? `👨‍👩‍👦 *Parent Name:* ${formData.parentName}\n` : '') +
      `📱 *Phone / WhatsApp:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🎯 *Target Exam:* ${formData.targetProgram} Chemistry (${formData.grade})\n` +
      `⏰ *Preferred Time Slot:* ${formData.preferredTimeSlot}\n\n` +
      `Hello Driven Mind Academy! I have submitted my demo class request. Please send me the live Google Meet link and pre-session details.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Target WhatsApp Number: +91 99524 70796
    const whatsappNumber = '919952470796';
    const message = getWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Trigger opening WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A2342]/70 backdrop-blur-md p-4 sm:p-6 md:p-8 flex min-h-full items-start sm:items-center justify-center animate-fade-in-up">
      <div className="relative w-full max-w-xl rounded-[24px] bg-white border border-[#C89B3C]/35 p-6 sm:p-8 shadow-2xl my-auto text-[#0A2342] animate-scale-pop">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer hover:rotate-90 transition-transform"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-5 pr-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] text-white flex items-center justify-center shadow-xs shrink-0 font-medium">
                <Calendar className="w-5 h-5 text-white shrink-0" />
              </div>
              <div>
                <span className="text-[11px] text-[#C89B3C] font-semibold uppercase tracking-wider block">
                  Small Batch Guarantee (Max 6)
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0A2342] leading-tight">
                  Book Your Free Demo Class
                </h3>
              </div>
            </div>

            {/* Sub-banner */}
            <div className="text-[13px] sm:text-[14px] text-[#0A2342] mb-5 bg-[#0A2342]/5 p-3.5 rounded-xl border border-[#C89B3C]/20 flex items-start sm:items-center gap-2.5 font-normal leading-[1.6]">
              <Sparkles className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5 sm:mt-0" />
              <span>Experience our live 2-way interactive whiteboard class before deciding. Direct WhatsApp: <strong>+91 99524 70796</strong></span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Student Name */}
              <div>
                <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                  Student Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter student's full name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  />
                </div>
              </div>

              {/* Parent Name & Phone Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="Parent's name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone No. *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 99524 70796"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  />
                </div>
              </div>

              {/* Program & Grade Selection */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                    Target Goal / Exam *
                  </label>
                  <select
                    value={formData.targetProgram}
                    onChange={(e) => setFormData({ ...formData, targetProgram: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  >
                    <option value="CBSE">CBSE Board Excellence</option>
                    <option value="NEET">NEET Chemistry Mastery</option>
                    <option value="JEE">JEE Main Chemistry Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                    Class / Grade *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  >
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper/Repeater">Dropper / Repeater</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-[#0A2342] uppercase tracking-wider mb-1.5">
                  Preferred Demo Time Slot *
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2342] focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-[14px] font-normal transition-all"
                  >
                    {TIME_SLOTS.map((slot, i) => (
                      <option key={i} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-5 py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] hover:from-[#D4A647] hover:to-[#F0C469] text-white font-medium text-[15px] tracking-[0.02em] shadow-sm transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Confirm & Book Free Demo Class
              </button>

              <div className="text-center pt-1">
                <span className="text-[11px] text-[#6B7280] font-normal flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                  Direct WhatsApp dispatch to <strong>+91 99524 70796</strong>
                </span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] border border-[#C89B3C]/20 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-[#C89B3C]" />
            </div>

            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#0A2342]/5 text-[#C89B3C] text-xs font-semibold border border-[#C89B3C]/20 uppercase">
                Demo Class Reserved!
              </span>
              <h3 className="text-[22px] font-semibold text-[#0A2342] mt-2">
                Welcome to Driven Mind Academy
              </h3>
              <p className="text-[14px] text-[#6B7280] mt-1 max-w-sm mx-auto font-normal">
                Thank you <strong className="text-[#0A2342] font-medium">{formData.studentName}</strong>! Your demo class request has been prepared.
              </p>
            </div>

            {/* Booking Details Summary Box */}
            <div className="bg-[#0A2342]/5 p-4 rounded-xl border border-[#C89B3C]/20 text-left space-y-2 text-xs text-[#0A2342]">
              <div className="flex justify-between border-b border-[#C89B3C]/15 pb-2">
                <span className="text-[#6B7280]">Target Program:</span>
                <span className="font-semibold text-[#0A2342]">{formData.targetProgram} Chemistry ({formData.grade})</span>
              </div>
              <div className="flex justify-between border-b border-[#C89B3C]/15 pb-2">
                <span className="text-[#6B7280]">Selected Slot:</span>
                <span className="font-semibold text-[#0A2342]">{formData.preferredTimeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Target WhatsApp:</span>
                <span className="font-semibold text-[#C89B3C]">+91 99524 70796</span>
              </div>
            </div>

            <p className="text-xs text-[#6B7280] font-normal">
              Click the button below to send your details directly to our admissions team on WhatsApp:
            </p>

            <a
              href={`https://wa.me/919952470796?text=${encodeURIComponent(getWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-[15px] tracking-[0.02em] shadow-sm transition-all cursor-pointer hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Send Message on WhatsApp (+91 99524 70796)
            </a>

            <div>
              <button
                onClick={resetForm}
                className="mt-2 text-xs text-[#6B7280] hover:text-[#0A2342] underline cursor-pointer"
              >
                Close & Return to Academy
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
