import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {HeaderComponent} from "./header/header.component";
import {LoginService} from "./login/login.service";
import {RegistrationService} from "./registration/registration.service";
import {FormsModule} from "@angular/forms";
import {AppRouting} from "./app.routes";
import {Ng2Webstorage} from "ngx-webstorage";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    Ng2Webstorage,
    HttpModule
  ],
  providers: [LoginService,
  RegistrationService, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
