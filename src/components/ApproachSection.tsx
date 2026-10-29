import React from 'react';
import { ArrowRight, Target, Users, Settings, Shield } from 'lucide-react';

interface ApproachSectionProps {
  onLearnMore: () => void;
}

const APPROACH_STEPS = [
  {
    step: '1.',
    title: 'Generate Opportunities',
    description: 'Structured prospecting and listing generation routines.',
    icon: Target,
    highlight: false,
  },
  {
    step: '2.',
    title: 'Improve Conversion',
    description: 'Follow-up systems and practical conversion frameworks.',
    icon: Users,
    highlight: false,
  },
  {
    step: '3.',
    title: 'Structure Operations',
    description: 'Clear workflows, accountability and better execution.',
    icon: Settings,
    highlight: true, // In reference image, Card 3 is filled with Brand Teal!
  },
  {
    step: '4.',
    title: 'Strengthen Compliance',
    description: 'RMCP, PAIA and POPIA documentation and operational support.',
    icon: Shield,
    highlight: false,
  },
];

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="approach" className="relative bg-[#061D36] text-white py-16 sm:py-20 overflow-hidden">
      
      {/* Background Architectural Image with Heavy Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/approach_building.jpg" 
          alt="Modern South African commercial building" 
          className="w-full h-full object-cover object-right opacity-25 mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061D36] via-[#061D36]/90 to-[#061D36]/75" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16B8AC] font-['Inter'] block mb-2">
              THE P3 APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Manrope'] mb-3">
              Turn Everyday Activities<br />
              into Repeatable Business Systems.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              P3 Training provides a structured approach to help you generate opportunities, improve conversion, organise your operations and strengthen compliance.
            </p>
          </div>

          <div className="text-left lg:text-right flex-shrink-0">
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-md group"
            >
              <span>Learn More About Our Approach</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Process Cards Row connected by arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch relative">
          {APPROACH_STEPS.map((card, idx) => {
            const Icon = card.icon;
            const isHighlight = card.highlight;

            return (
              <div key={idx} className="relative flex items-center">
                
                {/* The Process Card */}
                <div 
                  className={`w-full h-full rounded-xl p-6 sm:p-7 text-left flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200 shadow-lg ${
                    isHighlight
                      ? 'bg-[#078A87] text-white border border-[#16B8AC]/40'
                      : 'bg-[#082845] text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Icon near top */}
                    <div className="mb-5">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                        isHighlight ? 'bg-white/20 text-white' : 'bg-white/10 text-white'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Step Number + Title */}
                    <h3 className="text-base sm:text-lg font-bold font-['Manrope'] mb-2 leading-snug">
                      <span className="mr-1.5">{card.step}</span>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isHighlight ? 'text-white/90' : 'text-white/70'
                    }`}>
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Right Connector Arrow (Visible only on desktop between cards 0, 1, 2) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3.5 z-20 w-7 h-7 rounded-full bg-[#061D36] border border-white/20 items-center justify-center text-white/70 shadow-sm pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
