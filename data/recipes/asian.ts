
import { Recipe } from '../../types';
import { CHINESE_RECIPES } from './china';
import { THAI_RECIPES } from './thailand';

export const ASIAN_RECIPES: Record<string, Recipe> = {
  ...CHINESE_RECIPES,
  ...THAI_RECIPES
};
