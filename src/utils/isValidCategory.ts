import { CATEGORIES } from '../config/categories';
import type { Category } from '../types';

export const isValidCategory = (category: unknown): category is Category => {
  return typeof category === 'string' && Object.keys(CATEGORIES).includes(category);
};
