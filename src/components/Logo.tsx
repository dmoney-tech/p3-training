import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', onClick }) => {
  const isDark = variant === 'dark'; // dark background (e.g. in footer)

  return (
    <div 
      className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {/* Geometric House & P3 Monogram Icon */}
      <div className="relative w-9 h-9 flex-shrink-0">
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105 duration-200"
        >
          {/* House Left Structure (Midnight Navy / Ice Blue in dark mode) */}
          <path 
            d="M5 20L20 6L25 10.4V7H29V13.8L35 19H30V33C30 33.6 29.6 34 29 34H11C10.4 34 10 33.6 10 33V20H5Z" 
            fill={isDark ? "#FFFFFF" : "#061D36"} 
          />
          {/* Stylized Modern Teal Dynamic Roof Cut / Corner (Brand Teal #078A87) */}
          <path 
            d="M20 6L35 19H29V32H22V16L15 22V10.4L20 6Z" 
            fill="#078A87" 
          />
          {/* Door / Window Accent Cutout */}
          <rect 
            x="14" 
            y="23" 
            width="6" 
            height="11" 
            rx="1" 
            fill={isDark ? "#061D36" : "#FFFFFF"} 
          />
          <circle cx="26" cy="22" r="2" fill="#16B8AC" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-tight">
        <span className={`text-[19px] font-bold tracking-tight font-['Manrope'] ${isDark ? 'text-white' : 'text-[#061D36]'}`}>
          P3 Training
        </span>
        <span className={`text-[11px] font-medium tracking-normal ${isDark ? 'text-[#8BA1B5]' : 'text-[#586B7A]'}`}>
          Real Estate in SA
        </span>
      </div>
    </div>
  );
};
