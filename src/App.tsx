/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PathForkSection, UserTrack } from './components/PathForkSection';
import { ChallengeSection } from './components/ChallengeSection';
import { ApproachSection } from './components/ApproachSection';
import { SolutionsSection } from './components/SolutionsSection';
import { LearnAndGrowSection } from './components/LearnAndGrowSection';
import { NextStepSection } from './components/NextStepSection';
import { Footer } from './components/Footer';

// Modals
import { VideoModal, VideoData } from './components/modals/VideoModal';
import { SearchModal } from './components/modals/SearchModal';
import { PortalModal } from './components/modals/PortalModal';
import { ComplianceModal } from './components/modals/ComplianceModal';
import { TrainingModal } from './components/modals/TrainingModal';
import { ContactModal } from './components/modals/ContactModal';
import { DiagnosticModal } from './components/modals/DiagnosticModal';
import { PathFinderModal } from './components/modals/PathFinderModal';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<UserTrack>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isPathFinderOpen, setIsPathFinderOpen] = useState(false);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTrack = (track: UserTrack) => {
    setCurrentTrack(track);
    if (track !== 'all') {
      handleNavigateSection('pathway-choice');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B3A] font-['Inter'] selection:bg-[#078A87] selection:text-white">
      
      {/* 1. White Navigation Header with Pathway Awareness */}
      <Navbar 
        currentTrack={currentTrack}
        onSelectTrack={handleSelectTrack}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTraining={() => setIsTrainingOpen(true)}
        onOpenCompliance={() => setIsComplianceOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* 2. Cinematic Hero Section */}
        <Hero 
          onExploreTraining={() => {
            setCurrentTrack('growth');
            handleNavigateSection('solutions');
            setIsTrainingOpen(true);
          }}
          onExploreCompliance={() => {
            setCurrentTrack('compliance');
            handleNavigateSection('solutions');
            setIsComplianceOpen(true);
          }}
          onChoosePath={() => handleNavigateSection('pathway-choice')}
          onOpenPathFinder={() => setIsPathFinderOpen(true)}
        />

        {/* 2B. NEW: Interactive "Choose Your Pathway" Decision Fork */}
        <PathForkSection 
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
          onOpenTraining={() => setIsTrainingOpen(true)}
          onOpenCompliance={() => setIsComplianceOpen(true)}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 3. Section 1: The Challenge — Why Most Agents Stay Stuck */}
        <ChallengeSection 
          currentTrack={currentTrack}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
          onSelectTrack={handleSelectTrack}
        />

        {/* 4. Section 2: The P3 Approach — Turn Everyday Activities into Repeatable Business Systems */}
        <ApproachSection 
          onLearnMore={() => setIsDiagnosticOpen(true)}
        />

        {/* 5. Section 3: Our Solutions — Training Programmes and Compliance Services */}
        <SolutionsSection 
          currentTrack={currentTrack}
          onViewTraining={() => setIsTrainingOpen(true)}
          onEnquireCompliance={() => setIsComplianceOpen(true)}
          onSelectTrack={handleSelectTrack}
        />

        {/* 6. Section 4: Learn and Grow — Practical Insights for Property Professionals */}
        <LearnAndGrowSection 
          onSelectVideo={(video) => setSelectedVideo(video)}
          onViewAllResources={() => setIsSearchOpen(true)}
        />

        {/* 7. Section 5: Take the Next Step — Fix the System. Stabilise the Results */}
        <NextStepSection 
          onExploreTraining={() => setIsTrainingOpen(true)}
          onContactUs={() => setIsContactOpen(true)}
        />
      </main>

      {/* 8. Dark Navy Footer */}
      <Footer 
        onNavigateSection={handleNavigateSection}
        onOpenTraining={() => {
          setCurrentTrack('growth');
          setIsTrainingOpen(true);
        }}
        onOpenCompliance={() => {
          setCurrentTrack('compliance');
          setIsComplianceOpen(true);
        }}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal 
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateSection={handleNavigateSection}
      />

      <PortalModal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <ComplianceModal 
        isOpen={isComplianceOpen}
        onClose={() => setIsComplianceOpen(false)}
      />

      <TrainingModal 
        isOpen={isTrainingOpen}
        onClose={() => setIsTrainingOpen(false)}
        onOpenPortal={() => {
          setIsTrainingOpen(false);
          setIsPortalOpen(true);
        }}
      />

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <DiagnosticModal 
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onExploreSolutions={() => {
          setIsDiagnosticOpen(false);
          setIsTrainingOpen(true);
        }}
      />

      <PathFinderModal 
        isOpen={isPathFinderOpen}
        onClose={() => setIsPathFinderOpen(false)}
        onSelectTrack={handleSelectTrack}
      />

    </div>
  );
}
