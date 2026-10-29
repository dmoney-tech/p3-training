import React from 'react';
import { ArrowRight, Users, TrendingUp, GraduationCap, Shield, GitFork } from 'lucide-react';
import { UserTrack } from './PathForkSection';

interface HeroProps {
  onExploreTraining: () => void;
  onExploreCompliance: () => void;
  onChoosePath: () => void;
  onOpenPathFinder: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTraining,
  onExploreCompliance,
  onChoosePath,
  onOpenPathFinder,
}) => {
  return (
    <section id="home" className="relative bg-[#061D36] text-white overflow-hidden">
      {/* Background Architectural & Gradient Accents */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 relative z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy, CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-[11.5px] font-semibold text-white/80 tracking-[0.14em] uppercase font-['Inter']">
                ESTABLISHED 2018 | SERVING 11,000+ PROPERTY PROFESSIONALS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.12] tracking-tight font-['Manrope']">
              Build a More Structured,<br />
              <span className="text-[#16B8AC]">Consistent and Profitable</span><br />
              Property Business.
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-normal">
              P3 Training helps South African property professionals strengthen their business systems, improve listing and conversion processes, and implement practical compliance frameworks through structured training and support.
            </p>

            {/* Primary Action Choice Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onExploreTraining}
                  className="inline-flex items-center justify-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-sm font-semibold px-6 py-3 rounded-md transition-all shadow-md group"
                >
                  <span>Explore Training Programmes</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreCompliance}
                  className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 active:scale-[0.98] text-white text-sm font-medium px-6 py-3 rounded-md border border-white/30 hover:border-white/60 transition-all"
                >
                  Explore Compliance Services
                </button>
              </div>

              {/* Pathway Choice Callout */}
              <div className="flex items-center gap-3 pt-1 text-xs text-white/70">
                <button
                  onClick={onChoosePath}
                  className="inline-flex items-center gap-1.5 text-[#16B8AC] hover:text-white font-semibold underline underline-offset-4 transition-colors"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Choose Your Focus Path (Sales vs Compliance)</span>
                </button>
                <span className="text-white/40">·</span>
                <button
                  onClick={onOpenPathFinder}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Take 60s Diagnostic
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photograph (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="/assets/images/hero_professionals.jpg" 
                alt="South African property professionals collaborating on business systems" 
                className="w-full h-[320px] sm:h-[400px] lg:h-[420px] object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
              />
              {/* Subtle Edge Scrim for seamless blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D36]/80 via-transparent to-transparent pointer-events-none lg:hidden" />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#061D36] to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>

        </div>

        {/* Trust Indicators Strip (Integrated into bottom of hero) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Indicator 1 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white font-['Manrope'] leading-snug">
                  11,000+
                </div>
                <div className="text-xs text-white/70 font-medium">
                  Property Professionals
                </div>
              </div>
            </div>

            {/* Indicator 2 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white font-['Manrope'] leading-snug">
                  Since 2018
                </div>
                <div className="text-xs text-white/70 font-medium">
                  Trusted by the Industry
                </div>
              </div>
            </div>

            {/* Indicator 3 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white font-['Manrope'] leading-snug">
                  Practical
                </div>
                <div className="text-xs text-white/70 font-medium">
                  Training & Support
                </div>
              </div>
            </div>

            {/* Indicator 4 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white font-['Manrope'] leading-snug">
                  South African
                </div>
                <div className="text-xs text-white/70 font-medium">
                  Property Focus
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
