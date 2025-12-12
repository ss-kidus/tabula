import React from 'react';
import { AppScreen } from '../types';
import { SURFACES } from '../constants';

interface HomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-light dark:bg-stone-dark text-stone-900 dark:text-white font-display min-h-screen w-full flex flex-col selection:bg-primary/20">
      
      {/* Main Content - No Top Bar */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-16 pb-32">
        
        {/* Headerless Greeting & Search */}
        <div className="flex flex-col gap-8 mb-12">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2 text-stone-900 dark:text-white">
                        Good morning,<br />
                        <span className="text-gray-400 dark:text-gray-500">Architect.</span>
                    </h1>
                </div>
                <div className="flex gap-2">
                     <button className="size-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                     </button>
                </div>
            </div>

            {/* Integrated Search Bar */}
            <div className="relative group w-full max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                     <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input 
                    type="text" 
                    placeholder="Find a surface, file, or collaborator..." 
                    className="block w-full pl-14 pr-4 py-5 bg-white dark:bg-surface-dark rounded-2xl text-lg font-medium shadow-ceramic border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                    <button className="p-2 bg-gray-100 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-500">⌘K</button>
                </div>
            </div>
        </div>

        {/* Section: Recent */}
        <div className="flex items-center justify-between mb-6">
             <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">Active Surfaces</h2>
             <button className="text-primary text-sm font-bold hover:underline">View All</button>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Create New Card (Prominent) */}
            <div 
                onClick={() => onNavigate(AppScreen.CANVAS)}
                className="group relative bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-ceramic hover:shadow-ceramic-hover border-2 border-dashed border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center h-full min-h-[200px]"
            >
                 <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">add</span>
                 </div>
                 <h3 className="text-lg font-bold">Initialize New Surface</h3>
                 <p className="text-gray-400 text-sm mt-1">Start from scratch or a template</p>
            </div>

            {SURFACES.slice(0, 3).map((item) => (
                <div 
                    key={item.id}
                    onClick={() => onNavigate(AppScreen.CANVAS)}
                    className="group relative bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-ceramic hover:shadow-ceramic-hover border border-gray-100 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                    <div className="flex justify-between items-start mb-12">
                         <div className={`size-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${item.type === 'project' ? 'bg-black' : 'bg-gray-200 text-gray-600'}`}>
                            <span className="material-symbols-outlined text-[24px]">{item.icon || 'layers'}</span>
                         </div>
                         {item.statusColor && (
                             <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                Live
                             </div>
                         )}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                        <p className="text-gray-500 font-medium">{item.subtitle}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {item.collaborators.length > 0 ? (
                                item.collaborators.map((c, i) => (
                                    <div key={i} className="size-10 rounded-full border-4 border-white dark:border-surface-dark bg-gray-200 bg-cover shadow-sm" style={{backgroundImage: `url('${c}')`}}></div>
                                ))
                            ) : (
                                <div className="size-10 rounded-full border-4 border-white dark:border-surface-dark bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-bold">Me</div>
                            )}
                            <div className="size-10 rounded-full border-4 border-white dark:border-surface-dark bg-gray-50 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-gray-400 text-sm">add</span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">{item.updatedAt}</span>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Section: Archives */}
        <div className="mt-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Archives & Drafts</h2>
            <div className="space-y-3">
                {SURFACES.slice(3).map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400">
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-xs text-gray-400">{item.subtitle}</p>
                            </div>
                        </div>
                        <span className="text-gray-300 text-sm group-hover:translate-x-1 transition-transform material-symbols-outlined">arrow_forward</span>
                    </div>
                ))}
            </div>
        </div>

      </main>
    </div>
  );
};

export default HomeScreen;