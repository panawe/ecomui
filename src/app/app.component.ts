import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Constants} from './app.constants';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Constants]
})
export class AppComponent {
  SEARCH_WEBSITE: string = Constants.SEARCH_WEBSITE;
  LOGOUT: string = Constants.LOGOUT;
  constructor(
    private router: Router) {

  }

  ngOnInit() {
    console.log('in AppComponent init');

  }

  ngOnDestroy() {
    // prevent memory leak when component  
  }
  public logout() {
    Cookie.deleteAll();
    this.router.navigate(["/"])
  }
}
