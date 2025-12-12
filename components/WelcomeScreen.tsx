import React from 'react';
import { AppScreen } from '../types';

interface WelcomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between group/design-root overflow-hidden bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display">
      {/* Ambient Light & Texture Layers */}
      <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuACSITwNDD3zjVsfUKjZyOYZQTmC6l7S4BrUZZUGXdeRW3OZ-Lv4oZoP37arlUrhfKhITwkSo038Kg8RMgujohemVce0lg2QNtjTQr5GeRN7JG7XivWvL2Cjmsw0ldbeSVXgevDCc79rGCa6RkD_thQCZbdtgKRorwLiM5HzkOdhN-wQvli-5tyDW9_6JSp2ndWJvhAbP6oAW-lFomz77j4QN1Fo2T2CDpUdJeVZmFJgSRMM-sMK03omVbfgyyyBfkdH0REQH9M0ZY')] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay opacity-50"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-white/20 to-transparent dark:from-primary/10 dark:via-transparent dark:to-transparent pointer-events-none z-0 blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 w-full flex flex-col items-center pt-16 px-6 animate-fade-in">
        <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-white/5 shadow-ceramic ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary !text-[32px]">layers</span>
        </div>
        <h1 className="text-[#111318] dark:text-white tracking-tight text-[42px] font-bold leading-none text-center drop-shadow-sm">
          TABULA
        </h1>
        <p className="text-[#111318]/60 dark:text-white/60 text-lg font-normal leading-relaxed pt-3 text-center tracking-wide">
          Talk less. Do more.
        </p>
      </div>

      {/* Main Visual: The "Surface" Preview */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-8 py-4">
        {/* Background Glow */}
        <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        {/* Porcelain Card Representation */}
        <div className="relative w-full max-w-[320px] aspect-[3/4] bg-white dark:bg-[#1a202c] rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 cursor-default">
          {/* Abstract UI elements inside the card */}
          <div className="absolute inset-0 p-6 flex flex-col gap-4">
            {/* Top "Nav" area */}
            <div className="flex justify-between items-center opacity-50">
              <div className="w-8 h-8 rounded-full bg-background-light dark:bg-white/10"></div>
              <div className="w-24 h-2 rounded-full bg-background-light dark:bg-white/10"></div>
            </div>
            {/* Content Blocks (Modules) */}
            <div className="mt-4 w-full h-32 rounded-xl bg-background-light dark:bg-white/5 p-4 flex flex-col gap-3 relative overflow-hidden group">
              <div className="w-1/2 h-3 rounded-md bg-gray-200 dark:bg-white/10"></div>
              <div className="w-3/4 h-3 rounded-md bg-gray-100 dark:bg-white/5"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary !text-sm">mic</span>
              </div>
            </div>
            <div className="w-full flex-1 rounded-xl border border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-300 dark:text-white/20 !text-4xl">add</span>
            </div>
          </div>
          {/* Glossy overlay for ceramic feel */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent pointer-events-none opacity-50"></div>
        </div>
      </div>

      {/* Bottom Action Section */}
      <div className="relative z-10 w-full px-6 pb-12 pt-4">
        <div className="flex flex-col gap-6 items-center">
          {/* Primary Action Button */}
          <button 
            onClick={() => onNavigate(AppScreen.ONBOARDING)}
            className="group w-full max-w-[480px] h-14 bg-primary hover:bg-[#0f4bc4] active:scale-[0.98] text-white text-lg font-bold tracking-wide rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all duration-300 ease-out relative overflow-hidden"
          >
            <span className="relative z-10">Enter the Surface</span>
            <span className="material-symbols-outlined relative z-10 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            {/* Button sheen animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer w-[200%] h-full"></div>
          </button>
          {/* Footer Text */}
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest">
            Infinite Collaboration OS
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
        .animate-shimmer {
            animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;