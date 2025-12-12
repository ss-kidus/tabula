import React, { useRef } from 'react';
import { AppScreen } from '../types';

interface LandingPageProps {
  onNavigate: (screen: AppScreen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display scroll-smooth">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuACSITwNDD3zjVsfUKjZyOYZQTmC6l7S4BrUZZUGXdeRW3OZ-Lv4oZoP37arlUrhfKhITwkSo038Kg8RMgujohemVce0lg2QNtjTQr5GeRN7JG7XivWvL2Cjmsw0ldbeSVXgevDCc79rGCa6RkD_thQCZbdtgKRorwLiM5HzkOdhN-wQvli-5tyDW9_6JSp2ndWJvhAbP6oAW-lFomz77j4QN1Fo2T2CDpUdJeVZmFJgSRMM-sMK03omVbfgyyyBfkdH0REQH9M0ZY')] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay opacity-30"></div>

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="p-4 rounded-2xl bg-white dark:bg-white/5 shadow-ceramic ring-1 ring-black/5 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary !text-[40px]">layers</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center">
            TABULA
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium tracking-wide text-center max-w-lg">
            Talk less. Do more. <br/>
            <span className="text-primary">The Infinite Collaboration OS.</span>
          </p>
        </div>

        {/* The Navigator Orbs */}
        <div className="absolute bottom-12 flex items-center gap-6">
            <button 
                onClick={handleExplore}
                className="group flex flex-col items-center gap-2 cursor-pointer"
            >
                <div className="w-14 h-14 rounded-full border-2 border-[#111318] dark:border-white flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl group-hover:animate-bounce">arrow_downward</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Explore</span>
            </button>

            <button 
                onClick={() => onNavigate(AppScreen.AUTH)}
                className="group flex flex-col items-center gap-2 cursor-pointer"
            >
                <div className="w-14 h-14 rounded-full bg-[#111318] dark:bg-white text-white dark:text-[#111318] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Enter</span>
            </button>
        </div>
      </section>

      {/* Feature Section (The Journey) */}
      <section ref={scrollRef} className="relative z-10 min-h-screen py-24 px-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">The Surface Collection</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="aspect-[3/4] rounded-3xl bg-white dark:bg-[#1e2532] shadow-ceramic p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4 text-primary">dashboard_customize</span>
                        <h3 className="text-2xl font-bold mb-2">Infinite Canvas</h3>
                        <p className="text-gray-500">Break free from linear feeds. Organize thought in 2D space.</p>
                    </div>
                    <div className="h-40 rounded-xl bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
                         <div className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-lg"></div>
                         <div className="absolute top-12 left-12 w-20 h-20 bg-primary/20 rounded-lg backdrop-blur-sm"></div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="aspect-[3/4] rounded-3xl bg-white dark:bg-[#1e2532] shadow-ceramic p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 delay-100">
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4 text-primary">hub</span>
                        <h3 className="text-2xl font-bold mb-2">Social Constellations</h3>
                        <p className="text-gray-500">Connect with others through shared surfaces and module stacks.</p>
                    </div>
                    <div className="h-40 rounded-xl bg-gray-50 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary absolute top-1/2 left-1/2"></div>
                        <div className="w-32 h-32 rounded-full border border-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="aspect-[3/4] rounded-3xl bg-white dark:bg-[#1e2532] shadow-ceramic p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 delay-200">
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4 text-primary">extension</span>
                        <h3 className="text-2xl font-bold mb-2">Modular Foundry</h3>
                        <p className="text-gray-500">Drag and drop tools. Calc, Polls, Music. Everything is an object.</p>
                    </div>
                    <div className="h-40 rounded-xl bg-gray-50 dark:bg-gray-800 relative overflow-hidden p-4">
                        <div className="w-full h-8 bg-white dark:bg-gray-700 rounded mb-2 shadow-sm"></div>
                        <div className="w-2/3 h-8 bg-white dark:bg-gray-700 rounded shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 text-center text-gray-400 text-sm">
        <p>© 2024 TABULA OS. Designed for the Ceramic Future.</p>
      </footer>
    </div>
  );
};

export default LandingPage;