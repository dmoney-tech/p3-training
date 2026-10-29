import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, CheckCircle2, Sparkles, SlidersHorizontal, BookOpen, FileCheck } from 'lucide-react';

export type UserTrack = 'all' | 'growth' | 'compliance';

interface PathForkSectionProps {
  currentTrack: UserTrack;
  onSelectTrack: (track: UserTrack) => void;
  onOpenTraining: () => void;
  onOpenCompliance: () => void;
  onOpenDiagnostic: () => void;
}

export const PathForkSection: React.FC<PathForkSectionProps> = ({
  currentTrack,
  onSelectTrack,
  onOpenTraining,
  onOpenCompliance,
  onOpenDiagnostic,
}) => {
  return (
    <section id="pathway-choice" className="bg-white py-14 sm:py-18 border-b border-[#DCE5EB] relative overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#078A87] via-[#16B8AC] to-[#061D36]" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F4F3] text-[#078A87] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Choose Your Priority</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061D36] tracking-tight leading-tight font-['Manrope'] mb-2">
              Where Does Your Business Need Focus?
            </h2>
            <p className="text-sm sm:text-base text-[#586B7A] leading-relaxed">
              Instead of wading through everything, choose the path that matches your most pressing goal right now. We'll tailor your experience immediately.
            </p>
          </div>

          {/* Quick Track Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F5F8FA] border border-[#DCE5EB] rounded-xl self-start md:self-auto flex-shrink-0">
            <button
              onClick={() => onSelectTrack('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTrack === 'all'
                  ? 'bg-[#061D36] text-white shadow-xs'
                  : 'text-[#586B7A] hover:text-[#061D36]'
              }`}
            >
              Full Overview
            </button>
            <button
              onClick={() => onSelectTrack('growth')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentTrack === 'growth'
                  ? 'bg-[#078A87] text-white shadow-xs'
                  : 'text-[#586B7A] hover:text-[#061D36]'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Sales & Listings</span>
            </button>
            <button
              onClick={() => onSelectTrack('compliance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentTrack === 'compliance'
                  ? 'bg-[#078A87] text-white shadow-xs'
                  : 'text-[#586B7A] hover:text-[#061D36]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compliance & RMCP</span>
            </button>
          </div>
        </div>

        {/* The Two Fork Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10">
          
          {/* PATH A: Sales Growth & Listings */}
          <div 
            onClick={() => onSelectTrack('growth')}
            className={`rounded-2xl p-7 sm:p-9 transition-all cursor-pointer border-2 relative flex flex-col justify-between group ${
              currentTrack === 'growth'
                ? 'bg-gradient-to-br from-[#061D36] to-[#0B2B4B] text-white border-[#16B8AC] shadow-xl ring-2 ring-[#16B8AC]/20'
                : 'bg-white hover:bg-[#F5F8FA] text-[#172B3A] border-[#DCE5EB] hover:border-[#078A87] shadow-sm'
            }`}
          >
            {/* Header / Badge */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                  currentTrack === 'growth' 
                    ? 'bg-[#16B8AC]/20 text-[#16B8AC]' 
                    : 'bg-[#E6F4F3] text-[#078A87]'
                }`}>
                  Track 01 · Revenue & Mandates
                </span>
                <span className={`text-xs font-medium ${
                  currentTrack === 'growth' ? 'text-white/60' : 'text-[#586B7A]'
                }`}>
                  For Practitioners & Team Leaders
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  currentTrack === 'growth'
                    ? 'bg-[#16B8AC] text-[#061D36]'
                    : 'bg-[#078A87] text-white'
                }`}>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold font-['Manrope'] leading-snug ${
                    currentTrack === 'growth' ? 'text-white' : 'text-[#061D36]'
                  }`}>
                    "I Want to Generate Predictable Listings & Master Conversion"
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    currentTrack === 'growth' ? 'text-white/80' : 'text-[#586B7A]'
                  }`}>
                    Overcome inconsistent commission months. Implement daily prospecting routines, proven mandate presentation scripts, and automated follow-up cadences.
                  </p>
                </div>
              </div>

              {/* What you get */}
              <div className={`mt-6 pt-5 border-t space-y-2.5 ${
                currentTrack === 'growth' ? 'border-white/10' : 'border-[#DCE5EB]'
              }`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">
                  Core Solved Bottlenecks:
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'growth' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>Unstructured prospecting & erratic listing generation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'growth' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>Losing warm seller leads due to weak 14-day follow-up</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'growth' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>Converting open listings into exclusive, committed sole mandates</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-7 mt-6 flex items-center justify-between">
              <span className={`text-xs font-bold flex items-center gap-2 ${
                currentTrack === 'growth' ? 'text-[#16B8AC]' : 'text-[#078A87]'
              }`}>
                <span>{currentTrack === 'growth' ? 'Active Focus Selected' : 'Choose Growth Pathway'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {currentTrack === 'growth' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenTraining();
                  }}
                  className="px-4 py-2 bg-[#16B8AC] hover:bg-[#13a499] text-[#061D36] text-xs font-bold rounded-lg shadow-sm"
                >
                  View Programmes
                </button>
              )}
            </div>
          </div>

          {/* PATH B: Compliance & Risk Management */}
          <div 
            onClick={() => onSelectTrack('compliance')}
            className={`rounded-2xl p-7 sm:p-9 transition-all cursor-pointer border-2 relative flex flex-col justify-between group ${
              currentTrack === 'compliance'
                ? 'bg-gradient-to-br from-[#061D36] to-[#0B2B4B] text-white border-[#16B8AC] shadow-xl ring-2 ring-[#16B8AC]/20'
                : 'bg-white hover:bg-[#F5F8FA] text-[#172B3A] border-[#DCE5EB] hover:border-[#078A87] shadow-sm'
            }`}
          >
            {/* Header / Badge */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                  currentTrack === 'compliance' 
                    ? 'bg-[#16B8AC]/20 text-[#16B8AC]' 
                    : 'bg-[#E6F4F3] text-[#078A87]'
                }`}>
                  Track 02 · Regulatory & Operations
                </span>
                <span className={`text-xs font-medium ${
                  currentTrack === 'compliance' ? 'text-white/60' : 'text-[#586B7A]'
                }`}>
                  For Principals, Agency Owners & Admins
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  currentTrack === 'compliance'
                    ? 'bg-[#16B8AC] text-[#061D36]'
                    : 'bg-[#061D36] text-white'
                }`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold font-['Manrope'] leading-snug ${
                    currentTrack === 'compliance' ? 'text-white' : 'text-[#061D36]'
                  }`}>
                    "I Need to Fix RMCP, FIC Compliance & Agency Systems"
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    currentTrack === 'compliance' ? 'text-white/80' : 'text-[#586B7A]'
                  }`}>
                    Protect your agency license. Implement compliant RMCP manuals, PAIA and POPIA documentation, client file audit checklists, and PPRA inspection readiness.
                  </p>
                </div>
              </div>

              {/* What you get */}
              <div className={`mt-6 pt-5 border-t space-y-2.5 ${
                currentTrack === 'compliance' ? 'border-white/10' : 'border-[#DCE5EB]'
              }`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">
                  Core Solved Bottlenecks:
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'compliance' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>Outdated or non-existent RMCP documentation for FIC audits</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'compliance' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>POPIA client personal data liability & consent trail gaps</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                    currentTrack === 'compliance' ? 'text-[#16B8AC]' : 'text-[#078A87]'
                  }`} />
                  <span>Disorganised transaction files creating audit & inspection panic</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-7 mt-6 flex items-center justify-between">
              <span className={`text-xs font-bold flex items-center gap-2 ${
                currentTrack === 'compliance' ? 'text-[#16B8AC]' : 'text-[#078A87]'
              }`}>
                <span>{currentTrack === 'compliance' ? 'Active Focus Selected' : 'Choose Compliance Pathway'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {currentTrack === 'compliance' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCompliance();
                  }}
                  className="px-4 py-2 bg-[#16B8AC] hover:bg-[#13a499] text-[#061D36] text-xs font-bold rounded-lg shadow-sm"
                >
                  Enquire Support
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Contextual Tailored Pathway Roadmap when a track is active */}
        {currentTrack !== 'all' && (
          <div className="rounded-2xl p-6 sm:p-8 bg-[#F5F8FA] border border-[#DCE5EB] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DCE5EB]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#078A87] block mb-1">
                  Tailored 3-Stage Implementation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#061D36] font-['Manrope']">
                  {currentTrack === 'growth' 
                    ? 'Your Roadmap to Consistent Listings & Higher Mandate Conversions' 
                    : 'Your Roadmap to Audit-Proof Agency Compliance & Systemised Operations'}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectTrack('all')}
                  className="text-xs text-[#586B7A] hover:text-[#061D36] underline"
                >
                  Reset to Full Overview
                </button>
                {currentTrack === 'growth' ? (
                  <button
                    onClick={onOpenTraining}
                    className="px-4 py-2 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5"
                  >
                    <span>Start Training Intake</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenCompliance}
                    className="px-4 py-2 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5"
                  >
                    <span>Request Compliance File Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {currentTrack === 'growth' ? (
                <>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      01
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">Pipeline Diagnosis</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Identify where leads leak in your area, calculate your actual conversion ratios, and establish your daily 90-minute prospecting power block.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      02
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">Mandate Presentation System</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Deploy our tested comparative market valuation dossier and sole-mandate value proposition to sign exclusive mandates at full commission.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      03
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">Automated Follow-Up Cadence</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Set up multi-channel WhatsApp and email nurture sequences that revive cold prospects and turn long-term sellers into predictable transactions.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      01
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">FIC & RMCP Gap Analysis</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Review your current agency practices against Financial Intelligence Centre directives and draft an agency-specific RMCP.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      02
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">PAIA & POPIA Manuals</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Produce compliant PAIA manuals, client data collection notices, and electronic consent records aligned to the Information Regulator.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-[#DCE5EB] shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F3] text-[#078A87] font-bold text-xs flex items-center justify-center mb-3">
                      03
                    </div>
                    <h4 className="text-sm font-bold text-[#061D36] mb-1">Inspection-Ready Repository</h4>
                    <p className="text-xs text-[#586B7A] leading-relaxed">
                      Organise client verification files, agent training records, and compliance officer oversight logs so audits are frictionless.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
