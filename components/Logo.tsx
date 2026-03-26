
import React from 'react';
import { ChefBotIcon } from './ChefBotIcon';

export const Logo: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const sizeClass = size === 'lg' ? 'w-32 h-32' : 'w-12 h-12';
  const textSize = size === 'lg' ? 'text-5xl' : 'text-2xl';
  const subtitleSize = size === 'lg' ? 'text-base' : 'text-[0.65rem]';

  return (
    <div className="flex items-center gap-3 select-none">
      <ChefBotIcon className={`${sizeClass} drop-shadow-sm`} />
      <div className="flex flex-col justify-center">
        <h1 className={`${textSize} font-extrabold text-chef-intense tracking-tight drop-shadow-sm leading-none`}>
          ChefBot
        </h1>
        <span className={`${subtitleSize} text-gray-400 font-medium tracking-wide italic`}>
          Rețeta perfectă din prima
        </span>
      </div>
    </div>
  );
};
