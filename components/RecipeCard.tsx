
import React, { useState, useEffect } from 'react';
import { generateRecipeImage } from '../services/geminiService';

interface RecipeCardProps {
  title: string;
  onClick: () => void;
  preloadImage?: boolean;
  isActive?: boolean;
  imageUrl?: string; // Optional prop to force a specific image
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ title, onClick, isActive, imageUrl }) => {
  const [imgError, setImgError] = useState(false);
  
  // If imageUrl is passed, use it. Otherwise, generate it.
  // CHANGED: Request 'large' size by default for consistency with detail view.
  // The browser will scale it down, but the URL will remain consistent.
  const finalImageUrl = imageUrl || generateRecipeImage(title, 'large');

  // Reset error state if title or url changes
  useEffect(() => {
      setImgError(false);
  }, [title, finalImageUrl]);

  return (
    <div 
      onClick={onClick}
      className={`group relative bg-white rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full border 
        ${isActive 
          ? 'border-chef-intense shadow-xl scale-[1.02] ring-2 ring-chef-intense ring-offset-2 z-10' 
          : 'border-gray-100/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-chef-intense/50'
        }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        {!imgError && finalImageUrl ? (
          <img 
            key={finalImageUrl} // FORCE RE-RENDER ON URL CHANGE
            src={finalImageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
           <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-50 relative overflow-hidden">
               {/* Decorative Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent" />
               <span className="text-5xl opacity-80 filter grayscale drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500">🍽️</span>
           </div>
        )}
        
        {/* Subtle overlay on hover */}
        <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-chef-intense/5' : 'bg-black/0 group-hover:bg-black/5'}`} />
      </div>
      
      {/* Content */}
      <div className={`p-5 flex-grow flex items-center justify-center bg-white transition-colors ${isActive ? 'bg-blue-50/30' : ''}`}>
        <h3 className={`font-extrabold text-base md:text-lg leading-snug text-center transition-colors line-clamp-3 ${isActive ? 'text-chef-intense' : 'text-gray-800 group-hover:text-chef-intense'}`}>
          {title}
        </h3>
      </div>
    </div>
  );
};
