import { User, CanvasModule } from '../types';

// --- MOCK DATABASE STATE ---
const MOCK_USER: User = {
    id: 'u1',
    name: 'Architect',
    email: 'architect@tabula.os',
    avatar: 'https://i.pravatar.cc/150?u=1'
};

let activeModules: CanvasModule[] = [
    {
        id: 'm1',
        type: 'NOTE',
        x: 60,
        y: 120,
        content: { title: 'Q3 Schematics', body: 'Reviewing the structural integrity vs ceramic material constraints. I think we need to thicken the base layer.', likes: 2 },
        author: { name: 'Sarah M.', avatar: 'https://i.pravatar.cc/150?u=5' }
    },
    {
        id: 'm2',
        type: 'IMAGE',
        x: 520,
        y: 160,
        content: { title: 'Render Proposal v2', src: 'RENDER_PREVIEW.JPG', caption: 'View from the north entrance.' },
        author: { name: 'Alex', avatar: 'https://i.pravatar.cc/150?u=3' }
    },
    {
        id: 'm3',
        type: 'POLL',
        x: 100,
        y: 440,
        content: { question: 'Material Finish?', options: [{label: 'Matte White', val: 65}, {label: 'Glossy Glaze', val: 35}], votes: 12 },
    }
];

// --- SERVICE METHODS ---

export const AuthService = {
    login: async (email: string): Promise<User> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_USER), 800); // Simulate network delay
        });
    },
    logout: async (): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, 500));
    },
    getCurrentUser: (): User | null => {
        // In a real app, check localStorage or Firebase Auth state
        return localStorage.getItem('tabula_user') ? MOCK_USER : null;
    }
};

export const CanvasService = {
    subscribeToModules: (callback: (modules: CanvasModule[]) => void) => {
        // Initial load
        callback([...activeModules]);
        // In a real app, this would be onSnapshot()
        return () => {}; // Unsubscribe
    },

    updateModulePosition: (id: string, x: number, y: number) => {
        // Optimistic update
        activeModules = activeModules.map(m => m.id === id ? { ...m, x, y } : m);
    },

    addModule: (module: CanvasModule) => {
        activeModules.push(module);
    }
};