import { CategoryDescription } from '../models/categoryDescription';
import { Store } from '../models/store';
import { Filter } from '../models/filter';

export class Category {
  id: number;
  image: string;
  parentId: number;
  top: number;
  column: number;
  sortOrder: number;
  status: number;
  parent: Category;
  
  stores: Store[];
  filters: Filter[];
  categoryDescriptions: CategoryDescription[];
}