import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { VideoData } from './modals/VideoModal';

interface LearnAndGrowSectionProps {
  onSelectVideo: (video: VideoData) => void;
  onViewAllResources: () => void;
}

const VIDEOS: VideoData[] = [
  {
    id: 'vid-1',
    title: 'All Relationships Have One Law',
    description: 'Understand the key principle that influences every property relationship.',
    category: 'Relationships',
    duration: '8:24',
    thumbnail: '/assets/images/video_trainer.jpg',
    takeaways: [
      'The law of reciprocal commercial value in seller interactions',
      'Why pushing transactions too early breaks fiduciary trust',
      'How to position yourself as an trusted advisor rather than an anxious salesperson',
      'Scripts for setting mutual expectations during sole mandate discussions'
    ]
  },
  {
    id: 'vid-2',
    title: '4 Follow-Up Mistakes That Cost You Deals',
    description: 'Avoid common follow-up mistakes and keep more opportunities alive.',
    category: 'Sales & Conversion',
    duration: '7:18',
    thumbnail: '/assets/images/video_followup.jpg',
    takeaways: [
      'The danger of the passive "just checking in" phone call',
      'Deploying value-first micro-market updates instead of sales pitches',
      'Creating a structured 14-day WhatsApp follow-up cadence',
      'Reviving dormant buyer leads without appearing aggressive'
    ]
  },
  {
    id: 'vid-3',
    title: '5 Seller Pains and How to Address Them',
    description: 'Learn how to identify and address the real concerns of property sellers.',
    category: 'Listing Generation',
    duration: '6:45',
    thumbnail: '/assets/images/video_seller.jpg',
    takeaways: [
      'Deconstructing price anxiety in a fluctuating South African interest-rate environment',
      'Addressing fear of over-exposure and unqualified viewing traffic',
      'Explaining the risk of open mandates vs. exclusive sole marketing',
      'Framework for presenting realistic comparative market analyses'
    ]
  }
];

export const LearnAndGrowSection: React.FC<LearnAndGrowSectionProps> = ({
  onSelectVideo,
  onViewAllResources,
}) => {
  return (
    <section id="resources" className="bg-white py-16 sm:py-20 border-b border-[#DCE5EB]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#078A87] font-['Inter'] block mb-2">
              LEARN AND GROW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#061D36] tracking-tight leading-tight font-['Manrope'] mb-2.5">
              Practical Insights for Property Professionals
            </h2>
            <p className="text-sm sm:text-base text-[#586B7A]">
              Explore our latest videos and resources to learn, improve and apply practical strategies in your business.
            </p>
          </div>

          <div className="text-left sm:text-right flex-shrink-0">
            <button
              onClick={onViewAllResources}
              className="inline-flex items-center gap-2 bg-[#078A87] hover:bg-[#067572] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm group"
            >
              <span>View All Resources</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Video Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-start">
          {VIDEOS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectVideo(item)}
              className="group cursor-pointer text-left flex flex-col"
            >
              {/* 16:9 Video Thumbnail with Centered Red Play Button */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-4 shadow-sm border border-[#DCE5EB]/60">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Video Play Button (Red #FF3038 with White Triangle) */}
                <div className="absolute inset-0 m-auto w-12 h-8.5 rounded-lg bg-[#FF3038] group-hover:bg-[#e0262e] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>

                {/* Duration Badge in Lower Right Corner */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/85 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded tracking-tight">
                  {item.duration}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-[15px] sm:text-base font-bold text-[#061D36] group-hover:text-[#078A87] transition-colors leading-snug font-['Manrope'] mb-1.5">
                {item.title}
              </h3>

              <p className="text-xs text-[#586B7A] leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Pale Blue Category Tag */}
              <div>
                <span className="inline-block bg-[#E3F2FD] text-[#0277BD] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
