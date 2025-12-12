import React from 'react';
import { AppScreen } from '../types';

interface NavigationDockProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const NavigationDock: React.FC<NavigationDockProps> = ({ currentScreen, onNavigate }) => {
  // Only show dock on app screens
  if ([AppScreen.LANDING, AppScreen.AUTH, AppScreen.WELCOME].includes(currentScreen)) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto">
      {/* The Haptic Monolith */}
      <div className="flex items-center gap-1 p-2 rounded-2xl bg-[#1a1a1a] dark:bg-white/10 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:gap-3 hover:px-4">
        
        <NavButton 
            active={currentScreen === AppScreen.HOME} 
            icon="grid_view" 
            label="Home"
            onClick={() => onNavigate(AppScreen.HOME)} 
        />
        
        <NavButton 
            active={currentScreen === AppScreen.CANVAS} 
            icon="dashboard_customize" 
            label="Canvas"
            onClick={() => onNavigate(AppScreen.CANVAS)} 
        />

        {/* Separator */}
        <div className="w-[2px] h-6 bg-white/10 mx-1 rounded-full"></div>

        <NavButton 
            active={currentScreen === AppScreen.MODULE_LIBRARY} 
            icon="extension" 
            label="Modules"
            onClick={() => onNavigate(AppScreen.MODULE_LIBRARY)} 
        />
        
        <NavButton 
            active={false} 
            icon="search" 
            label="Search"
            onClick={() => {}} 
        />
        
         <button className="w-10 h-10 ml-1 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center shadow-inner active:scale-90 transition-transform">
             <div className="w-full h-full rounded-xl bg-[url('https://i.pravatar.cc/150?u=3')] bg-cover bg-center opacity-90 hover:opacity-100"></div>
         </button>

      </div>
    </div>
  );
};

interface NavButtonProps {
    active: boolean;
    icon: string;
    label: string;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ active, icon, label, onClick }) => (
    <button 
        onClick={onClick}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${active ? 'bg-primary text-white shadow-[0_0_15px_rgba(230,81,0,0.4)]' : 'hover:bg-white/10 text-white/60 hover:text-white'}`}
    >
        <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">{icon}</span>
        
        {/* Indicator for Active State */}
        {active && <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"></div>}
    </button>
);

export default NavigationDock;