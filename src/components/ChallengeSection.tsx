import React from 'react';
import { ArrowRight, ListChecks, Users, BarChart3, Settings, ShieldAlert, Sparkles } from 'lucide-react';
import { UserTrack } from './PathForkSection';

interface ChallengeSectionProps {
  currentTrack?: UserTrack;
  onOpenDiagnostic: () => void;
  onSelectTrack?: (track: UserTrack) => void;
}

const CHALLENGES = [
  {
    title: 'Inconsistent Listing Flow',
    description: 'Unstructured prospecting can make listings unpredictable.',
    icon: ListChecks,
    track: 'growth' as const,
  },
  {
    title: 'Weak Follow-Up',
    description: 'Valuable opportunities often get lost.',
    icon: Users,
    track: 'growth' as const,
  },
  {
    title: 'Poor Conversion Rates',
    description: "Without a clear process, leads don't move forward.",
    icon: BarChart3,
    track: 'growth' as const,
  },
  {
    title: 'Operational Gaps',
    description: 'Lack of systems can create inefficiency and confusion.',
    icon: Settings,
    track: 'compliance' as const,
  },
  {
    title: 'Compliance Risks',
    description: 'RMCP, PAIA and POPIA require proper processes and documentation.',
    icon: ShieldAlert,
    track: 'compliance' as const,
  },
];

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  currentTrack = 'all',
  onOpenDiagnostic,
  onSelectTrack,
}) => {
  return (
    <section id="challenge" className="bg-[#F5F8FA] py-16 sm:py-20 border-b border-[#DCE5EB]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block: Title & Description */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#078A87] font-['Inter'] block mb-2">
              THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#061D36] tracking-tight leading-tight font-['Manrope'] mb-4">
              Why Most Agents Stay Stuck
            </h2>
            <p className="text-sm sm:text-[15px] text-[#586B7A] leading-relaxed mb-6 max-w-md">
              Many property professionals work hard but still struggle to achieve consistent results. These common challenges can hold your business back.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm group"
              >
                <span>Understand the Problems</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side: The 5 Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {CHALLENGES.map((card, idx) => {
                const Icon = card.icon;
                const isRelevantToTrack = currentTrack === 'all' || card.track === currentTrack;

                return (
                  <div
                    key={idx}
                    onClick={onOpenDiagnostic}
                    className={`rounded-xl p-4 sm:p-4.5 border transition-all duration-200 text-left flex flex-col justify-between group cursor-pointer ${
                      isRelevantToTrack
                        ? 'bg-white border-[#DCE5EB] hover:border-[#078A87] shadow-xs hover:shadow-md'
                        : 'bg-white/60 border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div>
                      {/* Circular Pale Teal Icon Container */}
                      <div className="w-10 h-10 rounded-full bg-[#E6F4F3] text-[#078A87] flex items-center justify-center mb-4 group-hover:bg-[#078A87] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Card Title */}
                      <h3 className="text-[14px] font-bold text-[#061D36] mb-2 font-['Manrope'] leading-snug group-hover:text-[#078A87] transition-colors">
                        {card.title}
                      </h3>
                      
                      {/* Card Description */}
                      <p className="text-[12px] text-[#586B7A] leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-[#078A87]">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">View analysis</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
