import { BrowserModule }                            from '@angular/platform-browser';
import { RouterModule }                             from '@angular/router';
import { NgModule, ModuleWithProviders }            from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { HttpModule }                               from '@angular/http'; 


import { TabViewModule, EditorModule, SharedModule, 
  FileUploadModule, StepsModule, InputTextareaModule, SpinnerModule,
  GrowlModule, ChartModule, PasswordModule, ToggleButtonModule,
  DataListModule, CheckboxModule, InputTextModule, SelectButtonModule,
  CalendarModule, RadioButtonModule, DropdownModule,InputMaskModule,
  AutoCompleteModule, DataTableModule, DialogModule, ListboxModule,
  GalleriaModule, MessagesModule, TreeNode, TreeModule,  FieldsetModule,
  DataGridModule, PanelModule ,UIChart, PickListModule, ScheduleModule}         from 'primeng/primeng';


@NgModule({
  declarations: [ ],
  
  imports: [
     CommonModule, FormsModule, ReactiveFormsModule, HttpModule, ToggleButtonModule,
     TabViewModule, EditorModule, SharedModule, FileUploadModule,InputMaskModule,SpinnerModule,
     StepsModule, InputTextareaModule, GrowlModule, ChartModule,SelectButtonModule,
     PasswordModule, DataListModule, CheckboxModule, InputTextModule, ListboxModule,
     CalendarModule, RadioButtonModule, DropdownModule, AutoCompleteModule, ScheduleModule,
     DataTableModule, DialogModule, GalleriaModule, MessagesModule, TreeModule, 
     DataGridModule, PanelModule, ScheduleModule,FieldsetModule
  ],
   
   exports: [
     // angular exports
     CommonModule, FormsModule, ReactiveFormsModule, HttpModule,
     
     // primeng exports
     TabViewModule, EditorModule, SharedModule, FileUploadModule, ToggleButtonModule,SpinnerModule,
     StepsModule, InputTextareaModule, GrowlModule, ChartModule, SelectButtonModule,ListboxModule,
     PasswordModule, DataListModule, CheckboxModule, InputTextModule, InputMaskModule,ScheduleModule,
     CalendarModule, RadioButtonModule, DropdownModule, AutoCompleteModule, UIChart,PickListModule,FieldsetModule,
     DataTableModule, DialogModule, GalleriaModule, MessagesModule, TreeModule, DataGridModule, PanelModule, ScheduleModule
  ],
})
  
export class CommonSharedModule {
  
}
  