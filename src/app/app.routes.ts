import { Home } from './components/home';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from './components/login';


export const routes: Routes = [
  { path: 'admin', loadChildren: './modules/admin.module#AdminModule' },
  { path: 'login', component: Login },
  { path: '', component: Home, pathMatch: 'full' } // redirect to home page   
];
