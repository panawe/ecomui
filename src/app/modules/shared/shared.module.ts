import { BrowserModule }                            from '@angular/platform-browser';
import { RouterModule }                             from '@angular/router';
import { NgModule, ModuleWithProviders }            from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { HttpModule }                               from '@angular/http';
import { CommonSharedModule }                       from './common.shared.module';


@NgModule({
  declarations: [ ],
  
  imports: [
     CommonModule, FormsModule, ReactiveFormsModule, HttpModule,
    
    CommonSharedModule
  ],
   
   exports: [
     // angular exports
     CommonModule, FormsModule, ReactiveFormsModule, HttpModule, CommonSharedModule
  ],
})
  
export class SharedModule {
  
}
  