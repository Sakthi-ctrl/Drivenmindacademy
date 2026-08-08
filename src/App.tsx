import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FeeStructureSection } from './components/FeeStructureSection';
import { TermsSection } from './components/TermsSection';
import { TeachingPhilosophySection } from './components/TeachingPhilosophySection';
import { ComparisonSection } from './components/ComparisonSection';
import { ConceptPreviewQuiz } from './components/ConceptPreviewQuiz';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DemoBookingModal } from './components/DemoBookingModal';
import { ViewState } from './types';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState<string>('CBSE');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgramTitle(programTitle);
    }
    setIsBookingModalOpen(true);
  };

  // Helper Breadcrumb Header for Dedicated Sub-pages
  const renderBreadcrumbHeader = (pageTitle: string, categoryName: string) => (
    <div className="bg-[#0A2342] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#C89B3C]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
        <div className="space-y-2">
          {/* Breadcrumb Links */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5B75E] uppercase tracking-wider">
            <button
              onClick={() => handleNavigate('home')}
              className="hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-200">{categoryName}</span>
          </div>

          <h1 className="text-[26px] sm:text-[34px] font-bold text-white tracking-tight">
            {pageTitle}
          </h1>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => handleNavigate('home')}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 cursor-pointer transition-all shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-[#E5B75E]" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-slate-800 font-sans relative overflow-x-hidden selection:bg-[#C89B3C] selection:text-white">
      {/* Background Decorative Frosted Glow Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[550px] h-[550px] bg-[#0A2342]/8 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C89B3C]/12 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="fixed top-[40%] left-[30%] w-[600px] h-[600px] bg-[#E5B75E]/8 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      {/* Sticky Top Navbar with Active View Router */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Page Multi-Route View Flow */}
      <main>
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div className="animate-fade-in-up">
            <HeroSection 
              onOpenBooking={handleOpenBooking} 
              onExplorePrograms={() => handleNavigate('programs')} 
            />
            <AboutUsSection />
            <WhyChooseUsSection onOpenBooking={() => handleOpenBooking('CBSE')} />
            <ProgramsSection onOpenBooking={handleOpenBooking} />
            <FeeStructureSection onOpenBooking={handleOpenBooking} />
            <TermsSection />
            <TeachingPhilosophySection />
            <ComparisonSection onOpenBooking={() => handleOpenBooking('CBSE')} />
            <ConceptPreviewQuiz />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 2: DEDICATED ABOUT US PAGE */}
        {currentView === 'about' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("About Driven Mind Academy & Founder's Story", "About Us")}
            <AboutUsSection />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 3: DEDICATED WHY CHOOSE US PAGE */}
        {currentView === 'why-us' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Why Choose Driven Mind Academy", "Advantage")}
            <WhyChooseUsSection onOpenBooking={() => handleOpenBooking('CBSE')} />
            <ComparisonSection onOpenBooking={() => handleOpenBooking('CBSE')} />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 4: DEDICATED PROGRAMS PAGE */}
        {currentView === 'programs' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Our Chemistry Programs (CBSE, NEET & JEE)", "Programs")}
            <ProgramsSection onOpenBooking={handleOpenBooking} />
            <FeeStructureSection onOpenBooking={handleOpenBooking} />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 5: DEDICATED FEES & SCHEDULE PAGE */}
        {currentView === 'fees' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Tuition Fee Structure & Class Schedules", "Fees & Schedule")}
            <FeeStructureSection onOpenBooking={handleOpenBooking} />
            <TermsSection />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 6: DEDICATED TERMS & POLICY PAGE */}
        {currentView === 'terms' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Tuition Terms, Conditions & Policy", "Terms & Policy")}
            <TermsSection />
            <FeeStructureSection onOpenBooking={handleOpenBooking} />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 7: DEDICATED TEACHING PHILOSOPHY PAGE */}
        {currentView === 'philosophy' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Our Concept-First Teaching Philosophy", "Philosophy")}
            <TeachingPhilosophySection />
            <ConceptPreviewQuiz />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

        {/* VIEW 8: DEDICATED CONCEPT DEMO PAGE */}
        {currentView === 'demo' && (
          <div className="animate-fade-in-up">
            {renderBreadcrumbHeader("Interactive Concept Preview & Quiz Demo", "Concept Demo")}
            <ConceptPreviewQuiz />
            <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenBooking={() => handleOpenBooking('CBSE')} 
      />

      {/* Booking Form Modal */}
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedProgram={selectedProgramTitle}
      />

    </div>
  );
}


