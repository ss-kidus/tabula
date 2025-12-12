import React from 'react';
import { AppScreen } from '../types';
import { MODULES, ESSENTIAL_MODULES } from '../constants';

interface ModuleLibraryScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const ModuleLibraryScreen: React.FC<ModuleLibraryScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-light dark:bg-stone-dark font-display text-stone-900 dark:text-stone-100 antialiased overflow-x-hidden min-h-screen pb-32">
      
      {/* Main Content Area - Headerless */}
      <main className="max-w-5xl mx-auto p-6 pt-16">
        
        <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Module Foundry</h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md">Drag tools directly from the foundry onto your active surfaces.</p>
            
            {/* Prominent Search */}
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">manage_search</span>
                </div>
                <input 
                    className="block w-full p-4 pl-12 text-base text-stone-900 dark:text-white bg-white dark:bg-surface-dark rounded-xl shadow-ceramic border border-gray-100 dark:border-white/5 focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400" 
                    placeholder="Search for calculators, whiteboards, AI..." 
                    type="text" 
                />
            </div>
        </div>

        {/* Categories Pills */}
        <div className="w-full overflow-x-auto no-scrollbar py-2 mb-8">
            <div className="flex gap-3 min-w-max">
            <button className="px-6 py-3 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold text-sm tracking-wide transition-transform active:scale-95">
                All Tools
            </button>
            {['Academia', 'Enterprise', 'Lounge', 'Synthetic'].map(cat => (
                <button key={cat} className="px-6 py-3 rounded-xl bg-white dark:bg-surface-dark text-stone-600 dark:text-stone-300 border border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary font-medium text-sm tracking-wide transition-all active:scale-95">
                    {cat}
                </button>
            ))}
            </div>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">New Arrival</h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-stone-900 shadow-2xl min-h-[300px] group cursor-pointer border border-white/10">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVsUDQZTKh5tBGAWuYYOqgR7Z9kO7Wpp-9jrqUlAZaiG0uIwDGDt1mUeeIxZi6PlN6Xx1GeyYKzFAxcjVD9bVTd8PMjbNRxOn43qYjpDx1ASqV1H9BGDNFeD_2wTywdTvuTytA03CK1BZwYAw3Btqoe1taGO9xTQAFaH5glcb6kV8n0J0X0xu5oG-BW30j-PefjXY2SiuHVEtbhiGdnVPuqp6rVhRLz-8KZkvRndC31atROcycP5q6W9cry5lMuYgHVvC3LQOY4uQ')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest text-black bg-primary rounded-lg uppercase">Synthetic AI</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Quantum Canvas</h3>
                  <p className="text-gray-300 font-medium max-w-lg">Generative visual surfaces for collaborative dreaming. Describe a UI and it appears.</p>
                </div>
                <button className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-2xl shadow-lg hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Module Grid */}
        <section className="mb-12">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Productivity Core</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MODULES.map((module) => (
                <div key={module.id} className="group relative flex flex-col justify-between bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-ceramic border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-48 cursor-grab active:cursor-grabbing">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">{module.icon}</span>
                        </div>
                        {module.category === 'Pro' && <span className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded">PRO</span>}
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">{module.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* Essentials Row */}
        <section>
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Lounge & Vibe</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
            {ESSENTIAL_MODULES.map((item) => (
                <div key={item.id} className={`min-w-[220px] bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-ceramic border border-gray-100 dark:border-white/5 flex flex-col justify-between h-40 relative overflow-hidden group`}>
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <span className={`text-[10px] font-bold ${item.accent} uppercase tracking-wider`}>{item.category}</span>
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-stone-900 transition-colors">{item.icon}</span>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="font-bold text-xl leading-tight mb-2">{item.title}</h3>
                        <div className="h-1 w-8 bg-stone-200 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModuleLibraryScreen;