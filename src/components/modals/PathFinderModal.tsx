import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, HelpCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import { UserTrack } from '../PathForkSection';

interface PathFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrack: (track: UserTrack) => void;
}

export const PathFinderModal: React.FC<PathFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectTrack,
}) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'agent' | 'principal' | null>(null);
  const [salesStruggle, setSalesStruggle] = useState<boolean | null>(null);
  const [complianceReady, setComplianceReady] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setRole(null);
    setSalesStruggle(null);
    setComplianceReady(null);
    onClose();
  };

  // Determine recommendation
  let recommendedTrack: 'growth' | 'compliance' = 'growth';
  if (role === 'principal' && complianceReady === false) {
    recommendedTrack = 'compliance';
  } else if (salesStruggle === true) {
    recommendedTrack = 'growth';
  } else if (complianceReady === false) {
    recommendedTrack = 'compliance';
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleReset}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#061D36] p-6 text-white relative">
          <button 
            onClick={handleReset}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#078A87]/30 text-[#16B8AC] text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Pathway Diagnostic</span>
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            Find Your Ideal Business Path
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Answer 3 quick questions to identify your highest-leverage priority in South African real estate.
          </p>
        </div>

        {/* Step Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#078A87] block">
                Question 1 of 3 · Your Role
              </span>
              <h4 className="text-base font-bold text-[#061D36]">
                What is your primary operating position?
              </h4>
              <div className="space-y-2.5">
                <button
                  onClick={() => { setRole('agent'); setStep(2); }}
                  className="w-full p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87]">
                      Property Practitioner / Candidate Agent
                    </div>
                    <div className="text-xs text-[#586B7A]">
                      Focused on winning listings, closing sales, and personal commission growth.
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#586B7A] group-hover:text-[#078A87] group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => { setRole('principal'); setStep(2); }}
                  className="w-full p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87]">
                      Principal / Agency Owner / Compliance Officer
                    </div>
                    <div className="text-xs text-[#586B7A]">
                      Responsible for agency operations, team performance, and statutory compliance.
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#586B7A] group-hover:text-[#078A87] group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#078A87] block">
                Question 2 of 3 · Revenue Stability
              </span>
              <h4 className="text-base font-bold text-[#061D36]">
                Do you experience "feast-or-famine" commission cycles or struggle to secure exclusive sole mandates?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setSalesStruggle(true); setStep(3); }}
                  className="p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-center transition-all group"
                >
                  <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87] mb-1">
                    Yes, Frequently
                  </div>
                  <div className="text-[11px] text-[#586B7A]">
                    Listings are unpredictable and follow-up is manual.
                  </div>
                </button>

                <button
                  onClick={() => { setSalesStruggle(false); setStep(3); }}
                  className="p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-center transition-all group"
                >
                  <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87] mb-1">
                    No, Sales are Solid
                  </div>
                  <div className="text-[11px] text-[#586B7A]">
                    Prospecting and mandate conversions are predictable.
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#078A87] block">
                Question 3 of 3 · Statutory Readiness
              </span>
              <h4 className="text-base font-bold text-[#061D36]">
                Does your agency have a formal, written RMCP aligned to FIC directives and up-to-date POPIA/PAIA files?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setComplianceReady(true); setStep(4); }}
                  className="p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-center transition-all group"
                >
                  <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87] mb-1">
                    Yes, Fully Compliant
                  </div>
                  <div className="text-[11px] text-[#586B7A]">
                    Files are audit-ready and verified.
                  </div>
                </button>

                <button
                  onClick={() => { setComplianceReady(false); setStep(4); }}
                  className="p-4 rounded-xl border border-[#DCE5EB] hover:border-[#078A87] hover:bg-[#F5F8FA] text-center transition-all group"
                >
                  <div className="text-sm font-bold text-[#061D36] group-hover:text-[#078A87] mb-1">
                    Unsure / Needs Work
                  </div>
                  <div className="text-[11px] text-[#586B7A]">
                    We lack documentation or fear an audit.
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F4F3] text-[#078A87] flex items-center justify-center mx-auto mb-4">
                {recommendedTrack === 'growth' ? (
                  <TrendingUp className="w-7 h-7" />
                ) : (
                  <ShieldCheck className="w-7 h-7" />
                )}
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#078A87] block mb-1">
                Diagnostic Outcome
              </span>

              <h4 className="text-xl font-bold text-[#061D36] font-['Manrope'] mb-2">
                {recommendedTrack === 'growth'
                  ? 'Your Priority: Sales & Listing Systems Track'
                  : 'Your Priority: Compliance & RMCP Risk Track'}
              </h4>

              <p className="text-xs sm:text-sm text-[#586B7A] mb-6 leading-relaxed max-w-sm mx-auto">
                {recommendedTrack === 'growth'
                  ? 'Your fastest return on investment will come from systematising prospecting, installing the exclusive mandate presentation, and setting up automated client nurture.'
                  : 'Your agency faces statutory exposure under the FIC Act. Getting your RMCP documentation and client verification files in order will eliminate inspection risks immediately.'}
              </p>

              <button
                onClick={() => {
                  onSelectTrack(recommendedTrack);
                  handleReset();
                }}
                className="w-full py-3 px-5 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Activate This Tailored Pathway</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation within Modal */}
        {step > 1 && step < 4 && (
          <div className="px-6 py-3 bg-[#F5F8FA] border-t border-[#DCE5EB] flex items-center justify-between text-xs">
            <button
              onClick={() => setStep(step - 1)}
              className="text-[#586B7A] hover:text-[#061D36]"
            >
              ← Previous question
            </button>
            <span className="text-[#586B7A]">Step {step} of 3</span>
          </div>
        )}
      </div>
    </div>
  );
};
