import React from 'react';
import { CTA_DATA } from '../data/academyData';
import { Mail, Phone, MapPin, Calendar, MessageCircle, Sparkles, Instagram } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-slate-300 border-t border-[#C89B3C]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 12-Column Responsive Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#C89B3C]/15">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-1">
              <Logo variant="full" size="md" showTagline={false} />
            </div>

            <p className="text-[14px] text-slate-400 font-normal leading-[1.7] max-w-sm">
              Expert online Chemistry coaching for CBSE, NEET, and JEE Main aspirants — built on clarity, not cramming.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/25 text-[#E5B75E] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                Max 6 Students / Batch Guarantee
              </span>
            </div>
          </div>

          {/* Programs Column (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[15px] font-semibold text-[#E5B75E] uppercase tracking-wider">Our Programs</h4>
            <ul className="space-y-2.5 text-[14px] font-normal">
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  CBSE Board Excellence (Class 11 & 12)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  NEET Chemistry Mastery Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  JEE Main Chemistry Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  Small Batch Live Interactive Sessions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[15px] font-semibold text-[#E5B75E] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-[14px] font-normal">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('philosophy')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  Teaching Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('comparison')} className="hover:text-[#E5B75E] transition-colors text-slate-300 text-left cursor-pointer">
                  What Sets Us Apart
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('concept-demo')} className="hover:text-[#E5B75E] transition-colors text-[#C89B3C] font-semibold text-left cursor-pointer">
                  Concept Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[15px] font-semibold text-[#E5B75E] uppercase tracking-wider">Get In Touch</h4>
            
            <div className="space-y-3 text-[14px] text-slate-300 font-normal">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <a 
                  href="mailto:drivenmindacademy@gmail.com" 
                  className="hover:text-[#E5B75E] transition-colors break-all leading-tight"
                >
                  drivenmindacademy@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a 
                  href="https://wa.me/919150004584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5B75E] transition-colors flex items-center gap-1.5"
                >
                  <span>+91 91500 04584</span>
                  <span className="text-[11px] text-[#C89B3C] font-semibold px-2 py-0.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/20">
                    WhatsApp
                  </span>
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a 
                  href="https://www.instagram.com/drivenmindacademy?utm_source=qr&igsh=aDVobmNxMjE5Mmp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5B75E] transition-colors flex items-center gap-1.5"
                >
                  <span>@drivenmindacademy</span>
                  <span className="text-[11px] text-[#C89B3C] font-semibold px-2 py-0.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/20">
                    Instagram
                  </span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="leading-tight">Live Interactive Online Coaching</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] hover:from-[#D4A647] hover:to-[#F0C469] text-white font-medium text-[14px] tracking-[0.02em] shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Book Free Demo Class
              </button>

              <a
                href="https://wa.me/919150004584?text=Hi%20Driven%20Mind%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20Chemistry%20coaching%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0A2342] hover:bg-[#102E57] border border-[#25D366]/40 hover:border-[#25D366] text-white font-medium text-[14px] tracking-[0.02em] shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Footer Tagline & Copyright Banner */}
        <div className="pt-8 text-center space-y-2">
          <p className="text-[16px] sm:text-[18px] font-semibold bg-gradient-to-r from-[#C89B3C] via-[#E5B75E] to-[#C89B3C] bg-clip-text text-transparent italic">
            "{CTA_DATA.footerTagline}"
          </p>
          <p className="text-xs text-slate-500 font-normal">
            © {new Date().getFullYear()} Driven Mind Academy. All rights reserved. Building strong concepts, zero cramming.
          </p>
        </div>

      </div>
    </footer>
  );
};
