import { Injectable } from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/map';
import { Cookie } from "ng2-cookies";
import {environment} from "../../environments/environment";
import {sharedEndPoints, loginEndPoint} from "../common/global.constants";
import {LocalStorageService} from "ngx-webstorage";


@Injectable()
export class LoginService {

  public headers = new Headers({ 'Content-Type': 'application/json' });
  public accessToken = Cookie.get('AccessToken');

  constructor(private http: Http,
              private localStorageService:LocalStorageService) { }

  getAuthenticationForUser(UserLoginDetails){
    return this.http.post(environment.GATEWAY_URL + sharedEndPoints.USER_CONTEXT + loginEndPoint.LOGIN_URL , UserLoginDetails, {
      headers: this.headers
    }).map((response) => response.json());
  }

  getAuthenticationForMerchant(MerchantLoginDetails){
    return this.http.post(environment.GATEWAY_URL + sharedEndPoints.MERCHANT_CONTEXT + loginEndPoint.LOGIN_URL , MerchantLoginDetails, {
      headers: this.headers
    }).map((response) => response.json());
  }


  getDefaultUserObject(){
    let userObj = {
      "email": "",
      "password": ""
    };
    return userObj;
  }

  logOut(){
    Cookie.delete('AccessToken');
    this.localStorageService.clear('userName');
  }
}
