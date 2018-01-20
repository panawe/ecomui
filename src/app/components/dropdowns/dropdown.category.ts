import { Injectable, OnInit } from '@angular/core';
import { DropdownUtil } from './dropdown.util';
import { CategoryService } from '../../services/category.service';
import { CategoryDto } from '../../dto/categorydto';
 
@Injectable()
export class CategoryDropdown {
  
  filteredCategories : CategoryDto[];
  categories : CategoryDto[] = []; 
  
  constructor(
    private categoryService: CategoryService) {
    this.getAllCategories();
  }
  
  filter(event) {
    this.filteredCategories = DropdownUtil.filter(event, this.categories);
  }
  
  handleDropdownClick(event) {
    //this.filteredCategories = [];
    setTimeout(() => {
      this.filteredCategories = this.categories;
    }, 100)
  }
  
  private getAllCategories(): void {
    this.categoryService.getAll()
      .subscribe((data: CategoryDto[]) => this.categories = data,
      error => console.log(error),
      () => console.log('Get All Categories Complete'));
  }
  
}