import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {LoginService} from "../login/login.service";
import { Cookie } from "ng2-cookies";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public userData: string;
  public displayUserName: boolean = false;
  constructor(private router: Router,
              private localStorageService:LocalStorageService,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  navigateToLogIn(){
    this.router.navigate(['login']);
  }

  navigateToRegistration(){
    this.router.navigate(['register']);
  }

  getUserName(){
    this.userData = this.localStorageService.retrieve('userName');
    this.displayUserName = true;
    console.log( this.userData);
  }

  LogOut(){
    this.loginService.logOut();
    this.router.navigate(['login','User']);
    Cookie.delete('AccessToken');
  }

}
