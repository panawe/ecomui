import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Category } from '../models/category';
import { CategoryDescription } from '../models/categoryDescription';
import { Constants } from '../app.constants';
import { DataTableModule, DialogModule, InputTextareaModule } from 'primeng/primeng';
import {CategoryService} from '../services/category.service';
import { Cookie } from 'ng2-cookies/ng2-cookies'; 

@Component({ 
  selector: 'app-admin-category',
  templateUrl: '../pages/adminCategory.html',
  providers: [CategoryService]
})
export class AdminCategory implements OnInit {

  public categories: CategoryDescription[]=[];
  public error: String = '';
  public selectedCategory: Category = new Category();
  displayDialog: boolean;
  category: Category = new Category();
  newCategory: boolean;
  cols : any[];
  
  DETAIL: string = Constants.DETAIL;
  DELETE_LABEL: string = Constants.DELETE_LABEL;  
  SAVE_LABEL: string = Constants.SAVE_LABEL;  
  ADD_LABEL: string = Constants.ADD_LABEL; 
  
  constructor
  (
    private categoryService: CategoryService, 
    private changeDetectorRef : ChangeDetectorRef
  ) {

     this.categoryService.getAll()
      .subscribe((data: CategoryDescription[]) => {
        this.categories = data
      },
      error => console.log(error),
      () => console.log('Get all Colleges complete'));
    
  }
  ngOnInit() {
        this.cols = [
        {field: 'name', header: Constants.NAME, sortable : 'true'},
        {field: 'category.sortOrder', header: Constants.SORT_ORDER, sortable : 'true'}
    ];
  }

  public getAll(): void {
    this.categories = [];
    this.categoryService.getAll()
      .subscribe((data: CategoryDescription[]) => this.categories = data,
      error => console.log(error),
      () => console.log('Get all Categories complete'));
  }


  showDialogToAdd() {
    this.newCategory = true;
    this.category = new Category();
    this.displayDialog = true;
  }

  save() {
    try {
         this.error = '';
        this.categoryService.save(this.category)
        .subscribe(result => {
          if (result.id > 0) {            
            this.category = result;
          }
          else {
            this.error = Constants.saveFailed;
            this.displayDialog = true;
          }
        })
    }
    catch (e) {
      console.log(e);
    }


  }

 delete() {
        try {
          this.error = '';
          this.categoryService.delete(this.category)
        .subscribe(result => {
          if (result) { 
          }
          else {
            this.error = Constants.deleteFailed;
            this.displayDialog = true;
          }
        })
    }
    catch (e) {
      console.log(e);
    }
  }

  
  resetData() {
    this.category = null;
    this.displayDialog = false;
    this.changeDetectorRef.detectChanges();
  }
  
  onRowSelect(evt) {
    this.newCategory = false;
    this.category = this.clone(evt.data);
    this.displayDialog = true;
  }

   clone(e: Category): Category {
        let aCategory = new Category();
        for(let prop in e) {
            aCategory[prop] = e[prop];
        }
        return aCategory;
    }
 
}
