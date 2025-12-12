import { SurfaceItem, ModuleItem } from './types';

export const SURFACES: SurfaceItem[] = [
  {
    id: '1',
    title: 'Project Alpha Launch',
    subtitle: '3 Active Modules',
    type: 'project',
    updatedAt: 'Updated 2m ago',
    activityCount: 3,
    statusColor: 'bg-primary',
    collaborators: [
      'https://i.pravatar.cc/150?u=1',
      'https://i.pravatar.cc/150?u=2'
    ],
    icon: '' // geometric shape in component
  },
  {
    id: '2',
    title: 'Design Sprint Q3',
    subtitle: 'You placed a note',
    type: 'design',
    updatedAt: '1h ago',
    preview: '"Check the contrast on..."',
    collaborators: [],
    icon: 'palette'
  },
  {
    id: '3',
    title: 'Marketing Strategy',
    subtitle: 'Campaign Review',
    type: 'marketing',
    updatedAt: 'Yesterday',
    preview: 'deck_v4_final.pdf',
    collaborators: [],
    icon: 'trending_up'
  },
  {
    id: '4',
    title: 'Backend Migration',
    subtitle: 'API Documentation',
    type: 'engineering',
    updatedAt: 'Mon',
    preview: 'System maintenance complete',
    collaborators: [],
    icon: 'terminal'
  },
  {
    id: '5',
    title: 'Team Onboarding',
    subtitle: 'New Hires 2024',
    type: 'hr',
    updatedAt: 'Sun',
    preview: 'Welcome packet updated',
    collaborators: [],
    icon: 'groups'
  }
];

export const MODULES: ModuleItem[] = [
  {
    id: 'm1',
    title: 'Whiteboard',
    description: 'Infinite sketching plane with vector support.',
    category: 'Free',
    icon: 'draw'
  },
  {
    id: 'm2',
    title: 'Citation',
    description: 'Auto-referencing tool for research papers.',
    category: 'Pro',
    icon: 'school'
  },
  {
    id: 'm3',
    title: 'Kanban Tile',
    description: 'Agile task management blocks.',
    category: 'Team',
    icon: 'view_kanban'
  },
  {
    id: 'm4',
    title: 'Vote Box',
    description: 'Secure consensus mechanism.',
    category: 'Free',
    icon: 'how_to_vote'
  }
];

export const ESSENTIAL_MODULES = [
  {
    id: 'e1',
    title: 'Lo-Fi Player',
    category: 'Lounge',
    icon: 'music_note',
    bg: 'from-indigo-50 to-white dark:from-indigo-900/20 dark:to-surface-dark',
    accent: 'text-indigo-500'
  },
  {
    id: 'e2',
    title: 'AI Scribe',
    category: 'Synthetic',
    icon: 'auto_awesome',
    bg: 'from-emerald-50 to-white dark:from-emerald-900/20 dark:to-surface-dark',
    accent: 'text-emerald-500'
  },
  {
    id: 'e3',
    title: 'Mood Ring',
    category: 'Lounge',
    icon: 'mood',
    bg: 'from-pink-50 to-white dark:from-pink-900/20 dark:to-surface-dark',
    accent: 'text-pink-500'
  }
];