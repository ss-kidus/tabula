export enum AppScreen {
  LANDING = 'LANDING',
  AUTH = 'AUTH',
  HOME = 'HOME',
  CANVAS = 'CANVAS',
  MODULE_LIBRARY = 'MODULE_LIBRARY',
  WELCOME = 'WELCOME',
  ONBOARDING = 'ONBOARDING'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface SurfaceItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'project' | 'design' | 'marketing' | 'engineering' | 'hr';
  updatedAt: string;
  activityCount?: number;
  collaborators: string[]; // URLs
  preview?: string; // e.g., "deck_v4.pdf"
  statusColor?: string;
  icon?: string;
}

export interface ModuleCategory {
  id: string;
  label: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  category: 'Synthetic' | 'Academia' | 'Enterprise' | 'Lounge' | 'Free' | 'Pro' | 'Team';
  icon: string;
  isPro?: boolean;
  image?: string;
}

// Canvas Specific Types
export interface CanvasModule {
    id: string;
    type: 'NOTE' | 'IMAGE' | 'POLL';
    x: number;
    y: number;
    content: any;
    color?: string;
    scale?: number;
    author?: {
        name: string;
        avatar: string;
    }
}