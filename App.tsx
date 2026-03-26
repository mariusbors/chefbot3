
import React, { useState, useRef, useEffect, useMemo, useLayoutEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams, useLocation, Navigate, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import { Logo } from './components/Logo';
import { RecipeCard } from './components/RecipeCard';
import { RecipeView } from './components/RecipeView';
import { AdminPanel } from './components/admin/AdminPanel';
import { ShoppingList } from './components/ShoppingList';
import { MealPlanner } from './components/MealPlanner';
import { recipeStore } from './services/recipeStore';
import { 
  fetchRecipeDetails, 
  generateRecipeImage, 
  identifyIngredientsFromImage, 
  suggestRecipesByIngredients, 
  suggestRecipesByPrompt 
} from './services/geminiService';
import { Recipe, CategoryData, CuisineData } from './types';
import { SEO } from './components/SEO'; // Import general SEO for Home

// ... (KEEP ALL ICON COMPONENTS UNCHANGED) ...
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-yellow-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09 3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456ZM21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.625 21.75l-.269-1.183a1.5 1.5 0 0 0-1.173-1.173L14 19.125l1.183-.269a1.5 1.5 0 0 0 1.173 1.173L16.625 16.5l.269 1.183a1.5 1.5 0 0 0 1.173 1.173L19.25 19.125l-1.183.269a1.5 1.5 0 0 0-1.173 1.173Z" />
  </svg>
);

const HomeIconFilled = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

const HeartIconFilled = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const CalendarIconFilled = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 01-3-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
  </svg>
);

const ShoppingCartIconFilled = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    </svg>
);

const SettingsIconFilled = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.45-.082a7.497 7.497 0 00-.985-.57c-.182-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
  </svg>
);


const LOADING_MESSAGES = [
  "Verific ingredientele...",
  "Încălzesc cuptorul virtual...",
  "Consult cartea secretă de rețete...",
  "Amestec aromele magice...",
  "Așez masa...",
  "Calculez caloriile...",
  "Găsesc cele mai bune combinații...",
  "Mai durează doar o secundă..."
];

// Defined outside component to prevent re-creation
// UPDATED: Simpler queries, handled better by the enhanced AI prompt logic in service
const INSPIRATION_CATEGORIES = [
    { name: "Prânz", icon: "☀️", query: "Idei de prânz ciorbe tocanite fripturi", label: "Idei pentru Prânz" },
    { name: "Cina", icon: "🌙", query: "Idei de cină ușoară salate grătar", label: "Idei pentru Cină" },
    { name: "De Post", icon: "🌿", query: "Rețete de post vegan fără carne fără ouă", label: "Rețete de Post" },
    { name: "Rapid", icon: "⚡", query: "Rețete rapide 20 minute", label: "Rețete Rapide" },
    { name: "Felul 2", icon: "🍛", query: "Rețete felul principal mâncare gătită", label: "Felul Principal" },
    { name: "Copii", icon: "🧸", query: "Rețete pentru copii sănătos nepicant", label: "Rețete pentru Copii" },
    { name: "Fitness", icon: "💪", query: "Rețete fitness proteine pui pește", label: "Rețete Fitness" },
    { name: "Pui", icon: "🍗", query: "Rețete cu pui diverse", label: "Rețete cu Pui" }
];

// --- HELPER FUNCTIONS ---

// Force scroll to top on all potential scrolling containers
const forceScrollTop = () => {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const root = document.getElementById('root');
  if (root) root.scrollTop = 0;
};

// ... (Rest of the component remains the same) ...
// --- COMPONENTS ---

// 0. ScrollToTop Component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useLayoutEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    forceScrollTop();
  }, [pathname, hash]);
  
  return null;
};

