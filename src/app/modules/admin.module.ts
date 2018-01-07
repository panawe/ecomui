import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AdminCategory } from '../components/adminCategory';

const routes: Routes = [
  { path: 'adminCategory', component: AdminCategory },
  ];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes), SharedModule
  ],
  
  exports: [],
  
  declarations: [ AdminCategory],
  
  providers: []
})

export class AdminModule { }