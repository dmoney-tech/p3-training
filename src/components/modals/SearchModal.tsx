import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen, Shield, GraduationCap, Video } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const SEARCH_ITEMS = [
  {
    title: 'Listing Generation Systems',
    type: 'Training Programme',
    sectionId: 'solutions',
    icon: GraduationCap,
    desc: 'Structured routines for outbound prospecting, seller qualification, and mandate presentations.'
  },
  {
    title: 'Conversion & Follow-Up Frameworks',
    type: 'Business System',
    sectionId: 'approach',
    icon: BookOpen,
    desc: 'Step-by-step follow-up schedules that revive cold leads and convert mandates.'
  },
  {
    title: 'RMCP Development & Implementation',
    type: 'Compliance Service',
    sectionId: 'solutions',
    icon: Shield,
    desc: 'Risk Management and Compliance Programme aligned to FIC directives for SA real estate.'
  },
  {
    title: 'PAIA & POPIA Manuals & Protection',
    type: 'Compliance Service',
    sectionId: 'solutions',
    icon: Shield,
    desc: 'Mandatory documentation and privacy compliance protocols for property agencies.'
  },
  {
    title: 'All Relationships Have One Law',
    type: 'Video Insight',
    sectionId: 'resources',
    icon: Video,
    desc: 'Core psychological and relational principles behind sustained property deal-making.'
  },
  {
    title: '4 Follow-Up Mistakes That Cost You Deals',
    type: 'Video Insight',
    sectionId: 'resources',
    icon: Video,
    desc: 'Critical leaks in the sales pipeline and how to plug them with structured communication.'
  },
  {
    title: 'Why Most Agents Stay Stuck',
    type: 'Diagnostic',
    sectionId: 'challenge',
    icon: BookOpen,
    desc: 'Analysis of the 5 operational pitfalls holding South African agents back.'
  }
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigateSection }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#DCE5EB] bg-[#F5F8FA]">
          <Search className="w-5 h-5 text-[#078A87]" />
          <input 
            type="text"
            placeholder="Search training, compliance, videos, systems..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#172B3A] placeholder-[#586B7A] focus:outline-none text-base"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-[#586B7A] hover:text-[#172B3A] hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-[#DCE5EB]/60">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-sm text-[#586B7A]">
              No resources found for "{query}". Try "RMCP", "Listing", or "Follow-Up".
            </div>
          ) : (
            filtered.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={i}
                  onClick={() => {
                    onNavigateSection(item.sectionId);
                    onClose();
                  }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#F5F8FA] cursor-pointer group transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E6F4F3] text-[#078A87] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-[#061D36] group-hover:text-[#078A87] transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#078A87] bg-[#E6F4F3] px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#586B7A] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#586B7A] group-hover:text-[#078A87] group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-[#F5F8FA] border-t border-[#DCE5EB] flex items-center justify-between text-xs text-[#586B7A]">
          <span>Showing {filtered.length} property resources</span>
          <span className="text-[11px]">Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
