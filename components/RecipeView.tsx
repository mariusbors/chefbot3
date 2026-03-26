
import React, { useState, useEffect } from 'react';
import { Recipe, MealPlanItem } from '../types';
import { Logo } from './Logo';
import { recipeStore } from '../services/recipeStore';
import { Link, useNavigate } from 'react-router-dom';
import { generateRecipeImage } from '../services/geminiService';
import { SEO } from './SEO'; // Import SEO component

interface RecipeViewProps {
  recipe: Recipe;
  onBack: () => void;
}

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
const MEAL_TYPES = ["Mic Dejun", "Prânz", "Cină"] as const;

// ... existing icons (ShareIcon, WhatsappIcon, etc.) ...
const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#25D366]">
    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.08L2.1 21.3l4.35-1.12A9.957 9.957 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.1 14.1c-.2.6-.9 1.1-1.5 1.2-.6.1-2.9.7-6.2-2.3-2.9-2.9-2.6-5.4-2.6-5.8 0-.6.4-1.2.9-1.2.1 0 .2 0 .4.1.3.1.6 1.4.7 1.6.1.2.1.3 0 .5-.1.1-.2.2-.4.4-.2.2-.4.4-.1 1 .6 1.1 1.7 2 3.2 2.7.4.2.7.2.9-.1.2-.3.8-1 .9-1.3.2-.3.5-.3.8-.1.4.1 2.3 1.1 2.4 1.2.1.1.2.2.2.4 0 0 .1.4-.2 1Z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1877F2]">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#E4405F]">
    <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.468 2.52c.637-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" clipRule="evenodd" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600">
    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.291a3.75 3.75 0 0 0 0 5.304l-1.757 1.757a5.25 5.25 0 1 1-7.424-7.424l4.5-4.5a.75.75 0 0 1 1.06 1.06l-4.5 4.5a3.75 3.75 0 0 0 5.304 5.304l1.757-1.757a.75.75 0 0 1 1.06 1.06Z" clipRule="evenodd" />
  </svg>
);

