import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

const routes: Routes = [
];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes), SharedModule
  ],
  
  exports: [],
  
  declarations: [],
  
  providers: []
})

export class ParentModule { }