import React, { useState } from 'react';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: (preselectedProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#C89B3C]/20 text-[#0A2342] transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group focus:outline-none py-1 shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <Logo variant="compact" size="md" className="group-hover:scale-[1.02] transition-transform duration-200" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#0A2342] shrink-0">
          <button 
            onClick={() => scrollTo('about')} 
            className="whitespace-nowrap hover:text-[#C89B3C] transition-colors py-2 relative group cursor-pointer"
          >
            About Us
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] group-hover:w-full transition-all duration-300 rounded-full" />
          </button>

          <button 
            onClick={() => scrollTo('why-us')} 
            className="whitespace-nowrap hover:text-[#C89B3C] transition-colors py-2 relative group cursor-pointer"
          >
            Why Choose Us
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] group-hover:w-full transition-all duration-300 rounded-full" />
          </button>

          <button 
            onClick={() => scrollTo('programs')} 
            className="whitespace-nowrap hover:text-[#C89B3C] transition-colors py-2 relative group cursor-pointer"
          >
            Programs
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] group-hover:w-full transition-all duration-300 rounded-full" />
          </button>

          <button 
            onClick={() => scrollTo('philosophy')} 
            className="whitespace-nowrap hover:text-[#C89B3C] transition-colors py-2 relative group cursor-pointer"
          >
            Philosophy
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] group-hover:w-full transition-all duration-300 rounded-full" />
          </button>

          <button 
            onClick={() => scrollTo('comparison')} 
            className="whitespace-nowrap hover:text-[#C89B3C] transition-colors py-2 relative group cursor-pointer"
          >
            What Sets Us Apart
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] group-hover:w-full transition-all duration-300 rounded-full" />
          </button>

          <button 
            onClick={() => scrollTo('concept-demo')} 
            className="whitespace-nowrap hover:text-[#E5B75E] transition-colors py-2 flex items-center gap-1.5 text-[#C89B3C] font-semibold cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#C89B3C] shrink-0 group-hover:rotate-12 transition-transform" />
            Concept Demo
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="btn-gold-primary whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            Book Free Demo Class
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-100 focus:outline-none shrink-0 transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 animate-scale-pop" /> : <Menu className="w-6 h-6 animate-scale-pop" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#C89B3C]/20 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fade-in-up">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-xs text-[#0A2342] mb-2">
            <Sparkles className="w-4 h-4 text-[#C89B3C] shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-medium">Small Batches (Max 6 Students) for Total Attention</span>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left px-3 py-2 rounded-xl text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-50 text-[15px] font-medium transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="block w-full text-left px-3 py-2 rounded-lg text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-50 text-[15px] font-medium transition-colors"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollTo('programs')}
            className="block w-full text-left px-3 py-2 rounded-lg text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-50 text-[15px] font-medium transition-colors"
          >
            Our Programs
          </button>
          <button
            onClick={() => scrollTo('philosophy')}
            className="block w-full text-left px-3 py-2 rounded-lg text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-50 text-[15px] font-medium transition-colors"
          >
            Teaching Philosophy
          </button>
          <button
            onClick={() => scrollTo('comparison')}
            className="block w-full text-left px-3 py-2 rounded-lg text-[#0A2342] hover:text-[#C89B3C] hover:bg-slate-50 text-[15px] font-medium transition-colors"
          >
            What Sets Us Apart
          </button>
          <button
            onClick={() => scrollTo('concept-demo')}
            className="block w-full text-left px-3 py-2 rounded-lg text-[#C89B3C] hover:bg-slate-50 text-[15px] font-semibold transition-colors"
          >
            Concept Demo
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-gold-primary w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-medium text-[15px] tracking-[0.02em]"
            >
              <Calendar className="w-5 h-5 shrink-0" />
              Book a Free Demo Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
