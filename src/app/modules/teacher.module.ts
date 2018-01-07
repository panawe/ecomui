import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { TeacherMenu } from '../components/menu/teacherMenu'; 

const routes: Routes = [
  
 ];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes), SharedModule
  ],
  
  exports: [],
  
  declarations: [ TeacherMenu ],
  
  providers: []
})

export class TeacherModule { }