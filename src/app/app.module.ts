import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Constants} from './app.constants';
import {CommonSharedModule} from './modules/shared/common.shared.module';
import {AppComponent} from './app.component';
import {Home} from './components/home';
import {routes} from './app.routes';
import {Login} from './components/login';

import {
  FilterService
} from './services/';


@NgModule({
  declarations: [
    AppComponent, Login, Home
  ],

  imports: [
    BrowserModule, BrowserAnimationsModule, CommonSharedModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],

  providers: [FilterService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {}