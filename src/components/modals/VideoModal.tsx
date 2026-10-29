import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2, Download, Share2 } from 'lucide-react';

export interface VideoData {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  thumbnail: string;
  takeaways: string[];
}

interface VideoModalProps {
  video: VideoData | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28);
  const [copied, setCopied] = useState(false);

  if (!video) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0B1E33] border border-white/10 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl text-white transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#061D36]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#E3F2FD]/20 text-[#16B8AC]">
              {video.category}
            </span>
            <span className="text-sm text-white/60">Duration: {video.duration}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-black w-full overflow-hidden group">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'brightness-90' : 'brightness-60'}`}
          />

          {/* Centered Play/Pause Overlay Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center m-auto w-16 h-16 rounded-full bg-[#FF3038] hover:bg-[#e0262e] text-white shadow-xl transform transition-transform group-hover:scale-110 active:scale-95"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-white" />
            ) : (
              <Play className="w-7 h-7 fill-white ml-1" />
            )}
          </button>

          {/* Playing Status Indicator */}
          {isPlaying && (
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Streaming in 1080p HD
            </div>
          )}

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col gap-2">
            {/* Scrubber Bar */}
            <div 
              className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
            >
              <div 
                className="h-full bg-[#078A87] rounded-full relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/80 pt-1">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)} 
                  className="hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)} 
                  className="hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span>02:14 / {video.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded text-white/90">P3 Training SA</span>
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Information & Takeaways */}
        <div className="p-6 bg-[#061D36]">
          <h3 className="text-xl font-bold text-white mb-2 font-['Manrope']">
            {video.title}
          </h3>
          <p className="text-sm text-white/70 mb-5 leading-relaxed">
            {video.description}
          </p>

          <div className="border-t border-white/10 pt-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#16B8AC] mb-3">
              Key Practical Takeaways for Real Estate Agents:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-white/80 mb-5">
              {video.takeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#078A87] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-xs font-medium hover:bg-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? 'Link Copied!' : 'Share Resource'}
            </button>
            <div className="flex items-center gap-2">
              <a 
                href="/assets/images/training_woman.jpg" 
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#078A87] hover:bg-[#067572] text-xs font-semibold text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Action Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
