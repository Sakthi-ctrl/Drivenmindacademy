import React, { useState } from 'react';
import { Menu, X, Sparkles, Calendar, Home } from 'lucide-react';
import { Logo } from './Logo';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenBooking: (preselectedProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewState) => {
    setMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNavLinkClass = (view: ViewState) => {
    const isActive = currentView === view;
    return `whitespace-nowrap transition-all py-2 relative group cursor-pointer font-medium text-[14px] xl:text-[15px] ${
      isActive
        ? 'text-[#C89B3C] font-semibold'
        : 'text-[#0A2342] hover:text-[#C89B3C]'
    }`;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#C89B3C]/20 text-[#0A2342] transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 xl:gap-6">
        
        {/* Brand Logo - Clicking Logo Returns to Home Page */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group focus:outline-none py-1 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer text-left"
        >
          <Logo variant="compact" size="md" className="group-hover:scale-[1.02] transition-transform duration-200" />
        </button>

        {/* Desktop Nav Items (Multi-Page Routes) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[#0A2342] shrink-0">
          
          {/* Home Link */}
          <button 
            onClick={() => handleNavClick('home')} 
            className={getNavLinkClass('home')}
          >
            <span className="flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />
              Home
            </span>
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* About Us Link */}
          <button 
            onClick={() => handleNavClick('about')} 
            className={getNavLinkClass('about')}
          >
            About Us
            {currentView === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Why Choose Us Link */}
          <button 
            onClick={() => handleNavClick('why-us')} 
            className={getNavLinkClass('why-us')}
          >
            Why Choose Us
            {currentView === 'why-us' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Programs Link */}
          <button 
            onClick={() => handleNavClick('programs')} 
            className={getNavLinkClass('programs')}
          >
            Programs
            {currentView === 'programs' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Fees & Schedule Link */}
          <button 
            onClick={() => handleNavClick('fees')} 
            className={getNavLinkClass('fees')}
          >
            Fees & Schedule
            {currentView === 'fees' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Terms & Policy Link */}
          <button 
            onClick={() => handleNavClick('terms')} 
            className={getNavLinkClass('terms')}
          >
            Terms & Policy
            {currentView === 'terms' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Philosophy Link */}
          <button 
            onClick={() => handleNavClick('philosophy')} 
            className={getNavLinkClass('philosophy')}
          >
            Philosophy
            {currentView === 'philosophy' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#C89B3C] to-[#E5B75E] rounded-full animate-scale-pop" />
            )}
          </button>

          {/* Concept Demo Link */}
          <button 
            onClick={() => handleNavClick('demo')} 
            className={`whitespace-nowrap hover:text-[#E5B75E] transition-colors py-2 flex items-center gap-1.5 font-semibold cursor-pointer group ${
              currentView === 'demo' ? 'text-[#E5B75E]' : 'text-[#C89B3C]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C89B3C] shrink-0 group-hover:rotate-12 transition-transform" />
            Concept Demo
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="btn-gold-primary whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-[15px] tracking-[0.02em] cursor-pointer shadow-sm"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#C89B3C]/20 px-4 pt-3 pb-6 space-y-2.5 shadow-lg animate-fade-in-up">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0A2342]/5 border border-[#C89B3C]/20 text-xs text-[#0A2342] mb-2">
            <Sparkles className="w-4 h-4 text-[#C89B3C] shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-medium">Small Batches (Max 6 Students) for Total Attention</span>
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'home' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            🏠 Home Page
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'about' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            About Us & Founder Story
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'why-us' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            Why Choose Us
          </button>
          <button
            onClick={() => handleNavClick('programs')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'programs' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            Our Programs
          </button>
          <button
            onClick={() => handleNavClick('fees')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'fees' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            Fees & Schedule
          </button>
          <button
            onClick={() => handleNavClick('terms')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'terms' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            Terms & Policy
          </button>
          <button
            onClick={() => handleNavClick('philosophy')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'philosophy' ? 'bg-[#0A2342] text-white' : 'text-[#0A2342] hover:bg-slate-50'
            }`}
          >
            Teaching Philosophy
          </button>
          <button
            onClick={() => handleNavClick('demo')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
              currentView === 'demo' ? 'bg-[#C89B3C] text-white' : 'text-[#C89B3C] hover:bg-slate-50'
            }`}
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

