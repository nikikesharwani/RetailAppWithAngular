import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "./registration.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public userType: string;
  public userDetails: any;

  constructor(private registrationService: RegistrationService,
              public activatedRouter: ActivatedRoute,
              private router: Router ) {
    activatedRouter.params.subscribe(
      (param:any) => this.userType = param['userType']
    );
  }

  ngOnInit() {
  }

  register(userType){
    if(userType == 'User'){
      this.registrationService.registerUser(this.userDetails).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    } else if(userType == 'Merchant'){
      this.registrationService.registerMerchant(this.userDetails).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
    this.router.navigate(['login',this.userType]);
  }

  submitForm(formData){
    console.log(formData);
    let userObj = this.registrationService.getDefaultSignUpObject();
    userObj.email = formData.userName;
    userObj.password = formData.password;
    this.userDetails = userObj;
    console.log(this.userDetails);
    this.register(this.userType);
  }

}