// 0.5. Bottom Navigation Component
const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // HIDE ON ADMIN PANEL
  if (currentPath.startsWith('/admin')) return null;

  const isActive = (path: string) => {
      if (path === '/' && currentPath === '/') return true;
      if (path !== '/' && currentPath.startsWith(path)) return true;
      return false;
  };

  const navItems = [
    { path: '/', icon: HomeIconFilled, label: 'Acasă' },
    { path: '/list/favorites/all', icon: HeartIconFilled, label: 'Favorite' },
    { path: '/meal-planner', icon: CalendarIconFilled, label: 'Plan' },
    { path: '/shopping-list', icon: ShoppingCartIconFilled, label: 'Listă' },
    { path: '/admin', icon: SettingsIconFilled, label: 'Admin', mobileHidden: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] pb-safe">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 md:h-20">
            {navItems.map((item) => {
                const active = isActive(item.path);
                // @ts-ignore
                const displayClass = item.mobileHidden ? 'hidden md:flex' : 'flex';
                const Icon = item.icon;
                
                return (
                    <Link 
                        key={item.path} 
                        to={item.path} 
                        className={`${displayClass} flex-col items-center justify-center p-1 md:p-2 rounded-2xl transition-all duration-300 min-w-[4.5rem] group active:scale-95 ${active ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                    >
                        <span className={`text-2xl mb-0.5 transition-all duration-300 relative`}>
                            <Icon className={`w-7 h-7 md:w-6 md:h-6 transition-colors duration-300 ${active ? 'text-chef-intense filter drop-shadow-sm' : 'text-gray-400 group-hover:text-gray-600'}`} />
                            {active && (
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-chef-intense rounded-full opacity-100 transition-all duration-300"></span>
                            )}
                        </span>
                        <span className={`text-[10px] md:text-[9px] font-extrabold tracking-wide uppercase transition-all duration-300 mt-1 ${active ? 'text-chef-intense opacity-100 scale-105' : 'text-gray-400 opacity-60 scale-90'}`}>
                            {item.label}
                        </span>
                    </Link>
                )
            })}
        </div>
    </div>
  );
};

// 1. Loading Overlay Component
const LoadingOverlay = ({ loading, onCancel, customText }: { loading: boolean, onCancel: () => void, customText?: string }) => {
    const [progress, setProgress] = useState(0);
    
    // Explicitly handle progress logic to ensure it resets and runs every time
    useEffect(() => {
        if (loading) {
            setProgress(0);
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 95) return 95;
                    // Slow down as it gets closer to 95
                    const increment = Math.max(1, (100 - prev) / 20); 
                    return prev + increment;
                });
            }, 200);
            return () => clearInterval(interval);
        } else {
            setProgress(100);
        }
    }, [loading]);

    if (!loading) return null;

    return (
        // CHANGED: Reduced opacity from bg-white/95 to bg-white/40 to show background image
        <div className="fixed inset-0 z-[9999] bg-white/40 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none touch-none">
            <div className="animate-bounce mb-8 transform scale-125">
                <Logo size="lg" />
            </div>
            
            <h2 className="text-xl md:text-2xl font-extrabold text-chef-intense mb-4 animate-pulse px-4 leading-relaxed drop-shadow-sm">
                {customText || "Pregătesc magia..."}
            </h2>
            
            <div className="w-full max-w-xs mt-4 relative">
                <div className="w-full bg-white/50 rounded-full h-4 overflow-hidden shadow-inner border border-gray-200">
                    <div 
                        className="bg-chef-intense h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden" 
                        style={{ width: `${progress}%` }}
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_1.5s_infinite] skew-x-12 transform translate-x-[-100%]"></div>
                        <style>{`
                            @keyframes shimmer {
                                100% { transform: translateX(100%); }
                            }
                        `}</style>
                    </div>
                </div>
                <div className="text-center mt-3 font-bold text-gray-600 text-sm tracking-widest drop-shadow-sm">
                    {Math.round(progress)}%
                </div>
            </div>

            <button 
                onClick={onCancel} 
                className="mt-10 px-8 py-3 rounded-full border-2 border-red-100 text-red-500 font-bold hover:bg-red-50 hover:text-red-600 transition-colors shadow-lg text-sm uppercase tracking-wide bg-white/90"
            >
                Anulează
            </button>
        </div>
    );
};

// New: AI Prompt Modal Component
const AiInputModal = ({ 
    isOpen, 
    onClose, 
    onSubmit,
    initialValue
}: { 
    isOpen: boolean; 
    onClose: () => void; 
    onSubmit: (prompt: string) => void;
    initialValue: string;
}) => {
    const [prompt, setPrompt] = useState(initialValue);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (isOpen) {
            setPrompt(initialValue); // Reset/Set initial value when opening
            // Focus after a small delay to allow render
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, initialValue]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            onSubmit(prompt);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-6 relative" onClick={e => e.stopPropagation()}>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                >
                    ✕
                </button>
                
                <div className="flex flex-col items-center mb-6">
                    <span className="text-4xl mb-2">✨</span>
                    <h3 className="text-xl font-extrabold text-slate-800 text-center">Ce pofte ai astăzi?</h3>
                    <p className="text-sm text-gray-500 text-center mt-1">Descrie gustul perfect și eu îl creez.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <textarea 
                        ref={inputRef}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ex: Ceva turcesc, Cină romantică, Ceva de dietă, Fără gluten..."
                        className="w-full p-4 rounded-xl border-2 border-purple-100 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none text-base resize-none bg-gray-50"
                        rows={3}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                    />
                    <button 
                        type="submit" 
                        className="bg-purple-600 text-white w-full py-3 rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-transform active:scale-95 flex items-center justify-center gap-2"
                    >
                        <span>Generează</span>
                        <span>🚀</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

// 2. Home View Component
const HomeView = ({ setLoading, setLoadingText }: { setLoading: (l: boolean) => void, setLoadingText: (t: string) => void }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [lastSearchTerm, setLastSearchTerm] = useState('');
    const [placeholderText, setPlaceholderText] = useState("Caută o rețetă sau scrie ingredientele...");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    // AI Modal State
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [aiPromptText, setAiPromptText] = useState("");

    const appCategories = recipeStore.getCategories();
    const appCuisines = recipeStore.getCuisines();

    const cancelPendingRequest = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    };

    // Responsive Placeholder Logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setPlaceholderText("Rețetă sau ingrediente (ex: ouă, lapte, unt)...");
            } else {
                setPlaceholderText("Caută o rețetă sau ingrediente (ex: ouă, lapte, unt)...");
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => cancelPendingRequest();
    }, []);

    // Smart Handler for AI Suggestions (Strictly for "Give me Ideas" button)
    const handleAiSubmit = async (prompt: string) => {
        const term = prompt.trim();
        if (!term) return;

        setAiPromptText(term); // Keep the text if user re-opens
        
        // TRACK SEARCH
        recipeStore.trackSearch(term, 'ai');

        cancelPendingRequest();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        
        setLoadingText(`Generez idei creative pentru: "${term}"...`);
        setLoading(true);

        try {
            // Updated count to 8 for efficiency and quality
            // FORCE FRESH is true to avoid cached results for identical prompts
            // STRICT MODE is true to ensure precise AI results
            const recipes = await suggestRecipesByPrompt(term, 8, controller.signal, [], true, true);
            if (controller.signal.aborted) return;
            
            sessionStorage.setItem('chefbot_generated_list', JSON.stringify({
                title: `Sugestii pentru: ${term}`,
                recipes,
                queryContext: { type: 'prompt', data: term }
            }));
            navigate(`/list/generated/results`);
        } catch (e: any) {
             if (e.name !== 'AbortError') {
                 console.error(e);
                 alert("Nu am putut genera sugestii. Încearcă din nou.");
             }
        } finally {
            if (abortControllerRef.current === controller) {
                setLoading(false);
                abortControllerRef.current = null;
            }
        }
    };

    // 3-in-1 Unified Search Logic
    const handleUnifiedSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // CRITICAL FIX FOR IPHONE: Force close keyboard to reset viewport
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) {
            activeElement.blur();
        }

        const term = searchTerm.trim();
        if (!term) return;

        // --- NEW STRICT LOGIC (One Recipe vs List) ---
        
        // 1. INGREDIENTS SEARCH (Contains commas) -> List of Suggestions
        if (term.includes(',')) {
            // TRACK INGREDIENT SEARCH
            recipeStore.trackSearch(term, 'ingredient');

            cancelPendingRequest();
            const controller = new AbortController();
            abortControllerRef.current = controller;
            
            setLoadingText(`Caut cele mai bune rețete cu: ${term}...`);
            setLoading(true);

            try {
                const ingredients = term.split(',').map(s => s.trim());
                // STRICT AI SEARCH: Pass true for forceFresh to bypass local fuzzy matching defaults
                // forceFresh is specifically for ignoring global cache, strictMode is for skipping local search first
                const recipes = await suggestRecipesByIngredients(ingredients, 8, controller.signal, [], true);
                
                if (controller.signal.aborted) return;
                
                // Save to session for persistence
                sessionStorage.setItem('chefbot_generated_list', JSON.stringify({
                    title: `Rețete cu: ${ingredients.join(', ')}`,
                    recipes: recipes, // Array of objects {title, imageUrl}
                    queryContext: { type: 'ingredients', data: ingredients }
                }));
                
                setLastSearchTerm(term);
                navigate(`/list/generated/results`);

            } catch (e: any) {
                if (e.name !== 'AbortError') {
                    console.error(e);
                    if (e.message && e.message.includes("API Key")) {
                        alert("Eroare de configurare: Cheia API lipsește. Vă rugăm configurați VITE_API_KEY în setările de hosting.");
                    }
                }
            } finally {
                if (abortControllerRef.current === controller) {
                    setLoading(false);
                    abortControllerRef.current = null;
                }
            }
            return;
        }

        // 2. DIRECT RECIPE SEARCH ("The Perfect Recipe" Philosophy)
        // If NO commas -> Go straight to the recipe page. 
        // TRACK DIRECT SEARCH
        recipeStore.trackSearch(term, 'direct');
        navigate(`/recipe/${encodeURIComponent(term)}`, { state: { from: '/' } });
    };

    const handleInspirationSelect = async (query: string, displayLabel: string) => {
        // Force blur just in case
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) { activeElement.blur(); }

        // TRACK SEARCH - UPDATED: Log the readable Label (e.g. "Rețete pentru Copii") not the hidden query
        recipeStore.trackSearch(displayLabel, 'ai');

        cancelPendingRequest();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        setLoadingText(`Caut ${displayLabel}...`);
        setLoading(true);

        try {
            // Request 8 recipes for inspiration.
            // PASS STRICTMODE = TRUE to force AI usage and prevent generic fallbacks if AI fails.
            // PASS FORCE FRESH = TRUE (6th arg) to bypass Firebase cache and get NEW ideas every time.
            const recipes = await suggestRecipesByPrompt(query, 8, controller.signal, [], true, true);
            if (controller.signal.aborted) return;
            
            sessionStorage.setItem('chefbot_generated_list', JSON.stringify({
                title: displayLabel,
                recipes, // Array of objects {title, imageUrl}
                queryContext: { type: 'prompt', data: query }
            }));
            navigate(`/list/generated/results`);
        } catch (e: any) {
            if (e.name !== 'AbortError') {
                console.error(e);
                if (e.message && e.message.includes("API Key")) {
                    alert("Eroare de configurare: Cheia API lipsește. Vă rugăm configurați VITE_API_KEY în setările de hosting.");
                }
            }
        } finally {
            if (abortControllerRef.current === controller) {
                setLoading(false);
                abortControllerRef.current = null;
            }
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        cancelPendingRequest();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        setLoadingText("Analizez imaginea din frigider...");
        setLoading(true);

        try {
            const ingredients = await identifyIngredientsFromImage(file, controller.signal);
            if (controller.signal.aborted) return;

            if (ingredients.length === 0) {
                alert("Nu am putut identifica ingrediente.");
                setLoading(false);
                return;
            }
            
            // Show identified ingredients in loading message
            const ingredientsStr = ingredients.join(', ');
            setLoadingText(`Am găsit: ${ingredientsStr}. Caut rețete...`);
            
            // TRACK SEARCH for camera
            recipeStore.trackSearch(ingredientsStr, 'ingredient');

            // Request 8 recipes for image search (Reduced from 12 for efficiency)
            const recipes = await suggestRecipesByIngredients(ingredients, 8, controller.signal, [], true);
            if (controller.signal.aborted) return;

            sessionStorage.setItem('chefbot_generated_list', JSON.stringify({
                title: `Rețete din frigiderul tău`,
                subtitle: `Ingrediente identificate: ${ingredientsStr}`,
                recipes, // Array of objects {title, imageUrl}
                queryContext: { type: 'ingredients', data: ingredients }
            }));
            navigate(`/list/generated/results`);
        } catch (e: any) {
            if (e.name !== 'AbortError') {
                console.error(e);
                if (e.message && e.message.includes("API Key")) {
                    alert("Eroare de configurare: Cheia API lipsește. Vă rugăm configurați VITE_API_KEY în setările de hosting.");
                } else {
                    alert("Eroare la procesarea imaginii. Încercați din nou.");
                }
            }
        } finally {
            if (abortControllerRef.current === controller) {
                setLoading(false);
                abortControllerRef.current = null;
            }
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    return (
        // REMOVED bg-gray-50 to let body background show
        <div className="space-y-6 md:space-y-8 animate-fade-in pb-24 overflow-x-hidden min-h-screen">
            {/* GENERAL HOME SEO */}
            <SEO title="Acasă" />

            <AiInputModal 
                isOpen={isAiModalOpen} 
                onClose={() => setIsAiModalOpen(false)} 
                onSubmit={handleAiSubmit} 
                initialValue={aiPromptText}
            />

            {/* FIXED HEADER FOR HOME - IDENTICAL TO RECIPE VIEW FOR CONSISTENCY */}
            {/* This fixes the issue of logo overlapping status bar on mobile */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chef-grey shadow-sm pt-safe transition-all">
                <div className="w-full md:w-[90%] max-w-5xl mx-auto px-4 py-2 flex items-center justify-start">
                     <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
                        <Logo />
                    </div>
                </div>
            </header>

            {/* SPACER FOR FIXED HEADER */}
            {/* Reduced height to raise the Hero section per user request */}
            <div className="pt-10 md:pt-12"></div>

            {/* HERO SECTION - CONTAINED & LOGO COLORS */}
            <div className="w-full md:w-[85%] max-w-6xl mx-auto px-4 mt-0">
                <div className="relative bg-gradient-to-br from-chef-light to-chef-intense py-8 md:py-10 px-4 md:px-6 rounded-[2rem] shadow-xl text-white overflow-hidden text-center">
                    
                    {/* Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm mb-2">
                            Ce gătim astăzi?
                        </h1>
                        <p className="sr-only">ChefBot te ajută să găsești rețeta perfectă din prima, cu ingredientele pe care le ai.</p>
                        
                        {/* SUBTITLE & CAMERA BADGE */}
                        <div className="flex flex-col items-center justify-center gap-2 mb-2">
                            
                            {/* NEW: Fridge Camera Badge Button (Clickable) */}
                            <button 
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="group flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all active:scale-95"
                            >
                                <span className="text-xl animate-bounce">📸</span>
                                <span className="font-bold text-white text-sm md:text-base tracking-wide text-shadow-sm group-hover:text-yellow-100 transition-colors">
                                    Arată-mi ce ai în frigider!
                                </span>
                            </button>
                        </div>

                        {/* Search & AI Section */}
                        <div className="w-full max-w-xl mx-auto mt-4 flex flex-col items-center gap-3">
                            
                            {/* 1. Main Search Bar (Blue) - Exact & Ingredients */}
                            <form onSubmit={handleUnifiedSearch} className="relative group w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                                    <SearchIcon />
                                </div>
                                <input 
                                    type="text" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder={placeholderText}
                                    className="w-full pl-9 pr-24 md:pl-10 md:pr-32 py-3 md:py-4 rounded-full border-none focus:ring-4 focus:ring-blue-300/50 focus:outline-none text-sm md:text-lg shadow-xl transition-all text-gray-800 placeholder-gray-400 bg-white/95 hover:bg-white backdrop-blur-sm truncate"
                                />
                                {/* Hidden File Input */}
                                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" capture="environment"/>
                                <div className="absolute right-1.5 top-1.5 bottom-1.5 flex gap-1">
                                    <button 
                                        type="submit" 
                                        className="bg-chef-intense text-white px-4 md:px-6 rounded-full font-bold hover:bg-blue-700 transition-transform active:scale-95 text-xs md:text-sm shadow-md"
                                    >
                                        Caută
                                    </button>
                                </div>
                            </form>
                            
                            {/* 2. New AI Button (Trigger Modal) */}
                            <button 
                                type="button" 
                                onClick={() => setIsAiModalOpen(true)}
                                className="mt-2 bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-transform active:scale-95 text-sm md:text-base shadow-lg flex items-center gap-2 border-2 border-purple-400/30 backdrop-blur-sm hover:shadow-purple-500/40 ring-2 ring-transparent hover:ring-purple-300/50 animate-fade-in"
                            >
                                <span className="text-xl">✨</span>
                                <span>Dă-mi idei</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Inspiration Section - 4 COLUMNS ON MOBILE */}
            <div className="w-full md:w-[85%] max-w-6xl mx-auto px-4 relative z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100/50">
                    <div className="flex items-center gap-2 mb-4 md:mb-6 text-gray-800 font-bold text-lg md:text-xl">
                        <SparklesIcon />
                        <span>Idei rapide</span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                        {INSPIRATION_CATEGORIES.map((item, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => handleInspirationSelect(item.query, item.label)}
                                className="bg-gray-50/80 p-2 md:p-4 rounded-2xl border border-transparent hover:border-chef-light hover:bg-blue-50 hover:shadow-md transition-all flex flex-col items-center justify-center gap-1 md:gap-2 group min-h-[80px] md:min-h-[100px] cursor-pointer"
                            >
                                <span className="text-2xl md:text-3xl transform group-hover:scale-110 transition-transform filter drop-shadow-sm">{item.icon}</span>
                                <span className="font-bold text-gray-600 group-hover:text-chef-intense text-center text-[10px] md:text-sm leading-tight">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cuisines - 4 COLUMNS ON MOBILE */}
            <div className="w-full md:w-[85%] max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-4 md:mb-6 justify-center md:justify-start">
                    <span className="text-2xl md:text-3xl">🌍</span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 drop-shadow-sm bg-white/50 px-2 rounded-lg backdrop-blur-sm">Bucătării</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 md:gap-6">
                    {appCuisines.map((cuisine) => (
                        <button key={cuisine.name} onClick={() => navigate(`/list/cuisine/${encodeURIComponent(cuisine.name)}`)} className="bg-white/90 backdrop-blur-sm p-2 md:p-6 rounded-2xl shadow-sm border border-chef-grey hover:border-chef-intense hover:shadow-md transition-all flex flex-col items-center justify-center gap-1 md:gap-4 group min-h-[90px] md:min-h-[160px] cursor-pointer">
                            <span className="text-2xl md:text-5xl transform group-hover:scale-110 transition-transform filter drop-shadow-sm">{cuisine.flag}</span>
                            <span className="font-bold text-gray-700 group-hover:text-chef-intense text-center text-[10px] md:text-lg leading-tight break-words w-full">{cuisine.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Categories - 4 COLUMNS ON MOBILE */}
            <div className="w-full md:w-[85%] max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-4 md:mb-6 justify-center md:justify-start">
                    <span className="text-2xl md:text-3xl">🍽️</span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 drop-shadow-sm bg-white/50 px-2 rounded-lg backdrop-blur-sm">Feluri de mâncare</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 md:gap-6">
                    {appCategories.map((category) => (
                        <button key={category.name} onClick={() => navigate(`/list/category/${encodeURIComponent(category.name)}`)} className="bg-white/90 backdrop-blur-sm p-2 md:p-6 rounded-2xl shadow-sm border border-chef-grey hover:border-chef-intense hover:shadow-md transition-all flex flex-col items-center justify-center gap-1 md:gap-4 group min-h-[80px] md:min-h-[100px] cursor-pointer">
                            <span className="text-2xl md:text-5xl transform group-hover:scale-110 transition-transform filter drop-shadow-sm">{category.icon}</span>
                            <span className="font-bold text-gray-700 group-hover:text-chef-intense text-center text-[10px] md:text-lg leading-tight break-words w-full">{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ... (Rest of App.tsx remains unchanged) ...
// Wrappers for Routing
const RecipeDetailWrapper = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const location = useLocation(); // Added hook for state access
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            if (!name) return;
            setLoading(true);
            try {
                // Try fetching from store first, then DB/AI
                let r = recipeStore.getRecipe(decodeURIComponent(name));
                if (!r) {
                    // Force fresh generation if direct navigation happens without existing recipe
                    r = await fetchRecipeDetails(decodeURIComponent(name));
                }

                // Override image if passed from list view
                if (r && location.state && location.state.imageUrl) {
                    r = { ...r, imageUrl: location.state.imageUrl };
                }

                setRecipe(r);
                
                // TRACKING: Log recipe view after successful load
                if (r && r.title) {
                    recipeStore.trackSearch(r.title, 'direct');
                }

            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        load();
        
        // SUBSCRIBE TO UPDATES (Fix for detail view freshness)
        const unsubscribe = recipeStore.subscribe(() => {
            if (name) {
                const updatedRecipe = recipeStore.getRecipe(decodeURIComponent(name));
                if (updatedRecipe) {
                    setRecipe(updatedRecipe);
                }
            }
        });
        return () => unsubscribe();
    }, [name, location.state]); 

    // CHANGED: Use LoadingOverlay instead of the generic frying pan spinner
    if (loading) {
        return <LoadingOverlay loading={true} onCancel={() => navigate(-1)} customText="Caut rețeta în cartea de bucate..." />;
    }

    if (!recipe) return <div className="p-8 text-center text-gray-500 font-bold mt-20">Rețeta nu a fost găsită.</div>;

    return <RecipeView recipe={recipe} onBack={() => navigate(-1)} />;
};

const RecipeListWrapper = ({ type }: { type: 'category' | 'cuisine' | 'favorites' | 'generated' }) => {
    const { categoryName, cuisineName } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    
    // Updated state to include category for filtering
    const [allRecipes, setAllRecipes] = useState<{title: string, imageUrl: string, category?: string}[]>([]);
    
    // NEW: Load More State & Context
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [queryContext, setQueryContext] = useState<{type: 'prompt' | 'ingredients', data: any} | null>(null);

    // NEW: Filter State for Favorites
    const [activeFilter, setActiveFilter] = useState("Toate");

    // Extracted loading logic for subscription
    const loadRecipes = useCallback(() => {
        if (type === 'category' && categoryName) {
            setTitle(decodeURIComponent(categoryName));
            const cat = recipeStore.getCategories().find(c => c.name === decodeURIComponent(categoryName));
            if (cat) {
                const list = cat.recipes.map(rName => {
                    const r = recipeStore.getRecipe(rName);
                    return {
                        title: rName,
                        imageUrl: r?.imageUrl || generateRecipeImage(rName)
                    };
                });
                setAllRecipes(list);
            }
        } else if (type === 'cuisine' && cuisineName) {
            setTitle(`Bucătăria ${decodeURIComponent(cuisineName)}`);
            const cui = recipeStore.getCuisines().find(c => c.name === decodeURIComponent(cuisineName));
            if (cui) {
                const list = cui.recipes.map(rName => {
                    const r = recipeStore.getRecipe(rName);
                    return {
                        title: rName,
                        imageUrl: r?.imageUrl || generateRecipeImage(rName)
                    };
                });
                setAllRecipes(list);
            }
        } else if (type === 'favorites') {
            setTitle("Rețete Favorite");
            const rawFavorites = recipeStore.getFavorites();
            const enhancedFavorites = rawFavorites.map(fav => ({
                ...fav,
                category: recipeStore.getRecipeCategory(fav.title)
            }));
            setAllRecipes(enhancedFavorites);
        } else if (type === 'generated') {
            // Generated list usually doesn't update from store, but we reload from session
            try {
                const storedData = sessionStorage.getItem('chefbot_generated_list');
                if (storedData) {
                    const parsed = JSON.parse(storedData);
                    setTitle(parsed.title || "Sugestii");
                    setAllRecipes(parsed.recipes || []);
                    if (parsed.queryContext) {
                        setQueryContext(parsed.queryContext);
                    }
                }
            } catch(e) {}
        }
    }, [type, categoryName, cuisineName]);

    useEffect(() => {
        loadRecipes(); // Initial load
        // Subscribe to store updates to refresh images when cloud data arrives
        const unsubscribe = recipeStore.subscribe(loadRecipes);
        return () => unsubscribe();
    }, [loadRecipes]);

    const handleLoadMore = async () => {
        if (!queryContext || isLoadingMore) return;
        
        setIsLoadingMore(true);
        // Get existing titles to exclude
        const existingTitles = allRecipes.map(r => r.title);

        try {
            let newRecipes: {title: string, imageUrl: string}[] = [];
            
            if (queryContext.type === 'ingredients') {
                newRecipes = await suggestRecipesByIngredients(queryContext.data, 8, undefined, existingTitles, true);
            } else if (queryContext.type === 'prompt') {
                // Pass strictMode=true if the initial query was from inspiration categories (usually implied by specific query structure)
                // but suggestRecipesByPrompt now handles "Kids" context internally so simple call is enough
                newRecipes = await suggestRecipesByPrompt(queryContext.data, 8, undefined, existingTitles, true, true); // Force fresh on load more too
            }

            if (newRecipes.length > 0) {
                const updatedList = [...allRecipes, ...newRecipes];
                setAllRecipes(updatedList);
                
                // Update session storage so it persists on refresh
                const storedData = sessionStorage.getItem('chefbot_generated_list');
                if (storedData) {
                    const parsed = JSON.parse(storedData);
                    parsed.recipes = updatedList;
                    sessionStorage.setItem('chefbot_generated_list', JSON.stringify(parsed));
                }
            } else {
                alert("Nu am mai găsit alte rețete relevante momentan.");
            }
        } catch (e) {
            console.error("Failed to load more", e);
            alert("A apărut o eroare la încărcarea mai multor rețete.");
        } finally {
            setIsLoadingMore(false);
        }
    };

    // Calculate displayed recipes based on filter
    const displayedRecipes = useMemo(() => {
        if (type !== 'favorites' || activeFilter === 'Toate') {
            return allRecipes;
        }
        return allRecipes.filter(r => r.category === activeFilter);
    }, [allRecipes, activeFilter, type]);

    // Calculate unique categories for filter bar
    const availableCategories = useMemo(() => {
        if (type !== 'favorites') return [];
        const cats = new Set(allRecipes.map(r => r.category).filter(Boolean));
        return ['Toate', ...Array.from(cats)] as string[];
    }, [allRecipes, type]);

    return (
        // REMOVED bg-gray-50 to let body background show
        <div className="min-h-screen pt-safe pb-24">
             <SEO title={title} /> {/* Add SEO for List Pages */}
             <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chef-grey shadow-sm pt-safe transition-all">
                <div className="w-full md:w-[90%] max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
                    <div onClick={() => navigate('/')} className="cursor-pointer">
                        <Logo />
                    </div>
                    <button 
                        onClick={() => navigate('/')} // FORCE HOME NAVIGATION
                        className="bg-white text-slate-700 border border-slate-200 hover:border-chef-intense hover:text-chef-intense px-4 py-2 rounded-full font-bold shadow-sm transition-all flex items-center gap-1 text-xs md:text-sm hover:shadow-md"
                    >
                        <span>Înapoi</span>
                    </button>
                </div>
            </header>
            
            <div className="w-full md:w-[90%] max-w-6xl mx-auto px-4 pt-20">
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 drop-shadow-sm bg-white/50 px-2 rounded-lg backdrop-blur-sm w-fit">{title}</h1>
                    
                    {/* FILTER BAR FOR FAVORITES */}
                    {type === 'favorites' && availableCategories.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-2 mt-4 no-scrollbar">
                            {availableCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                                        activeFilter === cat 
                                        ? 'bg-chef-intense text-white border-chef-intense shadow-md scale-105' 
                                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayedRecipes.map((r, idx) => (
                        <RecipeCard 
                            key={idx}
                            title={r.title}
                            imageUrl={r.imageUrl}
                            onClick={() => navigate(`/recipe/${encodeURIComponent(r.title)}`, { state: { imageUrl: r.imageUrl } })}
                        />
                    ))}
                </div>
                {displayedRecipes.length === 0 && (
                    <div className="text-center py-10 text-gray-400 bg-white/50 backdrop-blur-sm rounded-xl">Nu am găsit rețete aici.</div>
                )}

                {/* LOAD MORE BUTTON FOR GENERATED LISTS - ALWAYS VISIBLE if list exists */}
                {type === 'generated' && queryContext && displayedRecipes.length > 0 && (
                    <div className="mt-8 flex justify-center pb-8">
                        <button 
                            onClick={handleLoadMore}
                            disabled={isLoadingMore}
                            className="bg-white border-2 border-chef-intense text-chef-intense hover:bg-chef-intense hover:text-white transition-all px-8 py-3 rounded-full font-extrabold shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-wait flex items-center gap-2"
                        >
                            {isLoadingMore ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                    <span>Se caută...</span>
                                </>
                            ) : (
                                <>
                                    <span>✨</span>
                                    <span>Caută mai multe</span>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Se încarcă...");

  // NEW: Trigger Analytics on Mount
  useEffect(() => {
    // This runs once when the app loads
    recipeStore.trackVisit();
  }, []);

  return (
    <HelmetProvider>
      <HashRouter>
        {/* REMOVED shadow-2xl for desktop full width */}
        <div className="max-w-md md:max-w-full mx-auto min-h-screen md:shadow-none shadow-2xl relative overflow-hidden flex flex-col">
          <ScrollToTop />
          <LoadingOverlay loading={loading} onCancel={() => setLoading(false)} customText={loadingText} />
          
          <div className="flex-1 w-full">
              <Routes>
                  <Route path="/" element={<HomeView setLoading={setLoading} setLoadingText={setLoadingText} />} />
                  <Route path="/recipe/:name" element={<RecipeDetailWrapper />} />
                  <Route path="/list/category/:categoryName" element={<RecipeListWrapper type="category" />} />
                  <Route path="/list/cuisine/:cuisineName" element={<RecipeListWrapper type="cuisine" />} />
                  <Route path="/list/favorites/all" element={<RecipeListWrapper type="favorites" />} />
                  <Route path="/list/generated/results" element={<RecipeListWrapper type="generated" />} />
                  <Route path="/shopping-list" element={<ShoppingList />} />
                  <Route path="/meal-planner" element={<MealPlanner />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
          </div>

          <BottomNavigation />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;