export const RecipeView: React.FC<RecipeViewProps> = ({ recipe, onBack }) => {
  const navigate = useNavigate();
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Shopping List State
  const [addedToCart, setAddedToCart] = useState(false);
  
  // Meal Planner State
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<typeof MEAL_TYPES[number]>('Prânz');

  // Share State
  const [showShareModal, setShowShareModal] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  // Safety: If recipe comes from DB without an image URL, generate one now.
  const displayImageUrl = recipe.imageUrl || generateRecipeImage(recipe.title, 'large');

  // --- PREPARE DESCRIPTION FOR SEO ---
  const seoDescription = `Rețetă detaliată pentru ${recipe.title}. Ingrediente: ${recipe.ingredients?.slice(0, 3).map(i => i.name).join(', ')}... Timp: ${recipe.cookTime || 'Mediu'}. Gătește acum cu ChefBot!`;

  useEffect(() => {
      setIsFavorite(recipeStore.isFavorite(recipe.title));
  }, [recipe.title]);

  const toggleFavorite = () => {
      const recipeToSave = { ...recipe, imageUrl: displayImageUrl };
      recipeStore.toggleFavorite(recipe.title, displayImageUrl, recipeToSave);
      setIsFavorite(!isFavorite);
  };

  const handleAddToPlan = (day: string) => {
      const newItem: MealPlanItem = {
          id: Date.now().toString(),
          day: day,
          mealType: selectedMealType,
          recipeTitle: recipe.title,
          recipeImage: displayImageUrl
      };
      recipeStore.addToMealPlan(newItem);
      setShowPlanModal(false);
      
      if(confirm(`Am adăugat "${recipe.title}" pentru ${day} (${selectedMealType}). Mergi la planificator?`)) {
          navigate('/meal-planner');
      }
  };

  const handleShare = (platform: 'whatsapp' | 'facebook' | 'copy' | 'native') => {
      const url = window.location.href;
      const text = `Gătește ${recipe.title} cu ChefBot! 🍽️`;
      
      if (platform === 'whatsapp') {
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
      } else if (platform === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      } else if (platform === 'copy') {
          navigator.clipboard.writeText(`${text} ${url}`);
          setCopyFeedback("Link copiat! Poți posta pe Instagram.");
          setTimeout(() => setCopyFeedback(""), 3000);
      } else if (platform === 'native') {
          if (navigator.share) {
              navigator.share({
                  title: recipe.title,
                  text: text,
                  url: url
              }).catch(console.error);
          }
      }
  };

  const nutrition = recipe.nutrition || { calories: 0, protein: 0, carbs: 0, fat: 0 };

  const getEstimatedPrice = (title: string): number => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const minPrice = 5;
    const range = 17; 
    const price = minPrice + (Math.abs(hash) % range);
    return price;
  };

  const displayPrice = recipe.pricePerServing || getEstimatedPrice(recipe.title);

  const adjustedIngredients = recipe.ingredients?.map(ing => {
    let displayAmount = ing.amount;

    const match = ing.amount.match(/^([\d.,]+(\s*-\s*[\d.,]+)?)(.*)$/);
    
    if (match) {
      let numericPart = match[1];
      const rest = match[3];
      
      if (numericPart.includes('-')) {
          const parts = numericPart.split('-').map(p => {
              const val = parseFloat(p.replace(',', '.'));
              return Math.round(val * servingsMultiplier * 100) / 100;
          });
          numericPart = parts.join('-');
      } else {
          const val = parseFloat(numericPart.replace(',', '.'));
          let newVal = val * servingsMultiplier;
          numericPart = (Math.round(newVal * 100) / 100).toString();
      }
      displayAmount = `${numericPart}${rest}`;
    }

    const partner = ing.partnerId ? recipeStore.getPartner(ing.partnerId) : undefined;

    return { 
        ...ing, 
        amount: displayAmount,
        partner 
    };
  }) || [];

  const handleAddIngredientsToCart = () => {
      recipeStore.addIngredientsFromRecipe(adjustedIngredients, recipe.title);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2500); 
  };

  return (
    // Replaced bg-gray-50 with bg-transparent to show body background
    <div className="min-h-screen bg-transparent animate-fade-in font-sans pb-24">
      
      {/* INJECT SEO DATA FOR THIS SPECIFIC RECIPE */}
      <SEO 
        title={recipe.title} 
        description={seoDescription}
        image={displayImageUrl}
        type="recipe"
        recipe={recipe}
      />

      {/* FIXED HEADER - WITH SAFE AREA PADDING */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chef-grey shadow-sm pt-safe transition-all">
          <div className="w-full md:w-[90%] max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
              <div onClick={() => navigate('/')} className="cursor-pointer transition-transform hover:scale-105 origin-left">
                  <Logo />
              </div>
              
              <div className="flex items-center gap-2">
                  <button 
                      onClick={() => setShowShareModal(true)}
                      className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm text-gray-500"
                      title="Partajează Rețeta"
                  >
                     <ShareIcon />
                  </button>

                  <button 
                      onClick={() => setShowPlanModal(true)}
                      className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100 text-chef-intense shadow-sm"
                      title="Adaugă în planificator"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1-3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                      </svg>
                  </button>

                  <button 
                      onClick={toggleFavorite}
                      className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
                      title={isFavorite ? "Șterge de la favorite" : "Adaugă la favorite"}
                  >
                      {isFavorite ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 animate-[bounce_0.3s_ease-in-out]">
                              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                      ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                      )}
                  </button>

                  <button 
                      onClick={onBack}
                      className="bg-white text-slate-700 border border-slate-200 hover:border-chef-intense hover:text-chef-intense px-4 py-2 rounded-full font-bold shadow-sm transition-all flex items-center gap-1 text-xs md:text-sm hover:shadow-md"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                      </svg>
                      <span>Înapoi</span>
                  </button>
              </div>
          </div>
      </header>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowShareModal(false)}>
            <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl scale-100 transition-transform flex flex-col gap-4" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-extrabold text-slate-800">Distribuie Rețeta</h3>
                    <button onClick={() => setShowShareModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">✕</button>
                </div>
                
                <p className="text-sm text-gray-500 mb-2">Trimite <strong>{recipe.title}</strong> prietenilor tăi.</p>

                <button onClick={() => handleShare('whatsapp')} className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors group">
                    <WhatsappIcon />
                    <span className="font-bold text-gray-800 group-hover:text-green-800">WhatsApp</span>
                </button>

                <button onClick={() => handleShare('facebook')} className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl hover:bg-blue-100 transition-colors group">
                    <FacebookIcon />
                    <span className="font-bold text-gray-800 group-hover:text-blue-800">Facebook</span>
                </button>

                <button onClick={() => handleShare('copy')} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors group relative overflow-hidden">
                    {copyFeedback ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 text-white font-bold animate-fade-in">
                            {copyFeedback}
                        </div>
                    ) : (
                        <>
                           <div className="flex gap-3 items-center flex-1">
                                <InstagramIcon />
                                <div className="text-left">
                                    <span className="block font-bold text-gray-800">Instagram / Link</span>
                                    <span className="text-[10px] text-gray-500">Copiază link-ul pentru Story/Postare</span>
                                </div>
                           </div>
                           <LinkIcon />
                        </>
                    )}
                </button>

                {navigator.share && (
                    <button onClick={() => handleShare('native')} className="mt-2 text-center text-sm font-bold text-chef-intense hover:underline">
                        Mai multe opțiuni...
                    </button>
                )}
            </div>
        </div>
      )}

      {/* MAIN CONTENT - WIDE SINGLE COLUMN (With top padding to clear fixed header) */}
      <div className="w-full md:w-[90%] max-w-5xl mx-auto px-4 pt-28 md:pt-32 pb-6 flex flex-col gap-6">
        
        {/* A. Hero Image Card */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-64 md:h-[450px] w-full">
                <img 
                    src={displayImageUrl} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h1 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-3">
                        {recipe.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold">
                        <span className="bg-chef-intense px-3 py-1 rounded-full text-white shadow-sm">
                            ⏱️ {recipe.prepTime || "20 min"}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            🔥 {recipe.cookTime || "Mediu"}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                            ⚡ {nutrition.calories || 0} kcal <span className="font-normal opacity-80 text-[10px] uppercase">/ porție</span>
                        </span>
                        {/* Price Badge with Serving Size */}
                        <span className="bg-green-500/90 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/10 flex items-center gap-1 shadow-sm">
                            💰 ~{displayPrice.toFixed(0)} RON / {recipe.servingSize || "porție"}
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Stats Bar */}
            <div className="flex justify-between border-t border-gray-100 bg-gray-50/90 divide-x divide-gray-200 text-center">
                <div className="flex-1 p-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Proteine</div>
                    <div className="font-bold text-gray-800 text-base">{nutrition.protein || 0}g</div>
                    <div className="text-[9px] text-gray-400">per porție</div>
                </div>
                <div className="flex-1 p-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Carbo</div>
                    <div className="font-bold text-gray-800 text-base">{nutrition.carbs || 0}g</div>
                    <div className="text-[9px] text-gray-400">per porție</div>
                </div>
                <div className="flex-1 p-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Grăsimi</div>
                    <div className="font-bold text-gray-800 text-base">{nutrition.fat || 0}g</div>
                    <div className="text-[9px] text-gray-400">per porție</div>
                </div>
                <div className="flex-1 p-3 bg-blue-50/80">
                    <div className="text-[10px] font-bold text-chef-intense uppercase tracking-wider mb-1">Total Porții</div>
                    {/* Shows the scaled number of servings */}
                    <div className="font-bold text-chef-intense text-lg">{Math.round((recipe.servings || 1) * servingsMultiplier)}</div>
                </div>
            </div>
        </div>

        {/* B. Ingredients Section - FORCED COMPACT LAYOUT */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border border-gray-100 p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-gray-100 pb-3 gap-3">
                <div className="flex items-center flex-wrap gap-3">
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                        <span>🥕</span> Ingrediente
                    </h2>
                    {/* NEW: Shopping List Button (Subtle) */}
                    <button 
                        onClick={handleAddIngredientsToCart}
                        disabled={addedToCart}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${addedToCart ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-50 text-chef-intense border-blue-100 hover:bg-blue-100 hover:border-chef-intense active:scale-95'}`}
                    >
                        {addedToCart ? (
                            <>
                                <span>✔</span>
                                <span>Adăugat!</span>
                            </>
                        ) : (
                            <>
                                <span>🛒</span>
                                <span>Adaugă în listă</span>
                            </>
                        )}
                    </button>
                </div>
                
                {/* Stepper */}
                <div className="flex items-center bg-gray-100/80 rounded-xl p-1 border border-gray-200 shadow-inner">
                    <button 
                        onClick={() => setServingsMultiplier(Math.max(0.5, servingsMultiplier - 0.5))} 
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-chef-intense text-xl hover:scale-105 transition-transform active:scale-95 border border-gray-100"
                    >-</button>
                    <div className="px-4 text-center min-w-[80px]">
                        <span className="block font-extrabold text-gray-800 text-xl leading-none">{Math.round((recipe.servings || 1) * servingsMultiplier)}</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Porții</span>
                    </div>
                    <button 
                        onClick={() => setServingsMultiplier(servingsMultiplier + 0.5)} 
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-chef-intense text-xl hover:scale-105 transition-transform active:scale-95 border border-gray-100"
                    >+</button>
                </div>
            </div>

            {/* Compact Grid Layout: 2 Columns on Desktop, 1 on Mobile, No extra row gap */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                {adjustedIngredients.map((ing, idx) => (
                    <li key={idx} className={`flex flex-col py-2 border-b border-gray-50/50 md:border-0 ${ing.partner ? 'bg-blue-50/50 border-l-4 border-l-chef-intense my-1 p-2 rounded-r-lg shadow-sm' : ''}`}>
                        
                        {/* Ingredient Row */}
                        <div className="flex items-baseline gap-2 w-full flex-wrap">
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 self-center ${ing.partner ? 'bg-chef-intense' : 'bg-chef-intense'}`} />
                            <div className="flex-1 flex justify-between items-baseline min-w-0">
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className={`text-gray-700 font-medium text-base leading-tight ${ing.partner ? 'font-bold text-gray-900' : ''}`}>
                                        {ing.name}
                                    </span>
                                    {/* Purchase Link (Small Icon) */}
                                    {ing.purchaseUrl && (
                                        <a 
                                            href={ing.purchaseUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-green-100 hover:bg-green-100 transition-colors"
                                            title="Cumpără ingredientul"
                                        >
                                            🛒 Cumpără
                                        </a>
                                    )}
                                </div>
                                <span className="font-black text-gray-900 whitespace-nowrap ml-2 text-sm flex-shrink-0">{ing.amount}</span> 
                            </div>
                        </div>
                        
                        {/* --- BRAND PARTNERSHIP DISPLAY --- */}
                        {ing.partner && (
                            <div className="mt-2 ml-4 flex items-center gap-3">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">ChefBot recomandă</span>
                                <a href={ing.partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm hover:border-chef-intense transition-colors group">
                                    <img src={ing.partner.logoUrl} alt={ing.partner.name} className="h-5 w-auto object-contain" />
                                    <span className="text-xs font-bold text-gray-800 group-hover:text-chef-intense">{ing.partner.name}</span>
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>

        {/* C. Instructions - CLEAN LIST VIEW (NO SCROLL SPY) */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border border-gray-100 p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
                <span>👨‍🍳</span> Mod de preparare
            </h2>
            <div className="space-y-4">
                {recipe.steps.map((step, idx) => {
                    return (
                        <div 
                            key={idx} 
                            className="flex gap-4 p-4 rounded-2xl transition-all duration-300 border-l-4 border-transparent hover:border-chef-intense bg-gray-50/50 hover:bg-blue-50/80"
                        >
                            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-sm md:text-base border-2 transition-colors duration-300 bg-chef-light/20 text-chef-intense border-chef-light/30">
                                {idx + 1}
                            </div>
                            <p className="leading-relaxed text-base md:text-lg flex-1 pt-1 text-gray-700">
                                {step}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>

      </div>
    </div>
  );
};
