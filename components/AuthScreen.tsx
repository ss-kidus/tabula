import React, { useState } from 'react';
import { AppScreen, User } from '../types';
import { AuthService } from '../services/mockBackend';

interface AuthScreenProps {
  onNavigate: (screen: AppScreen) => void;
  onLogin: (user: User) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onNavigate, onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const user = await AuthService.login(email);
        onLogin(user);
        onNavigate(AppScreen.HOME);
    } catch (error) {
        console.error("Login failed", error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-stone-light dark:bg-stone-dark text-stone-900 dark:text-white flex items-center justify-center p-6 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuACSITwNDD3zjVsfUKjZyOYZQTmC6l7S4BrUZZUGXdeRW3OZ-Lv4oZoP37arlUrhfKhITwkSo038Kg8RMgujohemVce0lg2QNtjTQr5GeRN7JG7XivWvL2Cjmsw0ldbeSVXgevDCc79rGCa6RkD_thQCZbdtgKRorwLiM5HzkOdhN-wQvli-5tyDW9_6JSp2ndWJvhAbP6oAW-lFomz77j4QN1Fo2T2CDpUdJeVZmFJgSRMM-sMK03omVbfgyyyBfkdH0REQH9M0ZY')] pointer-events-none opacity-20 mix-blend-multiply dark:mix-blend-overlay"></div>
        
        {/* Abstract Art */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md animate-fade-in-up">
            <div className="mb-8 text-center">
                <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-ceramic mb-6">
                     <span className="material-symbols-outlined text-primary text-3xl">layers</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Back</h1>
                <p className="text-stone-500 font-medium">Enter the infinite surface.</p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-ceramic border border-stone-100 dark:border-white/5">
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-stone-400 ml-1">Email Access</label>
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="architect@tabula.os"
                            className="w-full p-4 bg-stone-50 dark:bg-black/20 rounded-xl border border-stone-200 dark:border-white/10 font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-14 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        ) : (
                            <>
                                <span>Continue</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </>
                        )}
                    </button>

                    <div className="relative flex items-center gap-4 py-2">
                        <div className="h-px bg-stone-200 dark:bg-white/10 flex-1"></div>
                        <span className="text-xs font-bold text-stone-400">OR</span>
                        <div className="h-px bg-stone-200 dark:bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="h-12 rounded-xl border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        </button>
                        <button type="button" className="h-12 rounded-xl border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">mail</span>
                        </button>
                    </div>
                </form>
            </div>
            
            <p className="text-center mt-8 text-xs font-bold text-stone-400 uppercase tracking-widest">
                v2.0.4 • Stone & Clay Build
            </p>
        </div>
    </div>
  );
};

export default AuthScreen;