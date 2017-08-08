import { Injectable } from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/map';
import {environment} from "../../environments/environment";
import {sharedEndPoints, loginEndPoint, registrationEndPoint} from "../common/global.constants";


@Injectable()
export class RegistrationService {

  public headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http) { }

  registerUser(userDetails){
    return this.http.post(environment.GATEWAY_URL + sharedEndPoints.USER_CONTEXT + registrationEndPoint.SIGN_UP_URL , userDetails, {
      headers: this.headers
    }).map((response) => response.json());
  }

  registerMerchant(merchantDetails){
    return this.http.post(environment.GATEWAY_URL + sharedEndPoints.MERCHANT_CONTEXT + registrationEndPoint.SIGN_UP_URL , merchantDetails, {
      headers: this.headers
    }).map((response) => response.json());
  }

  getDefaultSignUpObject(){
    let obj = {
      "email": "",
      "password": ""
    };
    return obj;
  }

}
