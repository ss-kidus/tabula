import React, { useRef, useState, useEffect } from 'react';
import { AppScreen, CanvasModule } from '../types';
import { CanvasService } from '../services/mockBackend';

interface CanvasScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const CanvasScreen: React.FC<CanvasScreenProps> = ({ onNavigate }) => {
  // --- STATE ---
  const [modules, setModules] = useState<CanvasModule[]>([]);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  
  // Dragging State
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const [draggedModuleId, setDraggedModuleId] = useState<string | null>(null);
  const [moduleDragOffset, setModuleDragOffset] = useState({ x: 0, y: 0 });

  // Load modules on mount
  useEffect(() => {
    const unsubscribe = CanvasService.subscribeToModules((data) => {
        setModules(data);
    });
    return () => unsubscribe();
  }, []);

  // --- HANDLERS ---

  // 1. Canvas Panning
  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    // If we are dragging a module, do not pan
    if (draggedModuleId) return;
    
    setIsDraggingCanvas(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  // 2. Module Dragging
  const handleModuleMouseDown = (e: React.MouseEvent, mod: CanvasModule) => {
    e.stopPropagation(); // Stop canvas pan
    setDraggedModuleId(mod.id);
    
    // Calculate offset so we drag from where we clicked, not top-left
    // Account for zoom if necessary, but here assuming 1:1 for simplicity in prototype
    setModuleDragOffset({
        x: e.clientX - mod.x,
        y: e.clientY - mod.y
    });
  };

  // 3. Global Move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingCanvas) {
        setPan({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    } else if (draggedModuleId) {
        const x = e.clientX - moduleDragOffset.x;
        const y = e.clientY - moduleDragOffset.y;
        
        // Optimistic Local Update
        setModules(prev => prev.map(m => m.id === draggedModuleId ? { ...m, x, y } : m));
    }
  };

  // 4. Global Up
  const handleMouseUp = () => {
    if (draggedModuleId) {
        // Sync to "Backend"
        const mod = modules.find(m => m.id === draggedModuleId);
        if (mod) CanvasService.updateModulePosition(mod.id, mod.x, mod.y);
    }
    setIsDraggingCanvas(false);
    setDraggedModuleId(null);
  };

  return (
    <div className="bg-stone-light text-stone-900 antialiased overflow-hidden h-screen w-full selection:bg-primary/20">
      
      {/* Floating Headers (Replaces Top Bar) */}
      <div className="absolute top-6 left-6 z-50 pointer-events-none">
          {/* Session Info Pill */}
          <div className="pointer-events-auto flex items-center gap-3 bg-white/80 backdrop-blur-xl pl-4 pr-2 py-2 rounded-2xl shadow-ceramic border border-white/50 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col">
                  <h1 className="text-sm font-bold tracking-tight text-stone-900">Q3 Design Review</h1>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Live Editing</span>
              </div>
              <button className="size-8 rounded-xl bg-stone-100 hover:bg-stone-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
          </div>
      </div>

      <div className="absolute top-6 right-6 z-50 pointer-events-none flex flex-col gap-4 items-end">
           {/* Collaborators Pill */}
          <div className="pointer-events-auto flex -space-x-3 p-2 bg-white/80 backdrop-blur-xl rounded-full shadow-ceramic border border-white/50">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=3')` }}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=4')` }}></div>
              <button className="w-10 h-10 rounded-full border-2 border-white bg-stone-900 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-sm">person_add</span>
              </button>
          </div>

          {/* Minimap (Floating) */}
          <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-white/50 shadow-ceramic rounded-2xl w-32 h-44 p-2 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-full h-full bg-stone-100 rounded-xl relative overflow-hidden">
                  {/* Simplified Minimap representation */}
                  {modules.map(m => (
                      <div 
                        key={m.id}
                        className="absolute w-2 h-2 bg-stone-400 rounded-full"
                        style={{ 
                            left: `${(m.x + 1000) / 30}%`, // Rough mapping
                            top: `${(m.y + 1000) / 30}%`
                        }}
                      />
                  ))}
                  {/* Viewport Box */}
                  <div 
                    className="absolute border-2 border-primary rounded-lg bg-primary/5 w-12 h-8"
                    style={{
                        left: `${(-pan.x + 1000) / 30}%`,
                        top: `${(-pan.y + 1000) / 30}%`
                    }}
                  ></div>
              </div>
          </div>
      </div>

      {/* Infinite Canvas Surface */}
      <div 
          className={`flex-1 w-full h-full relative overflow-hidden bg-[#FDFCF8] group/canvas ${isDraggingCanvas ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
      >
        {/* Infinite Pattern - Dotted */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#161618 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
            transform: `translate(${pan.x % 40}px, ${pan.y % 40}px)` // Parallax effect
        }}></div>

        {/* Content Container (Pannable) */}
        <div 
          className="absolute origin-top-left transition-transform duration-0 ease-out will-change-transform"
          style={{ 
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
          }}
        >
          {/* RENDER MODULES */}
          {modules.map((mod) => (
              <div
                key={mod.id}
                onMouseDown={(e) => handleModuleMouseDown(e, mod)}
                className="absolute z-10 hover:z-50"
                style={{
                    left: mod.x,
                    top: mod.y,
                    cursor: draggedModuleId === mod.id ? 'grabbing' : 'grab'
                }}
              >
                  {/* Render based on type */}
                  {mod.type === 'NOTE' && (
                      <div className="w-80 bg-white rounded-3xl shadow-ceramic hover:shadow-ceramic-hover transition-shadow duration-300 border border-stone-100 select-none">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4 pointer-events-none">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-cover bg-center ring-2 ring-white" style={{ backgroundImage: `url('${mod.author?.avatar}')` }}></div>
                                <span className="text-sm font-bold text-stone-900">{mod.author?.name}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Note</span>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight text-stone-900 mb-3">{mod.content.title}</h3>
                            <p className="text-stone-600 text-base font-medium leading-relaxed">
                            {mod.content.body}
                            </p>
                        </div>
                        <div className="px-6 pb-6 flex gap-2">
                            <button className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-900 border border-stone-200 flex items-center gap-2 transition-colors">
                            <span>👍</span> {mod.content.likes}
                            </button>
                        </div>
                      </div>
                  )}

                  {mod.type === 'IMAGE' && (
                      <div className="w-96 bg-white rounded-3xl shadow-ceramic-hover ring-4 ring-primary/10 transition-all duration-300 select-none">
                        <div className="p-3">
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl mb-4 relative group/image overflow-hidden bg-stone-200 border border-stone-100">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-mono text-xs font-bold tracking-widest">{mod.content.src}</div>
                            </div>
                            <div className="px-3 pb-2">
                            <div className="flex justify-between items-start pointer-events-none">
                                <div>
                                <p className="text-stone-900 text-lg font-bold leading-tight tracking-tight">{mod.content.title}</p>
                                <p className="text-stone-500 text-sm mt-1 font-medium">{mod.content.caption}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                      </div>
                  )}

                   {mod.type === 'POLL' && (
                      <div className="w-80 bg-white rounded-3xl shadow-ceramic hover:shadow-ceramic-hover transition-all duration-300 border border-stone-100 select-none">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-4 text-primary bg-primary/5 w-fit px-3 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[18px]">poll</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Vote</span>
                            </div>
                            <h4 className="text-stone-900 text-lg font-bold mb-6">{mod.content.question}</h4>
                            <div className="space-y-4">
                                {mod.content.options.map((opt: any, i: number) => (
                                    <div key={i} className="relative">
                                        <div className="flex justify-between text-xs font-bold mb-2 z-10 relative text-stone-900">
                                        <span>{opt.label}</span>
                                        <span>{opt.val}%</span>
                                        </div>
                                        <div className="w-full bg-stone-100 rounded-xl h-10 relative overflow-hidden flex items-center cursor-pointer hover:bg-stone-200 transition-colors">
                                        <div className="absolute left-0 top-0 bottom-0 bg-primary/20 w-[65%]"></div>
                                        <span className="relative z-10 pl-4 text-sm font-bold text-stone-900">Option</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center">
                            <div className="flex -space-x-2">
                                {[6,7,8].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 bg-cover" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${i}')` }}></div>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-stone-400">{mod.content.votes} votes</span>
                            </div>
                        </div>
                      </div>
                  )}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanvasScreen;