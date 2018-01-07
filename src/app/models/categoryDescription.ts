import { Category } from '../models/category';
import { Language } from '../models/language';

export class CategoryDescription {
  id: number;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyword: string;
  language: Language;
  category: Category;
  categoryId: number;
  languageId: number;
}