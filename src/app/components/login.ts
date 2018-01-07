import {Component, OnInit, Output, EventEmitter, NgZone} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Constants} from '../app.constants';
import {AppComponent} from '../app.component';
import {ChartModule} from 'primeng/primeng';
import {
  EditorModule, TabViewModule, PasswordModule, SharedModule, StepsModule, MenuItem,
  FileUploadModule, InputTextModule, CalendarModule, DropdownModule, AutoCompleteModule,
  MessagesModule, Message
} from 'primeng/primeng';

@Component({
  selector: 'user-login-form',
  templateUrl: '../pages/login.html',
  providers: [Constants]
})

export class Login implements OnInit {
  submitted = false;
  error = '';
  passwordSent = '';
  button = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
     // this.nextRoute = params["nextRoute"];
    });
  }

  ngOnInit() {
    
  }

  public login() {
    
    this.router.navigate(["/admin/adminCategory"]);
    
    
//    try {
//      if (this.button == 'password') {
//        this.sendPassword();
//      } else {
//        this.userService.login(this.user)
//          .subscribe(result => {
//            if (result == true) {
//
//              this.globalEventsManager.showNavBar.emit(this.user);
//
//              if (this.nextRoute != null) {
//                this.router.navigate([this.nextRoute]);
//              }
//              else {
//                this.user = JSON.parse(Cookie.get('user'));
//                if (this.user.role == 3) {//student
//                  this.router.navigate(["/student/studentMain"]);
//                } else if (this.user.role == 2) {//teacher
//                  this.router.navigate(["/teacher/teacherMain"]);
//                } else if (this.user.role == 1||this.user.role == 5) {//admin+ secretaire
//                  this.router.navigate(["/admin/adminDemand"]);
//                } else if (this.user.role == 4) {//parent
//                  this.router.navigate(["/parent/parentMain"]);
//                } else {
//                  this.router.navigate(["/"]);
//
//                }
//              }
//
//            }
//            else {
//              this.error = Constants.INVALID_USER_PASS;
//            }
//          })
//      }
//    }
//    catch (e) {
//      this.error = Constants.ERROR_OCCURRED;
//    }
  

  }
}
