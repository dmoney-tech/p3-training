import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, ArrowRight, Clock, Award, BookOpen, Users } from 'lucide-react';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPortal: () => void;
}

const PROGRAMMES = [
  {
    title: 'Listing Generation Systems',
    subtitle: 'From Cold Outbound to Consistent Mandate Pipeline',
    duration: '6 Weeks (Self-paced & Live Coaching)',
    modules: [
      'The Area Specialist Prospecting Framework',
      'High-Impact Seller Qualification & Pre-Listing Packages',
      'The Value Proposition Mandate Presentation',
      'Overcoming Commission & Sole Mandate Objections'
    ]
  },
  {
    title: 'Conversion & Follow-Up Mastery',
    subtitle: 'Systematising Buyer & Seller Nurture Sequences',
    duration: '4 Weeks',
    modules: [
      'The 7-Day Intensive Buyer Follow-Up Protocol',
      'Reviving Stalled Seller Relationships',
      'WhatsApp & Email Communication Automations',
      'Closing Strategy & Offer Negotiation'
    ]
  },
  {
    title: 'Productivity & High-Performance Mindset',
    subtitle: 'Structuring the Daily Real Estate Operating Rhythm',
    duration: '3 Weeks',
    modules: [
      'The 90-Minute Daily Prospecting Power Block',
      'Calendar Ownership & Time Blocking Architecture',
      'Managing Administrative Overwhelm in Solitary Agency Work',
      'Energy Management & Performance Metrics'
    ]
  },
  {
    title: 'Business Structure & Scalability',
    subtitle: 'Building Systems for Team Leaders and Principals',
    duration: '8 Weeks',
    modules: [
      'Standard Operating Procedures (SOPs) for Agency Growth',
      'Onboarding & Mentoring High-Velocity Candidate Agents',
      'Pipeline Tracking & Revenue Predictability Dashboards',
      'FIC & PPRA Compliance Integration into Daily Work'
    ]
  }
];

export const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose, onOpenPortal }) => {
  const [selectedProg, setSelectedProg] = useState(0);

  if (!isOpen) return null;

  const current = PROGRAMMES[selectedProg];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#061D36] p-6 text-white text-left relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#078A87]/30 text-[#16B8AC] text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            P3 Training Programmes Curriculum
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            Structured Real Estate Programmes
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Practical skills, repeatable frameworks, and operational structures designed specifically for South African property professionals.
          </p>
        </div>

        {/* Programme Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#DCE5EB] bg-[#F5F8FA]">
          {PROGRAMMES.map((prog, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProg(idx)}
              className={`p-3 text-left transition-colors text-xs font-semibold border-b-2 ${
                selectedProg === idx 
                  ? 'border-[#078A87] text-[#078A87] bg-white' 
                  : 'border-transparent text-[#586B7A] hover:text-[#061D36]'
              }`}
            >
              <span className="block truncate">{prog.title}</span>
            </button>
          ))}
        </div>

        {/* Content Details */}
        <div className="p-6 overflow-y-auto flex-1 text-left">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="text-lg font-bold text-[#061D36] font-['Manrope']">
              {current.title}
            </h4>
            <span className="flex items-center gap-1.5 text-xs text-[#078A87] bg-[#E6F4F3] px-2.5 py-1 rounded-full font-medium">
              <Clock className="w-3.5 h-3.5" />
              {current.duration}
            </span>
          </div>

          <p className="text-xs text-[#586B7A] mb-5">
            {current.subtitle}
          </p>

          <div className="border border-[#DCE5EB] rounded-xl p-4 bg-[#F5F8FA] mb-6">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#061D36] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#078A87]" />
              Core Modules & Practical Deliverables:
            </h5>
            <div className="space-y-2.5">
              {current.modules.map((mod, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#172B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#078A87] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6 text-center text-xs">
            <div className="p-3 rounded-lg border border-[#DCE5EB] bg-white">
              <Award className="w-5 h-5 text-[#078A87] mx-auto mb-1" />
              <span className="font-semibold text-[#061D36] block">CPD Aligned</span>
              <span className="text-[10px] text-[#586B7A]">Verifiable hours</span>
            </div>
            <div className="p-3 rounded-lg border border-[#DCE5EB] bg-white">
              <Users className="w-5 h-5 text-[#078A87] mx-auto mb-1" />
              <span className="font-semibold text-[#061D36] block">Live Coaching</span>
              <span className="text-[10px] text-[#586B7A]">Weekly Q&A</span>
            </div>
            <div className="p-3 rounded-lg border border-[#DCE5EB] bg-white">
              <CheckCircle2 className="w-5 h-5 text-[#078A87] mx-auto mb-1" />
              <span className="font-semibold text-[#061D36] block">Templates & Scripts</span>
              <span className="text-[10px] text-[#586B7A]">Ready to deploy</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#DCE5EB]">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#586B7A] hover:text-[#061D36]"
            >
              Back to Homepage
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPortal();
              }}
              className="py-2.5 px-5 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Enrol in Programme via Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
