import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: "login/:userType",
    component: LoginComponent
  },
  {
    path: "register/:userType",
    component: RegistrationComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRouting {}

