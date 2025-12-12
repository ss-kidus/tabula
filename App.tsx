import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import OnboardingScreen from './components/OnboardingScreen';
import AuthScreen from './components/AuthScreen';
import HomeScreen from './components/HomeScreen';
import CanvasScreen from './components/CanvasScreen';
import ModuleLibraryScreen from './components/ModuleLibraryScreen';
import NavigationDock from './components/NavigationDock';
import { AppScreen, User } from './types';
import { AuthService } from './services/mockBackend';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.LANDING);
  const [user, setUser] = useState<User | null>(AuthService.getCurrentUser());

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.LANDING:
        return <LandingPage onNavigate={setCurrentScreen} />;
      case AppScreen.WELCOME:
        return <LandingPage onNavigate={setCurrentScreen} />;
      
      case AppScreen.AUTH:
        return <AuthScreen onNavigate={setCurrentScreen} onLogin={setUser} />;
      
      case AppScreen.ONBOARDING:
        return <OnboardingScreen onNavigate={setCurrentScreen} />;
      
      case AppScreen.HOME:
        return user ? <HomeScreen onNavigate={setCurrentScreen} /> : <AuthScreen onNavigate={setCurrentScreen} onLogin={setUser} />;
      
      case AppScreen.CANVAS:
        return user ? <CanvasScreen onNavigate={setCurrentScreen} /> : <AuthScreen onNavigate={setCurrentScreen} onLogin={setUser} />;
      
      case AppScreen.MODULE_LIBRARY:
        return user ? <ModuleLibraryScreen onNavigate={setCurrentScreen} /> : <AuthScreen onNavigate={setCurrentScreen} onLogin={setUser} />;
      
      default:
        return <LandingPage onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
      {/* Only show dock if user is logged in and not on auth/landing pages */}
      {user && <NavigationDock currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </>
  );
};

export default App;