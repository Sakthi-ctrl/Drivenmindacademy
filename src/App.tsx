import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TeachingPhilosophySection } from './components/TeachingPhilosophySection';
import { ComparisonSection } from './components/ComparisonSection';
import { ConceptPreviewQuiz } from './components/ConceptPreviewQuiz';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DemoBookingModal } from './components/DemoBookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState<string>('CBSE');

  const handleOpenBooking = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgramTitle(programTitle);
    }
    setIsBookingModalOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-slate-800 font-sans relative overflow-x-hidden selection:bg-[#C89B3C] selection:text-white">
      {/* Background Decorative Frosted Glow Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[550px] h-[550px] bg-[#0A2342]/8 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C89B3C]/12 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="fixed top-[40%] left-[30%] w-[600px] h-[600px] bg-[#E5B75E]/8 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onExplorePrograms={handleExplorePrograms} 
        />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection onOpenBooking={() => handleOpenBooking('CBSE')} />

        {/* Our Programs Section */}
        <ProgramsSection onOpenBooking={handleOpenBooking} />

        {/* Teaching Philosophy Section */}
        <TeachingPhilosophySection />

        {/* What Sets Us Apart Comparison Table */}
        <ComparisonSection onOpenBooking={() => handleOpenBooking('CBSE')} />

        {/* Interactive Concept Preview Quiz */}
        <ConceptPreviewQuiz />

        {/* Final Call to Action Banner */}
        <CTASection onOpenBooking={() => handleOpenBooking('CBSE')} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('CBSE')} />

      {/* Booking Form Modal */}
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedProgram={selectedProgramTitle}
      />

    </div>
  );
}
