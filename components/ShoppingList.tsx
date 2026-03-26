
import React, { useState, useEffect } from 'react';
import { recipeStore } from '../services/recipeStore';
import { ShoppingItem } from '../types';
import { Logo } from './Logo';
import { useNavigate, useLocation } from 'react-router-dom';

export const ShoppingList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [newItemText, setNewItemText] = useState('');

  // Function to sync state with store
  const syncItems = () => {
      setItems([...recipeStore.getShoppingList()]);
  };

  useEffect(() => {
    // Initial load
    syncItems();

    // Subscribe to store updates
    const unsubscribe = recipeStore.subscribe(syncItems);
    return () => unsubscribe();
  }, []);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    recipeStore.addToShoppingList({
      id: Date.now().toString(),
      text: newItemText,
      isChecked: false
    });
    setNewItemText('');
  };

  const toggleItem = (id: string) => {
    recipeStore.toggleShoppingItem(id);
  };

  const removeItem = (id: string) => {
    recipeStore.removeShoppingItem(id);
  };

  const clearChecked = () => {
    recipeStore.clearCheckedItems();
    syncItems();
  };
  
  const clearAll = () => {
      if (confirm("Sigur vrei să ștergi toată lista? Această acțiune nu poate fi anulată.")) {
          recipeStore.clearShoppingList();
      }
  };

  const handleBack = () => {
      if (window.history.state && window.history.state.idx > 0) {
          navigate(-1);
      } else {
          navigate('/', { replace: true });
      }
  };

  const checkedCount = items.filter(i => i.isChecked).length;

  return (
    // Replaced bg-chef-grey with bg-transparent for body background visibility
    <div className="min-h-screen bg-transparent pb-24 pt-safe">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chef-grey shadow-sm transition-all">
          <div className="w-full md:w-[90%] max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
              <div onClick={() => navigate('/')} className="cursor-pointer">
                  <Logo />
              </div>

              <button 
                  onClick={handleBack}
                  className="bg-white text-slate-700 border border-slate-200 hover:border-chef-intense hover:text-chef-intense px-4 py-2 rounded-full font-bold shadow-sm transition-all flex items-center gap-1 text-xs md:text-sm hover:shadow-md"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  <span>Înapoi</span>
              </button>
          </div>
      </header>

      <div className="w-full md:w-[90%] max-w-2xl mx-auto px-4 pt-20 md:pt-24 pb-6">
        <div className="flex justify-between items-center mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 flex items-center gap-2">
                <span>🛒</span> Lista
            </h1>
            
            {items.length > 0 && (
                <button 
                    onClick={clearAll}
                    className="text-red-500 text-xs font-bold bg-white border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors shadow-sm flex items-center gap-1"
                >
                    <span>🗑️</span> Șterge tot
                </button>
            )}
        </div>

        {/* Add Form */}
        <form onSubmit={handleAddItem} className="mb-8 relative">
            <input 
                type="text" 
                placeholder="Adaugă produs (ex: Lapte 1L)..." 
                className="w-full p-3 pr-12 rounded-2xl border-none shadow-md focus:ring-4 focus:ring-chef-light/50 outline-none text-lg bg-white/90 backdrop-blur-sm"
                value={newItemText}
                onChange={e => setNewItemText(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-chef-intense text-white px-4 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                +
            </button>
        </form>

        {/* List */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            {items.length === 0 ? (
                <div className="p-10 text-center text-gray-400 flex flex-col items-center gap-4">
                    <span className="text-6xl opacity-30">📝</span>
                    <p>Lista ta este goală.<br/>Adaugă ingrediente din rețete sau manual.</p>
                </div>
            ) : (
                <ul className="divide-y divide-gray-100">
                    {items.map(item => (
                        <li 
                            key={item.id} 
                            className={`group flex items-center justify-between py-2.5 px-4 hover:bg-gray-50/80 transition-colors cursor-pointer ${item.isChecked ? 'bg-gray-50/80' : ''}`}
                            onClick={() => toggleItem(item.id)}
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.isChecked ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                                    {item.isChecked && <span className="text-white text-xs font-bold">✓</span>}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-base font-medium transition-all ${item.isChecked ? 'text-gray-400 line-through decoration-2' : 'text-gray-800'}`}>
                                        {item.text}
                                    </span>
                                    {item.sourceRecipe && (
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                                            Din: {item.sourceRecipe}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button 
                                onClick={(e) => { e.stopPropagation(); removeItem(item.id); }} 
                                className="p-2 text-gray-300 hover:text-red-500 transition-colors md:opacity-0 md:group-hover:opacity-100 opacity-100"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

        {items.some(i => i.isChecked) && (
            <div className="mt-6 flex justify-center mb-10">
                <button 
                    onClick={(e) => { e.stopPropagation(); clearChecked(); }} 
                    className="text-white text-sm font-bold bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 transition-colors shadow-lg flex items-center gap-2 active:scale-95"
                >
                    <span>🗑️</span>
                    Elimină produsele ({checkedCount})
                </button>
            </div>
        )}

      </div>
    </div>
  );
};
