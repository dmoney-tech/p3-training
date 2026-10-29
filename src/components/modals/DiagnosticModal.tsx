import React from 'react';
import { X, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreSolutions: () => void;
}

const PROBLEMS = [
  {
    title: 'Inconsistent Listing Flow',
    problem: 'Relying on ad-hoc referrals or passive waiting creates erratic income cycles with "feast or famine" months.',
    solution: 'Install a 90-minute daily proactive prospecting rhythm with structured valuation scripts and pre-listing dossiers.',
    impact: 'Predictable 3–5 exclusive mandates every 30 days.'
  },
  {
    title: 'Weak Follow-Up',
    problem: 'Up to 70% of potential sellers list with the second or third agent simply because the first agent stopped following up after one phone call.',
    solution: 'Deploy a multi-touchpoint 14-day and 60-day relationship sequence providing market micro-reports and genuine value.',
    impact: 'Doubled conversion of long-cycle seller prospects.'
  },
  {
    title: 'Poor Conversion Rates',
    problem: 'Treating mandate presentations as informal chats rather than a structured value consultation leads to cut commissions and lost listings.',
    solution: 'Use our tested 4-step comparative market presentation that quantifies your unique marketing horsepower.',
    impact: 'Over 80% exclusive sole-mandate capture rate.'
  },
  {
    title: 'Operational Gaps',
    problem: 'Without clear checklists, file audits, and standard operating procedures, agents drown in administrative clutter.',
    solution: 'Standardise onboarding, listing launches, open house workflows, and client transaction checklists.',
    impact: 'Saves 10+ hours per week per agent on admin.'
  },
  {
    title: 'Compliance Risks',
    problem: 'Under RMCP, PAIA, and POPIA, South African estate agencies face severe financial penalties and license suspensions for missing audit trails.',
    solution: 'Implement practical plug-and-play compliance templates, FICA verification processes, and an inspection-ready document repository.',
    impact: '100% inspection confidence without operational drag.'
  }
];

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose, onExploreSolutions }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#061D36] p-6 text-white text-left relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#16B8AC] block mb-1">
            Systemic Diagnosis
          </span>
          <h3 className="text-xl font-bold font-['Manrope']">
            Why Most South African Real Estate Agents Stay Stuck
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Hard work alone does not fix broken business mechanics. Here is the operational diagnosis and how P3 Training solves each bottleneck.
          </p>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-left">
          {PROBLEMS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-[#DCE5EB] bg-[#F5F8FA]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-[#078A87] text-white text-[11px] font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-[#061D36] font-['Manrope']">
                  {item.title}
                </h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs mt-3">
                <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-100 text-slate-700">
                  <div className="flex items-center gap-1.5 text-red-600 font-bold mb-1 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5" />
                    The Hidden Trap:
                  </div>
                  <p>{item.problem}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-slate-700">
                  <div className="flex items-center gap-1.5 text-[#078A87] font-bold mb-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    The P3 Systemic Fix:
                  </div>
                  <p>{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F5F8FA] border-t border-[#DCE5EB] flex items-center justify-between">
          <button 
            onClick={onClose}
            className="text-xs text-[#586B7A] hover:text-[#061D36] font-medium"
          >
            Close Diagnosis
          </button>
          <button 
            onClick={() => {
              onClose();
              onExploreSolutions();
            }}
            className="py-2.5 px-5 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <span>Explore P3 Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
