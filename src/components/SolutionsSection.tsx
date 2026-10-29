import React from 'react';
import { ArrowRight, Check, CheckSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { UserTrack } from './PathForkSection';

interface SolutionsSectionProps {
  currentTrack?: UserTrack;
  onViewTraining: () => void;
  onEnquireCompliance: () => void;
  onSelectTrack?: (track: UserTrack) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  currentTrack = 'all',
  onViewTraining,
  onEnquireCompliance,
  onSelectTrack,
}) => {
  return (
    <section id="solutions" className="bg-[#F5F8FA] py-16 sm:py-20 border-b border-[#DCE5EB]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#078A87] font-['Inter'] block mb-2">
              OUR SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#061D36] tracking-tight leading-tight font-['Manrope'] mb-2.5">
              Training Programmes & Compliance Services
            </h2>
            <p className="text-sm sm:text-base text-[#586B7A]">
              Practical learning and operational support designed for South African property professionals.
            </p>
          </div>

          {onSelectTrack && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#586B7A]">Filter Solutions:</span>
              <button
                onClick={() => onSelectTrack('all')}
                className={`px-3 py-1 rounded-md font-semibold ${
                  currentTrack === 'all' ? 'bg-[#061D36] text-white' : 'bg-white text-[#586B7A] border border-[#DCE5EB]'
                }`}
              >
                Both (2)
              </button>
              <button
                onClick={() => onSelectTrack('growth')}
                className={`px-3 py-1 rounded-md font-semibold ${
                  currentTrack === 'growth' ? 'bg-[#078A87] text-white' : 'bg-white text-[#586B7A] border border-[#DCE5EB]'
                }`}
              >
                Training (Sales)
              </button>
              <button
                onClick={() => onSelectTrack('compliance')}
                className={`px-3 py-1 rounded-md font-semibold ${
                  currentTrack === 'compliance' ? 'bg-[#078A87] text-white' : 'bg-white text-[#586B7A] border border-[#DCE5EB]'
                }`}
              >
                Compliance (RMCP)
              </button>
            </div>
          )}
        </div>

        {/* 2 Wide Service Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT CARD: TRAINING PROGRAMMES */}
          <div className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col sm:flex-row text-left ${
            currentTrack === 'growth'
              ? 'border-2 border-[#078A87] shadow-lg ring-2 ring-[#078A87]/15'
              : 'border-[#DCE5EB] shadow-xs hover:shadow-md'
          }`}>
            
            {/* Left Content Area (~58%) */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Active Focus Pill */}
                {currentTrack === 'growth' && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F4F3] text-[#078A87] text-[11px] font-bold uppercase mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Your Selected Priority Pathway</span>
                  </div>
                )}

                {/* Title Lockup with Teal Square Icon */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#078A87] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <CheckSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#061D36] font-['Manrope']">
                    Training Programmes
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#586B7A] leading-relaxed mb-6">
                  Develop the skills, systems and professional knowledge you need to grow a more consistent and profitable property business.
                </p>

                {/* 4 Checklist Items */}
                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Listing generation systems</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Conversion and follow-up strategies</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Productivity and professional skills</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Business structure and performance</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onViewTraining}
                  className="inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm group"
                >
                  <span>View Training Programmes</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Photographic Area (~42%) */}
            <div className="relative w-full sm:w-[200px] md:w-[220px] lg:w-[210px] xl:w-[230px] flex-shrink-0 h-56 sm:h-auto overflow-hidden bg-slate-100">
              <img 
                src="/assets/images/training_woman.jpg" 
                alt="South African property professional working on laptop" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/40 to-transparent hidden sm:block pointer-events-none" />
            </div>

          </div>

          {/* RIGHT CARD: COMPLIANCE SERVICES */}
          <div className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col sm:flex-row text-left ${
            currentTrack === 'compliance'
              ? 'border-2 border-[#078A87] shadow-lg ring-2 ring-[#078A87]/15'
              : 'border-[#DCE5EB] shadow-xs hover:shadow-md'
          }`}>
            
            {/* Left Content Area (~58%) */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Active Focus Pill */}
                {currentTrack === 'compliance' && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F4F3] text-[#078A87] text-[11px] font-bold uppercase mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Your Selected Priority Pathway</span>
                  </div>
                )}

                {/* Title Lockup with Teal Square Icon */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#078A87] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#061D36] font-['Manrope']">
                    Compliance Services
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#586B7A] leading-relaxed mb-6">
                  Practical support for RMCP, PAIA and POPIA, aligned to your business operations.
                </p>

                {/* 5 Checklist Items */}
                <ul className="space-y-2.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>RMCP development and implementation</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>PAIA manuals and operational alignment</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>POPIA documentation and processes</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Evidence and record organisation</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B3A] font-medium">
                    <Check className="w-4 h-4 text-[#078A87] flex-shrink-0 stroke-[2.5]" />
                    <span>Inspection readiness support</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onEnquireCompliance}
                  className="inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm group"
                >
                  <span>Enquire About Compliance Support</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Photographic Area (~42%) */}
            <div className="relative w-full sm:w-[200px] md:w-[220px] lg:w-[210px] xl:w-[230px] flex-shrink-0 h-56 sm:h-auto overflow-hidden bg-slate-100">
              <img 
                src="/assets/images/compliance_docs.jpg" 
                alt="Real estate compliance audit documentation and clipboard" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/40 to-transparent hidden sm:block pointer-events-none" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
