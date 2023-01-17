import { CATEGORIES } from '../config/categories';
import { Category } from '../types';

export const isValidCategory = (category: unknown): category is Category => {
  return typeof category === 'string' && Object.keys(CATEGORIES).includes(category);
};
