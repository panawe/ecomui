export class Category {
  id: number;
  image: string;
  parentId: number;
  top: number;
  column: number;
  sortOrder: number;
  status: number;
  parent: Category;
}