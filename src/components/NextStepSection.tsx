import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NextStepSectionProps {
  onExploreTraining: () => void;
  onContactUs: () => void;
}

export const NextStepSection: React.FC<NextStepSectionProps> = ({
  onExploreTraining,
  onContactUs,
}) => {
  return (
    <section id="contact" className="bg-[#061D36] text-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Unified 2-Area Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#061D36]">
          
          {/* Left Column: Photograph of modern building at sunset dusk (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-slate-900">
            <img 
              src="/assets/images/cta_building.jpg" 
              alt="Contemporary South African real estate property at dusk" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Scrim overlay blending into navy container */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D36] via-transparent to-transparent lg:hidden pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#061D36] to-transparent hidden lg:block pointer-events-none" />
          </div>

          {/* Right Column: Deep Navy Call To Action (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left bg-[#061D36]">
            
            <span className="text-xs font-bold uppercase tracking-wider text-[#16B8AC] font-['Inter'] block mb-2.5">
              TAKE THE NEXT STEP
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Manrope'] mb-4">
              Fix the System. Stabilise the Results.
            </h2>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl mb-8 font-normal">
              Whether you need training, a business system or compliance support, P3 Training can help you move forward with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreTraining}
                className="inline-flex items-center justify-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-md transition-all shadow-md group"
              >
                <span>Explore Training Programmes</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactUs}
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 active:scale-[0.98] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-md border border-white/35 hover:border-white/60 transition-all"
              >
                Contact Us
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
