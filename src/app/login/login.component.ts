import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {LoginService} from "./login.service";
import { Cookie } from "ng2-cookies";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {


  public userType: string;
  public userDetails: any;
  public accessToken: any;

  constructor( private router: Router,
               private localStorageService:LocalStorageService,
               public activatedRouter: ActivatedRoute,
               private loginService: LoginService,
  private headerComponent: HeaderComponent) {
    activatedRouter.params.subscribe(
      (param:any) => this.userType = param['userType']
    );
  }

  ngOnInit() {
  }


  authenticationDetails(userType){
    if(userType == 'User'){
      this.loginService.getAuthenticationForUser(this.userDetails).subscribe(
        data => this.accessToken = data.accessToken,
        error => console.log(error),
        () => this.navigateToDashboard()
      );
    } else if(userType == 'Merchant'){
      this.loginService.getAuthenticationForMerchant(this.userDetails).subscribe(
        data => this.accessToken = data.accessToken,
        error => console.log(error),
        () => this.navigateToDashboard()
      );
    }
  }

  submitForm(formData){
    let UserObject = this.loginService.getDefaultUserObject();
    UserObject.email = formData.userName;
    UserObject.password = formData.password;
    this.userDetails = UserObject;
    this.authenticationDetails(this.userType);
  }

  navigateToDashboard(){
    if(this.accessToken != null){
      this.localStorageService.store('userName', this.userDetails.email);
      this.headerComponent.getUserName();
      this.router.navigate(['dashboard']);
      Cookie.set('AccessToken', this.accessToken);
    } else {

    }
  }

}
