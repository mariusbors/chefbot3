
import React, { useState, useEffect } from 'react';
import { recipeStore } from '../services/recipeStore';
import { MealPlanItem } from '../types';
import { Logo } from './Logo';
import { useNavigate, Link } from 'react-router-dom';

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

export const MealPlanner: React.FC = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<MealPlanItem[]>([]);

  useEffect(() => {
    setPlan(recipeStore.getMealPlan());
  }, []);

  const removeMeal = (id: string) => {
      recipeStore.removeFromMealPlan(id);
      setPlan(recipeStore.getMealPlan());
  };

  return (
    // Replaced bg-chef-grey with bg-transparent for body background visibility
    <div className="min-h-screen bg-transparent pb-24 pt-safe">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chef-grey shadow-sm transition-all">
          <div className="w-full md:w-[90%] max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
              <div onClick={() => navigate('/')} className="cursor-pointer">
                  <Logo />
              </div>
              
              <button 
                  onClick={() => navigate(-1)}
                  className="bg-white text-slate-700 border border-slate-200 hover:border-chef-intense hover:text-chef-intense px-4 py-2 rounded-full font-bold shadow-sm transition-all flex items-center gap-1 text-xs md:text-sm hover:shadow-md"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  <span>Înapoi</span>
              </button>
          </div>
      </header>

      <div className="w-full md:w-[90%] max-w-6xl mx-auto px-4 pt-20 md:pt-24 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-800 flex items-center gap-2">
                <span>📅</span> Planificator Mese
            </h1>
            <button onClick={() => navigate('/')} className="bg-chef-intense text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform text-sm">
                + Caută rețete pentru plan
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {DAYS.map(day => {
                const meals = plan.filter(p => p.day === day);
                const todayName = new Date().toLocaleDateString('ro-RO', {weekday: 'long'});
                const isToday = todayName.toLowerCase() === day.toLowerCase();

                return (
                    <div key={day} className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border p-4 flex flex-col gap-2 min-h-[150px] ${isToday ? 'border-chef-intense ring-2 ring-chef-intense/20' : 'border-gray-200'}`}>
                        <h3 className={`font-bold text-center mb-2 ${isToday ? 'text-chef-intense' : 'text-gray-600'}`}>{day}</h3>
                        
                        {meals.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center text-gray-300 text-sm italic text-center">
                                Planifică o masă<br/>din pagina rețetei
                            </div>
                        ) : (
                            meals.map(meal => (
                                <div key={meal.id} className="bg-gray-50/80 p-2 rounded-lg border border-gray-100 relative group cursor-pointer hover:shadow-md transition-all" onClick={() => navigate(`/recipe/${encodeURIComponent(meal.recipeTitle)}`)}>
                                    <div className="flex items-center gap-2 mb-1">
                                        {meal.recipeImage && (
                                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                                                <img src={meal.recipeImage} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="text-[10px] uppercase font-bold text-gray-400">{meal.mealType}</div>
                                    </div>
                                    <div className="font-bold text-sm text-gray-800 line-clamp-2 leading-tight">{meal.recipeTitle}</div>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); removeMeal(meal.id); }}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold shadow-sm"
                                        title="Șterge din plan"
                                    >✕</button>
                                </div>
                            ))
                        )}
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};
