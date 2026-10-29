import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, User, Menu, X, ChevronDown, BookOpen, GraduationCap, ShieldCheck, Phone, GitFork } from 'lucide-react';
import { UserTrack } from './PathForkSection';

interface NavbarProps {
  currentTrack: UserTrack;
  onSelectTrack: (track: UserTrack) => void;
  onOpenPortal: () => void;
  onOpenSearch: () => void;
  onOpenTraining: () => void;
  onOpenCompliance: () => void;
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTrack,
  onSelectTrack,
  onOpenPortal,
  onOpenSearch,
  onOpenTraining,
  onOpenCompliance,
  onOpenContact,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker
      const sections = ['home', 'pathway-choice', 'challenge', 'approach', 'solutions', 'resources', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setTrainingDropdownOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b ${
      scrolled ? 'shadow-md border-[#DCE5EB]' : 'border-[#E5EBEF]'
    }`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity */}
        <Logo onClick={() => handleNavClick('home')} />

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13.5px] font-semibold text-[#061D36]">
          {/* Home Link with Teal Active Indicator */}
          <button
            onClick={() => handleNavClick('home')}
            className={`relative py-2 transition-colors hover:text-[#078A87] ${
              activeSection === 'home' ? 'text-[#078A87]' : 'text-[#061D36]'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#078A87] rounded-full" />
            )}
          </button>

          {/* Pathway Link */}
          <button
            onClick={() => handleNavClick('pathway-choice')}
            className={`flex items-center gap-1.5 py-2 transition-colors hover:text-[#078A87] ${
              activeSection === 'pathway-choice' ? 'text-[#078A87]' : 'text-[#061D36]'
            }`}
          >
            <GitFork className="w-3.5 h-3.5 text-[#078A87]" />
            <span>Choose Path</span>
          </button>

          {/* Training Programmes with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setTrainingDropdownOpen(true)}
            onMouseLeave={() => setTrainingDropdownOpen(false)}
          >
            <button
              onClick={() => {
                onSelectTrack('growth');
                handleNavClick('solutions');
                onOpenTraining();
              }}
              className={`flex items-center gap-1 py-2 hover:text-[#078A87] transition-colors ${
                currentTrack === 'growth' ? 'text-[#078A87]' : ''
              }`}
            >
              <span>Training Programmes</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-transform" />
            </button>

            {/* Dropdown Menu */}
            {trainingDropdownOpen && (
              <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-[#DCE5EB] p-2 text-left space-y-1">
                  <button 
                    onClick={() => {
                      onSelectTrack('growth');
                      onOpenTraining();
                      setTrainingDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#F5F8FA] flex items-start gap-2.5 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#078A87] mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#061D36]">Listing Generation Systems</div>
                      <div className="text-[11px] text-[#586B7A]">Mandate acquisition pipelines</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => {
                      onSelectTrack('growth');
                      onOpenTraining();
                      setTrainingDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#F5F8FA] flex items-start gap-2.5 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#078A87] mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#061D36]">Conversion & Follow-Up</div>
                      <div className="text-[11px] text-[#586B7A]">Nurturing buyer & seller leads</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => {
                      onSelectTrack('growth');
                      onOpenTraining();
                      setTrainingDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#F5F8FA] flex items-start gap-2.5 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#078A87] mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#061D36]">Business Systems & Operations</div>
                      <div className="text-[11px] text-[#586B7A]">Scalable agent operating rhythm</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('approach')}
            className={`py-2 transition-colors hover:text-[#078A87] ${
              activeSection === 'approach' ? 'text-[#078A87]' : 'text-[#061D36]'
            }`}
          >
            Business Systems
          </button>

          <button
            onClick={() => {
              onSelectTrack('compliance');
              handleNavClick('solutions');
            }}
            className={`py-2 transition-colors hover:text-[#078A87] ${
              currentTrack === 'compliance' ? 'text-[#078A87]' : 'text-[#061D36]'
            }`}
          >
            Compliance Services
          </button>

          <button
            onClick={() => handleNavClick('resources')}
            className={`py-2 transition-colors hover:text-[#078A87] ${
              activeSection === 'resources' ? 'text-[#078A87]' : 'text-[#061D36]'
            }`}
          >
            Resources
          </button>

          <button
            onClick={() => handleNavClick('approach')}
            className="py-2 transition-colors hover:text-[#078A87] text-[#061D36]"
          >
            About
          </button>

          <button
            onClick={() => onOpenContact()}
            className="py-2 transition-colors hover:text-[#078A87] text-[#061D36]"
          >
            Contact
          </button>

          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 text-[#061D36] hover:text-[#078A87] hover:bg-[#F5F8FA] rounded-full transition-colors ml-1"
            title="Search resources, topics, and compliance guidelines"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </nav>

        {/* Right: Pathway Indicator + Training Portal Button */}
        <div className="flex items-center gap-3">
          {/* Active Track Badge on Desktop */}
          {currentTrack !== 'all' && (
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E6F4F3] border border-[#078A87]/30 text-[11px] font-bold text-[#078A87]">
              <span>Focus: {currentTrack === 'growth' ? 'Sales Growth' : 'Compliance'}</span>
              <button 
                onClick={() => onSelectTrack('all')} 
                className="hover:text-[#061D36] ml-1 text-slate-400"
                title="Clear filter"
              >
                ×
              </button>
            </div>
          )}

          <button
            onClick={onOpenPortal}
            className="hidden sm:inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-[13.5px] font-semibold px-4 py-2 rounded-md transition-all shadow-sm"
          >
            <span>Training Portal</span>
            <User className="w-3.5 h-3.5 fill-white" />
          </button>

          {/* Mobile Search Toggle */}
          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-[#061D36] hover:text-[#078A87] rounded-md"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#061D36] hover:text-[#078A87] rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE5EB] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-left">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 text-sm font-semibold flex items-center justify-between ${
                activeSection === 'home' ? 'text-[#078A87]' : 'text-[#061D36]'
              }`}
            >
              <span>Home</span>
              {activeSection === 'home' && <span className="w-2 h-2 rounded-full bg-[#078A87]" />}
            </button>

            <button
              onClick={() => handleNavClick('pathway-choice')}
              className="py-2 text-sm font-semibold text-[#078A87] flex items-center justify-between"
            >
              <span>Choose Your Focus Path</span>
              <GitFork className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onSelectTrack('growth');
                handleNavClick('solutions');
                onOpenTraining();
              }}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87] flex items-center justify-between"
            >
              <span>Training Programmes (Sales)</span>
              <GraduationCap className="w-4 h-4 text-[#078A87]" />
            </button>

            <button
              onClick={() => handleNavClick('approach')}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87]"
            >
              Business Systems
            </button>

            <button
              onClick={() => {
                onSelectTrack('compliance');
                handleNavClick('solutions');
                onOpenCompliance();
              }}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87] flex items-center justify-between"
            >
              <span>Compliance Services (RMCP)</span>
              <ShieldCheck className="w-4 h-4 text-[#078A87]" />
            </button>

            <button
              onClick={() => handleNavClick('resources')}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87]"
            >
              Resources & Videos
            </button>

            <button
              onClick={() => handleNavClick('challenge')}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87]"
            >
              The Challenge
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="py-2 text-sm font-semibold text-[#061D36] hover:text-[#078A87] flex items-center justify-between"
            >
              <span>Contact Us</span>
              <Phone className="w-4 h-4 text-[#078A87]" />
            </button>

            <div className="pt-3 border-t border-[#DCE5EB]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-2.5 px-4 bg-[#078A87] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <span>Training Portal</span>
                <User className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
