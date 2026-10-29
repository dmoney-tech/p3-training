import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowUp, Facebook, Linkedin, Youtube, Twitter, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenTraining: () => void;
  onOpenCompliance: () => void;
  onOpenPortal: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenTraining,
  onOpenCompliance,
  onOpenPortal,
  onOpenContact,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041527] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Column 1: Brand & Community (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" onClick={scrollToTop} />

            <p className="text-xs sm:text-[13px] text-[#8BA1B5] leading-relaxed max-w-sm pt-1">
              Built from the Real Estate in SA Facebook Group community and delivered through P3 Training. Practical training, structured systems and compliance support for South African property professionals.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#078A87] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook Real Estate in SA Community"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#078A87] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#078A87] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF3038] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Manrope'] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#8BA1B5]">
              <li>
                <button 
                  onClick={() => onNavigateSection('home')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTraining} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Training Programmes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('approach')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Business Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCompliance} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Compliance Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('resources')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('approach')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  About P3
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (2.5 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Manrope'] tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#8BA1B5]">
              <li>
                <button 
                  onClick={onOpenTraining} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Training Programmes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('approach')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Business Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCompliance} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  RMCP Support
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCompliance} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  PAIA and POPIA
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCompliance} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Compliance Information
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPortal} 
                  className="text-[#16B8AC] hover:underline font-semibold"
                >
                  Training Portal →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Manrope'] tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#8BA1B5]">
              <li>
                <button 
                  onClick={() => setActiveLegalModal('privacy')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveLegalModal('terms')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveLegalModal('disclaimer')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveLegalModal('compliance')} 
                  className="hover:text-[#16B8AC] transition-colors"
                >
                  Compliance Information
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8BA1B5]">
          <div className="text-left">
            © 2026 P3 Training | Real Estate in SA. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8BA1B5]/80 text-center md:text-right">
              Built by P3 Training | Training Systems | A South African Property Training Platform
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#078A87] text-white flex items-center justify-center transition-colors flex-shrink-0"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Info Modal */}
      {activeLegalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveLegalModal(null)}
        >
          <div 
            className="bg-white text-[#172B3A] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-left"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-1 rounded-md text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#078A87] font-bold text-xs uppercase mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>South African Regulatory Notice</span>
            </div>

            <h3 className="text-xl font-bold font-['Manrope'] text-[#061D36] mb-3 capitalize">
              {activeLegalModal === 'privacy' && 'POPIA Privacy Policy'}
              {activeLegalModal === 'terms' && 'Terms & Conditions'}
              {activeLegalModal === 'disclaimer' && 'Professional Advice Disclaimer'}
              {activeLegalModal === 'compliance' && 'FIC & PPRA Compliance Overview'}
            </h3>

            <div className="text-xs text-[#586B7A] space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>In accordance with the Protection of Personal Information Act (POPIA), P3 Training safeguards all learner, client, and agency information collected during training, webinars, and compliance engagements.</p>
                  <p>Personal data is strictly processed to provide educational coursework, facilitate FIC compliance verification, and deliver contracted materials. Information is never sold to third parties.</p>
                </>
              )}
              {activeLegalModal === 'terms' && (
                <>
                  <p>All training curriculums, scripts, presentation slide decks, and operational SOP templates supplied by P3 Training are proprietary intellectual property designed for South African property practitioners.</p>
                  <p>Enrolment grants a single-seat or single-agency license for internal operational implementation. Unauthorised external distribution or reproduction is strictly prohibited.</p>
                </>
              )}
              {activeLegalModal === 'disclaimer' && (
                <>
                  <p>P3 Training provides operational education, business coaching, and compliance frameworks. Our templates are created by South African property and compliance specialists to facilitate FIC and PPRA readiness.</p>
                  <p>Practitioners should consult their firm's designated compliance officer and legal advisors for specific jurisdictional legal interpretations.</p>
                </>
              )}
              {activeLegalModal === 'compliance' && (
                <>
                  <p>South African estate agencies are classified as Accountable Institutions under the Financial Intelligence Centre Act (FIC Act). Each agency must adopt, implement, and maintain a Risk Management and Compliance Programme (RMCP).</p>
                  <p>P3 Training assists agencies with RMCP development, employee training obligations, PAIA manuals, and audit readiness support.</p>
                </>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-[#DCE5EB] flex justify-end">
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#078A87] text-white text-xs font-bold rounded-lg hover:bg-[#067572]"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
