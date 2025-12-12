import React from 'react';
import { AppScreen } from '../types';

interface OnboardingScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-screen w-full flex-col justify-between group/design-root overflow-hidden bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white selection:bg-primary selection:text-white">
      {/* Header / Top Bar */}
      <div className="flex items-center p-6 justify-end z-20">
        <button 
            onClick={() => onNavigate(AppScreen.HOME)}
            className="flex items-center justify-center rounded-full px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <p className="text-[#616f89] dark:text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Skip</p>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto px-6 relative z-10">
        {/* Typography Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-primary text-2xl">dashboard_customize</span>
          </div>
          <h1 className="text-[#111318] dark:text-white tracking-tight text-[40px] font-bold leading-[1.1] mb-4">
            The Surface
          </h1>
          <p className="text-[#616f89] dark:text-gray-400 text-lg font-medium leading-relaxed max-w-xs mx-auto">
            Communication has dimensions. Don't text, build.
          </p>
        </div>

        {/* Interactive Demo Area (The Infinite Surface) */}
        <div className="relative w-full aspect-[4/5] max-h-[460px] bg-white dark:bg-[#1a202c] rounded-3xl shadow-ceramic overflow-hidden border-[6px] border-white dark:border-[#2d3748] mx-auto mb-6 transform transition-transform">
          {/* Background Grid (Infinite Surface) */}
          <div 
            className="absolute inset-0 opacity-60 bg-[length:24px_24px]" 
            style={{
                backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)'
            }}
          ></div>

          {/* Ghost Modules (Context) */}
          <div className="absolute top-10 left-[-20px] w-32 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 opacity-50 transform -rotate-6"></div>
          <div className="absolute bottom-20 right-[-30px] w-40 h-32 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 opacity-50 transform rotate-3"></div>

          {/* The Hero Module (Interactive) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 bg-primary rounded-2xl shadow-xl shadow-primary/30 flex flex-col p-5 justify-between transform transition-transform hover:scale-105 cursor-grab active:cursor-grabbing group select-none">
              {/* Module Content */}
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white text-sm">person</span>
                </div>
                <span className="material-symbols-outlined text-white/60 text-lg group-hover:text-white transition-colors">more_horiz</span>
              </div>
              <div>
                <p className="text-white text-2xl font-bold tracking-tight mb-1">Hello World</p>
                <div className="h-1 w-12 bg-white/40 rounded-full"></div>
              </div>
              {/* Drag Hint Tooltip */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">drag_pan</span>
                Drag to place
              </div>
              {/* Touch Indicator (Visualizes interaction) */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md animate-pulse pointer-events-none"></div>
            </div>
          </div>

          {/* Gesture Hints overlay */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-6 pointer-events-none">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-xl animate-bounce">pinch</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Zoom</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-xl">open_with</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Pan</span>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="w-full pb-8 pt-2 z-20">
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Page Indicators */}
            <div className="flex w-full flex-row items-center justify-center gap-3">
              <div className="h-2 w-8 rounded-full bg-[#111318] dark:bg-white transition-all"></div>
              <div className="h-2 w-2 rounded-full bg-[#dbdfe6] dark:bg-gray-700"></div>
              <div className="h-2 w-2 rounded-full bg-[#dbdfe6] dark:bg-gray-700"></div>
              <div className="h-2 w-2 rounded-full bg-[#dbdfe6] dark:bg-gray-700"></div>
            </div>
            {/* Primary Action */}
            <button 
                onClick={() => onNavigate(AppScreen.HOME)}
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <span>Enter the Grid</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;