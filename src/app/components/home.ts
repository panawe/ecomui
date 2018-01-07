import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  moduleId: 'module.id',
  selector: 'app-home',
  templateUrl: '../pages/home.html'
})

export class Home {
  title = 'Home Page';

}
