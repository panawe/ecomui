import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Category } from '../models/category';
import { CategoryDescription } from '../models/categoryDescription';
import { Constants } from '../app.constants';
import { SelectItem, DataTableModule, DialogModule, InputTextareaModule } from 'primeng/primeng';
import { FilterService} from '../services/filter.service';
import { CategoryService} from '../services/category.service';
import { GenericService} from '../services/generic.service';
import { CategoryDto } from '../dto/categorydto';
import { Store } from '../models/store';
import { Filter } from '../models/filter';
import { Language } from '../models/language';
import { FilterDto } from '../dto/filterdto';
import { Cookie } from 'ng2-cookies/ng2-cookies'; 
import {CategoryDropdown} from './dropdowns/dropdown.category';

@Component({ 
  selector: 'app-admin-category',
  templateUrl: '../pages/adminCategory.html',
  providers: [FilterService, CategoryService, GenericService, CategoryDropdown]
})
export class AdminCategory implements OnInit {

  public categories: CategoryDto[]=[];
  public error: String = '';
  public selectedCategories: Category[] = [];
  displayDialog: boolean = false;
  displayTable: boolean = false;
  category: Category = new Category();
  categoryDescriptions: CategoryDescription[];
  newCategory: boolean;
  cols : any[];
  tabs: any[];
  public filters: FilterDto[];
  public stores: Store[];
  public languages: Language[];
  public selectedFilters: FilterDto[] = [];
  public selectedFilter: string;
  public selectedStores: number[];
 
  public categoryDropdown: CategoryDropdown;
  
  DETAIL: string = Constants.DETAIL;
  DELETE_LABEL: string = Constants.DELETE_LABEL;  
  SAVE_LABEL: string = Constants.SAVE_LABEL;  
  ADD_LABEL: string = Constants.ADD_LABEL; 
  REFRESH_LABEL: string = Constants.REFRESH_LABEL; 
  CANCEL_LABEL: string = Constants.CANCEL_LABEL; 
  
  constructor
  (
    private categoryService: CategoryService, 
    private filterService: FilterService, 
    private genericService: GenericService, 
    private catDropdown: CategoryDropdown,
    private changeDetectorRef : ChangeDetectorRef 
  ) {

     this.categoryDropdown = catDropdown;
     this.categoryService.getAll()
      .subscribe((data: CategoryDto[]) => { 
        this.categories = data
      },
      error => console.log(error),
      () => console.log('Get all Categories complete'));
    
       this.filterService.getAll()
      .subscribe((data: FilterDto[]) => { 
          this.filters = data;       
      },
      error => console.log(error),
      () => console.log('Get all Filters complete'));
    
      this.genericService.getAll('Store')
      .subscribe((data: any[]) => { 
          this.stores = data;     
      },
      error => console.log(error),
      () => console.log('Get all Stores complete'));
    
      this.genericService.getAll('Language')
      .subscribe((data: any[]) => { 
          this.languages = data;  
          this.setLanguages();
      },
      error => console.log(error),
      () => console.log('Get all Languages complete'));
  }
  
  
  ngOnInit() {
        this.cols = [
        {field: 'displayName', header: Constants.NAME, sortable : 'true'},
        {field: 'sortOrder', header: Constants.SORT_ORDER, sortable : 'true'}
    ];
  }

  public getAll(): void {
    this.categories = [];
    this.categoryService.getAll()
      .subscribe((data: CategoryDto[]) => this.categories = data,
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
        let selStores: Store[] = [];
        let aStore: Store; 
        for(let selectedStore in this.selectedStores) {
          aStore = new Store();
          aStore.id = this.selectedStores[selectedStore]  ;
          selStores.push(aStore);
        }
        
        let selFilters: Filter[] = [];
        let aFilter: Filter; 
        for(let selectedFilter in this.selectedFilters) {
          aFilter = new Filter();
          aFilter.id = this.selectedFilters[selectedFilter].id;
          selFilters.push(aFilter);
        }
        
        if (this.category.parent != null) {
          if (this.category.parent.id > 0) {
            let parent: Category = new Category();
            parent.id = this.category.parent.id;
            this.category.parent = parent;
          }
        }
        this.category.stores = selStores;
        this.category.filters = selFilters;

        
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
      if (this.selectedCategories.length > 0) {
        let ids : number[] = [];
         for (let index in this.selectedCategories) {
           ids.push(this.selectedCategories[index].id);
         }
        
         this.error = '';         
         this.categoryService.delete(ids)
          .subscribe(result => {
             if (result) { 
             }
             else {
                this.error = Constants.deleteFailed;
                this.displayDialog = true;
             }
          })
      } else {
        alert('Please select a category to delete. ');
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  edit(id : number) {
        try {
          this.error = '';
          
          this.categoryService.getOne(id)
        .subscribe(result => {
          if (result) { 
            this.category = result;
            this.toggleTableAndData();
          }
          else {
            this.error = Constants.deleteFailed;
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
  
  addNew() {
    
    this.category = new Category();
    this.setLanguages();
    this.toggleTableAndData();
  }
  
  setLanguages() {
    this.categoryDescriptions = [];  
    for (let lg in this.languages) {
      let catDesc = new CategoryDescription();
      catDesc.language.id = this.languages[lg].id;
      this.categoryDescriptions.push(catDesc);
    }
    this.category.categoryDescriptions = this.categoryDescriptions;
  }
  
  public toggleTableAndData() {

    this.displayDialog = !this.displayDialog;
    this.displayTable = !this.displayTable;
  
  }
 
}
